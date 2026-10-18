window.factoryApi = (() => {
  const tokenKey = "factory_api_token";
  const request = async (path, options = {}) => {
    const headers = { "content-type": "application/json", ...(options.headers || {}) };
    const token = localStorage.getItem(tokenKey);
    if (token) headers.authorization = "Bearer " + token;
    const response = await fetch(path, { ...options, headers });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.error || "تعذر الاتصال بالخادم");
    return body;
  };
  return {
    signIn: async (email, password) => { const result = await request("/api/auth/signin", { method: "POST", body: JSON.stringify({ email, password }) }); localStorage.setItem(tokenKey, result.token); return result; },
    signUp: async (email, password, organizationName, organizationCode) => { const result = await request("/api/auth/signup", { method: "POST", body: JSON.stringify({ email, password, organizationName, organizationCode }) }); localStorage.setItem(tokenKey, result.token); return result; },
    me: () => request("/api/auth/me"),
    signOut: () => { localStorage.removeItem(tokenKey); },
    records: (organizationId) => request(`/api/organizations/${encodeURIComponent(organizationId)}/records`),
    upsert: (organizationId, collection, record) => request(`/api/organizations/${encodeURIComponent(organizationId)}/records/${encodeURIComponent(collection)}/${encodeURIComponent(record.id)}`, { method: "PUT", body: JSON.stringify({ payload: record }) }),
    remove: (organizationId, collection, id) => request(`/api/organizations/${encodeURIComponent(organizationId)}/records/${encodeURIComponent(collection)}/${encodeURIComponent(id)}`, { method: "DELETE" })
  };
})();
