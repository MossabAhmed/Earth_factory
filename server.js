const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");

const PORT = Number(process.env.PORT || 3000);
const JWT_SECRET = process.env.JWT_SECRET || "change-this-secret-in-production";
const collections = new Set(["projects", "invoices", "expenses", "income", "inventory", "customers", "suppliers", "workers", "attendance", "personalLog"]);
const json = (res, status, body) => { res.writeHead(status, { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*" }); res.end(JSON.stringify(body)); };
const readBody = (req) => new Promise((resolve, reject) => { let raw = ""; req.on("data", (chunk) => { raw += chunk; if (raw.length > 5e6) reject(new Error("Payload too large")); }); req.on("end", () => { try { resolve(raw ? JSON.parse(raw) : {}); } catch { reject(new Error("Invalid JSON")); } }); req.on("error", reject); });
const tokenFor = (userId) => jwt.sign({ userId }, JWT_SECRET, { expiresIn: "30d" });
const userFrom = (req) => { const value = req.headers.authorization || ""; if (!value.startsWith("Bearer ")) return null; try { return jwt.verify(value.slice(7), JWT_SECRET); } catch { return null; } };
const member = (userId, organizationId) => db.prepare("SELECT 1 FROM organization_members WHERE user_id = ? AND organization_id = ?").get(userId, organizationId);
const orgFor = (userId, name, code) => {
  const existing = db.prepare("SELECT o.id, o.name, o.invite_code FROM organizations o JOIN organization_members m ON m.organization_id = o.id WHERE m.user_id = ? LIMIT 1").get(userId);
  if (existing) return existing;
  let org = code ? db.prepare("SELECT id, name, invite_code FROM organizations WHERE upper(invite_code) = upper(?)").get(code.trim()) : null;
  if (code && !org) throw new Error("Invalid organization code");
  if (!org) {
    org = { id: crypto.randomUUID(), name: (name || "Factory").trim() || "Factory", invite_code: crypto.randomBytes(4).toString("hex").toUpperCase() };
    db.prepare("INSERT INTO organizations (id, name, invite_code) VALUES (?, ?, ?)").run(org.id, org.name, org.invite_code);
    db.prepare("INSERT INTO organization_members (organization_id, user_id, role) VALUES (?, ?, 'owner')").run(org.id, userId);
  } else db.prepare("INSERT OR IGNORE INTO organization_members (organization_id, user_id, role) VALUES (?, ?, 'member')").run(org.id, userId);
  return org;
};
const serveStatic = (req, res) => {
  const requested = req.url === "/" ? "/index.html" : req.url.split("?")[0];
  const filePath = path.join(__dirname, requested);
  if (!filePath.startsWith(__dirname) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return false;
  const types = { ".html": "text/html; charset=utf-8", ".js": "application/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".jpeg": "image/jpeg", ".jpg": "image/jpeg", ".png": "image/png" };
  res.writeHead(200, { "content-type": types[path.extname(filePath)] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
  return true;
};
const routes = async (req, res) => {
  if (req.method === "OPTIONS") return json(res, 204, {});
  if (!req.url.startsWith("/api/")) return serveStatic(req, res) || json(res, 404, { error: "الملف غير موجود" });
  if (req.method === "GET" && req.url === "/api/health") return json(res, 200, { ok: true });
  try {
    const body = ["POST", "PUT"].includes(req.method) ? await readBody(req) : {};
    if (req.method === "POST" && req.url === "/api/auth/signup") {
      const email = String(body.email || "").trim().toLowerCase();
      if (!email || String(body.password || "").length < 6) return json(res, 400, { error: "البريد أو كلمة المرور غير صالحين" });
      if (db.prepare("SELECT id FROM users WHERE email = ?").get(email)) return json(res, 409, { error: "الحساب موجود مسبقًا" });
      const userId = crypto.randomUUID();
      db.prepare("INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)").run(userId, email, await bcrypt.hash(body.password, 12));
      const organization = orgFor(userId, body.organizationName, body.organizationCode);
      return json(res, 201, { token: tokenFor(userId), user: { id: userId, email }, organization });
    }
    if (req.method === "POST" && req.url === "/api/auth/signin") {
      const email = String(body.email || "").trim().toLowerCase();
      const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
      if (!user || !(await bcrypt.compare(String(body.password || ""), user.password_hash))) return json(res, 401, { error: "البريد أو كلمة المرور غير صحيحة" });
      const organization = orgFor(user.id);
      return json(res, 200, { token: tokenFor(user.id), user: { id: user.id, email }, organization });
    }
    const auth = userFrom(req);
    if (!auth) return json(res, 401, { error: "يجب تسجيل الدخول" });
    if (req.method === "GET" && req.url === "/api/auth/me") {
      const user = db.prepare("SELECT id, email FROM users WHERE id = ?").get(auth.userId);
      return user ? json(res, 200, { user, organization: orgFor(user.id) }) : json(res, 401, { error: "الحساب غير موجود" });
    }
    const match = req.url.match(/^\/api\/organizations\/([^/]+)\/records(?:\/([^/]+)\/([^/]+))?$/);
    if (!match) return json(res, 404, { error: "المسار غير موجود" });
    const [, organizationId, collection, id] = match;
    if (!member(auth.userId, organizationId)) return json(res, 403, { error: "لا تملك صلاحية الوصول" });
    if (collection && !collections.has(collection)) return json(res, 400, { error: "مجموعة غير مدعومة" });
    if (req.method === "GET") {
      const rows = db.prepare("SELECT collection, id, payload FROM app_records WHERE organization_id = ? ORDER BY collection, id").all(organizationId).map((row) => ({ collection: row.collection, id: row.id, payload: JSON.parse(row.payload) }));
      return json(res, 200, { rows });
    }
    if (req.method === "PUT" && collection && id) {
      const payload = body.payload && typeof body.payload === "object" ? body.payload : body;
      db.prepare("INSERT INTO app_records (organization_id, collection, id, payload) VALUES (?, ?, ?, ?) ON CONFLICT(organization_id, collection, id) DO UPDATE SET payload = excluded.payload").run(organizationId, collection, id, JSON.stringify(payload));
      return json(res, 200, { ok: true });
    }
    if (req.method === "DELETE" && collection && id) {
      db.prepare("DELETE FROM app_records WHERE organization_id = ? AND collection = ? AND id = ?").run(organizationId, collection, id);
      return json(res, 200, { ok: true });
    }
    return json(res, 405, { error: "العملية غير مدعومة" });
  } catch (error) { console.error(error); return json(res, 500, { error: error.message || "خطأ داخلي" }); }
};
http.createServer((req, res) => routes(req, res)).listen(PORT, () => console.log(`Earth Factory API listening on http://localhost:${PORT}`));
