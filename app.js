(() => {
  const { useState: y, useEffect: be, useMemo: ke, useRef: ye } = React;
  var nt, lt;
  try {
    const e = localStorage.getItem("factory_theme"),
      a =
        e === "dark" ||
        (!e &&
          (nt = window.matchMedia) != null &&
          nt.call(window, "(prefers-color-scheme: dark)").matches)
          ? "dark"
          : "light";
    (lt = document.documentElement) == null || lt.setAttribute("data-theme", a);
  } catch (e) {}
  const it = "https://vztrttetazdswwtroude.supabase.co",
    ct = "sb_publishable_llWBFoeSd2chUVvsqCkInA_8zMmyIZC";
  var dt;
  const _e =
      it.startsWith("https://") &&
      !ct.startsWith("YOUR_") &&
      !!((dt = window.supabase) != null && dt.createClient),
    de = _e && window.supabase ? window.supabase.createClient(it, ct) : null,
    Pe =
      "\u0634\u0631\u0643\u0629 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0643\u0628\u0631\u0649 \u0644\u0644\u0637\u0644\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A",
    Ee = "Africa/Tripoli",
    ht = {
      dashboard: React.createElement(
        React.Fragment,
        null,
        React.createElement("rect", {
          x: "3",
          y: "3",
          width: "7",
          height: "7",
          rx: "1.2",
        }),
        React.createElement("rect", {
          x: "14",
          y: "3",
          width: "7",
          height: "7",
          rx: "1.2",
        }),
        React.createElement("rect", {
          x: "3",
          y: "14",
          width: "7",
          height: "7",
          rx: "1.2",
        }),
        React.createElement("rect", {
          x: "14",
          y: "14",
          width: "7",
          height: "7",
          rx: "1.2",
        }),
      ),
      factory: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M4 21V11l5 3v-3l5 3V8l5 3v10H4z" }),
        React.createElement("line", { x1: "2", y1: "21", x2: "22", y2: "21" }),
      ),
      receipt: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M6 2h12v19l-3-2-3 2-3-2-3 2V2z" }),
        React.createElement("line", { x1: "9", y1: "7", x2: "15", y2: "7" }),
        React.createElement("line", { x1: "9", y1: "11", x2: "15", y2: "11" }),
      ),
      wallet: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", {
          d: "M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3",
        }),
        React.createElement("rect", {
          x: "3",
          y: "7",
          width: "18",
          height: "12",
          rx: "2",
        }),
        React.createElement("circle", {
          cx: "16.5",
          cy: "13.5",
          r: "1.4",
          fill: "currentColor",
          stroke: "none",
        }),
      ),
      package: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M21 8l-9-5-9 5 9 5 9-5z" }),
        React.createElement("path", { d: "M3 8v8l9 5 9-5V8" }),
        React.createElement("path", { d: "M12 13v8" }),
      ),
      plus: React.createElement(
        React.Fragment,
        null,
        React.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      ),
      minus: React.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12",
      }),
      x: React.createElement(
        React.Fragment,
        null,
        React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ),
      search: React.createElement(
        React.Fragment,
        null,
        React.createElement("circle", { cx: "11", cy: "11", r: "7" }),
        React.createElement("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65",
        }),
      ),
      mappin: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", {
          d: "M12 22s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12z",
        }),
        React.createElement("circle", { cx: "12", cy: "10", r: "2.3" }),
      ),
      phone: React.createElement(
        React.Fragment,
        null,
        React.createElement("rect", {
          x: "6",
          y: "2",
          width: "12",
          height: "20",
          rx: "2.5",
        }),
        React.createElement("line", { x1: "10", y1: "18", x2: "14", y2: "18" }),
      ),
      alert: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M12 3l10 17.5H2L12 3z" }),
        React.createElement("line", {
          x1: "12",
          y1: "9.5",
          x2: "12",
          y2: "14",
        }),
        React.createElement("circle", {
          cx: "12",
          cy: "17",
          r: "0.7",
          fill: "currentColor",
          stroke: "none",
        }),
      ),
      trash: React.createElement(
        React.Fragment,
        null,
        React.createElement("line", { x1: "4", y1: "7", x2: "20", y2: "7" }),
        React.createElement("path", { d: "M6 7l1 14h10l1-14" }),
        React.createElement("path", { d: "M9 7V4h6v3" }),
      ),
      check: React.createElement("polyline", { points: "4,12 9,17 20,6" }),
      trendUp: React.createElement(
        React.Fragment,
        null,
        React.createElement("polyline", { points: "3,17 9,11 13,15 21,7" }),
        React.createElement("polyline", { points: "14,7 21,7 21,14" }),
      ),
      trendDown: React.createElement(
        React.Fragment,
        null,
        React.createElement("polyline", { points: "3,7 9,13 13,9 21,17" }),
        React.createElement("polyline", { points: "14,17 21,17 21,10" }),
      ),
      calendar: React.createElement(
        React.Fragment,
        null,
        React.createElement("rect", {
          x: "3",
          y: "5",
          width: "18",
          height: "16",
          rx: "2",
        }),
        React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
        React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
        React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
      ),
      user: React.createElement(
        React.Fragment,
        null,
        React.createElement("circle", { cx: "12", cy: "8", r: "4" }),
        React.createElement("path", { d: "M4 21c0-4 4-6 8-6s8 2 8 6" }),
      ),
      users: React.createElement(
        React.Fragment,
        null,
        React.createElement("circle", { cx: "9", cy: "8", r: "3" }),
        React.createElement("path", { d: "M2 20c0-3.3 2.8-5 7-5s7 1.7 7 5" }),
        React.createElement("path", { d: "M17 3.2a3 3 0 0 1 0 5.6" }),
        React.createElement("path", { d: "M22 20c0-2.5-1.7-4-4-4.6" }),
      ),
      briefcase: React.createElement(
        React.Fragment,
        null,
        React.createElement("rect", {
          x: "2",
          y: "7",
          width: "20",
          height: "13",
          rx: "2",
        }),
        React.createElement("path", {
          d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
        }),
        React.createElement("line", { x1: "2", y1: "13", x2: "22", y2: "13" }),
      ),
      arrowRight: React.createElement(
        React.Fragment,
        null,
        React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
        React.createElement("polyline", { points: "13,6 19,12 13,18" }),
      ),
      truck: React.createElement(
        React.Fragment,
        null,
        React.createElement("rect", {
          x: "1",
          y: "7",
          width: "13",
          height: "10",
          rx: "1",
        }),
        React.createElement("path", { d: "M14 10h4l3 3v4h-7" }),
        React.createElement("circle", { cx: "5.5", cy: "19", r: "1.6" }),
        React.createElement("circle", { cx: "17.5", cy: "19", r: "1.6" }),
      ),
      rotate: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
        React.createElement("polyline", { points: "3,4 3,9 8,9" }),
      ),
      ruler: React.createElement(
        React.Fragment,
        null,
        React.createElement("rect", {
          x: "2",
          y: "9",
          width: "20",
          height: "6",
          rx: "1",
        }),
        React.createElement("line", { x1: "6", y1: "9", x2: "6", y2: "12" }),
        React.createElement("line", { x1: "10", y1: "9", x2: "10", y2: "12" }),
        React.createElement("line", { x1: "14", y1: "9", x2: "14", y2: "12" }),
        React.createElement("line", { x1: "18", y1: "9", x2: "18", y2: "12" }),
      ),
      hammer: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M15 4l5 5-2 2-5-5 2-2z" }),
        React.createElement("path", { d: "M13 8l-9 9v3h3l9-9" }),
      ),
      circleDot: React.createElement(
        React.Fragment,
        null,
        React.createElement("circle", { cx: "12", cy: "12", r: "9" }),
        React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "2.3",
          fill: "currentColor",
          stroke: "none",
        }),
      ),
      barChart: React.createElement(
        React.Fragment,
        null,
        React.createElement("rect", {
          x: "4",
          y: "12",
          width: "3.5",
          height: "8",
        }),
        React.createElement("rect", {
          x: "10.2",
          y: "6",
          width: "3.5",
          height: "14",
        }),
        React.createElement("rect", {
          x: "16.5",
          y: "15",
          width: "3.5",
          height: "5",
        }),
      ),
      download: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M12 3v12" }),
        React.createElement("polyline", { points: "7,11 12,16 17,11" }),
        React.createElement("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
      ),
      upload: React.createElement(
        React.Fragment,
        null,
        React.createElement("path", { d: "M12 21V9" }),
        React.createElement("polyline", { points: "7,14 12,9 17,14" }),
        React.createElement("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
      ),
      more: React.createElement(
        React.Fragment,
        null,
        React.createElement("circle", { cx: "5", cy: "12", r: "1" }),
        React.createElement("circle", { cx: "12", cy: "12", r: "1" }),
        React.createElement("circle", { cx: "19", cy: "12", r: "1" }),
      ),
      moon: React.createElement("path", {
        d: "M20.5 15.3A8.5 8.5 0 0 1 8.7 3.5 8.5 8.5 0 1 0 20.5 15.3z",
      }),
      sun: React.createElement(
        React.Fragment,
        null,
        React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
        React.createElement("path", {
          d: "M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42",
        }),
      ),
    };
  function D({ name: e, size: a = 16, color: t, style: r, className: i }) {
    return React.createElement(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: t || "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: r,
        className: i,
      },
      ht[e],
    );
  }
  const ne = () =>
      Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    Z = () => {
      const e = new Intl.DateTimeFormat("en-CA", {
          timeZone: Ee,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).formatToParts(new Date()),
        a = (t) => {
          var r;
          return (
            ((r = e.find((i) => i.type === t)) == null ? void 0 : r.value) ||
            "00"
          );
        };
      return `${a("year")}-${a("month")}-${a("day")}`;
    },
    Le = () => {
      const e = new Intl.DateTimeFormat("en-GB", {
          timeZone: Ee,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).formatToParts(new Date()),
        a = (t) => {
          var r;
          return (
            ((r = e.find((i) => i.type === t)) == null ? void 0 : r.value) ||
            "00"
          );
        };
      return `${a("year")}-${a("month")}-${a("day")}T${a("hour")}:${a("minute")}`;
    },
    Be = (e) => (e ? (e.length === 10 ? `${e}T00:00` : e.slice(0, 16)) : Le()),
    mt = (e) => {
      if (!e) return new Date(NaN);
      const a = String(e);
      return /^\d{4}-\d{2}-\d{2}$/.test(a)
        ? new Date(`${a}T12:00:00+02:00`)
        : /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(a)
          ? new Date(`${a}:00+02:00`)
          : new Date(a);
    },
    ut = (e) => {
      if (!e) return "";
      const a = mt(Be(e));
      return Number.isNaN(a.getTime())
        ? e
        : a.toLocaleString("ar-LY", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: Ee,
          });
    },
    Nt = (e) => {
      if (!e) return "\u0628\u062F\u0648\u0646 \u062A\u0627\u0631\u064A\u062E";
      const a = mt(Be(e));
      return Number.isNaN(a.getTime())
        ? e.slice(0, 10)
        : a.toLocaleDateString("ar-LY", { dateStyle: "full", timeZone: Ee });
    },
    wt = (e, a) => {
      const t = String(e.date || ""),
        r = String(a.date || ""),
        i = t.slice(0, 10),
        d = r.slice(0, 10);
      return i !== d
        ? d.localeCompare(i)
        : t.localeCompare(r) || String(e.id).localeCompare(String(a.id));
    },
    N = (e) => Number(e || 0).toLocaleString("en-US"),
    H = (e) => Number.isFinite(Number(e)) && Number(e) > 0,
    pe = (e) => Number.isFinite(Number(e)) && Number(e) >= 0,
    pt = (e, a) => {
      const t = { ...e, ...a };
      return (
        (Object.prototype.hasOwnProperty.call(a, "quantity") ||
          Object.prototype.hasOwnProperty.call(a, "unitPrice")) &&
          (t.total =
            t.quantity !== "" &&
            t.unitPrice !== "" &&
            pe(t.quantity) &&
            pe(t.unitPrice)
              ? String(
                  Math.round(Number(t.quantity) * Number(t.unitPrice) * 1e3) /
                    1e3,
                )
              : ""),
        t
      );
    },
    vt = (e, a) =>
      (e || [])
        .filter((t) => String(t[a] || "").trim() && H(t.total))
        .reduce((t, r) => t + Number(r.total || 0), 0),
    kt = (e, a) => {
      const t = Math.round(Number(e || 0) * 1e3) / 1e3,
        r = Math.round(Number(a || 0) * 1e3) / 1e3;
      return {
        grossAmount: t,
        discountAmount: r,
        netAmount: Math.round((t - r) * 1e3) / 1e3,
      };
    },
    re = (e) => (e || "").slice(0, 7),
    oe = (e) =>
      String(e || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLocaleLowerCase("ar"),
    qe = (e, a, t = null) =>
      (e || []).some((r) => r.id !== t && oe(r.name) === oe(a)),
    we = (e) =>
      (e.transactions || []).reduce(
        (a, t) =>
          a + (t.type === "debit" ? Number(t.amount) : -Number(t.amount)),
        0,
      ),
    Ct = (e, a) =>
      a.filter(
        (t) =>
          t.customerId === e.id || (!t.customerId && t.customerName === e.name),
      ),
    We = (e, a = []) =>
      (a || [])
        .filter(
          (t) =>
            !t.projectId &&
            Number(t.amount) > 0 &&
            (t.customerId
              ? t.customerId === e.id
              : t.customerName && oe(t.customerName) === oe(e.name)),
        )
        .sort((t, r) => (t.date || "").localeCompare(r.date || "")),
    Oe = (e, a, t) => {
      const r = we(e),
        i = Ct(e, a).map((o) => Ce(o, t)),
        d = i.reduce((o, l) => o + l.remaining, 0),
        b = i.reduce((o, l) => o + l.surplus, 0),
        v = We(e, t).reduce((o, l) => o + Number(l.amount || 0), 0);
      return {
        ledger: r,
        projectsRemaining: d,
        projectsSurplus: b,
        directPaid: v,
        total: r + d - b - v,
      };
    },
    Y = (e) =>
      String(e != null ? e : "").replace(
        /[&<>"']/g,
        (a) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
          })[a],
      );
  function Fe(e) {
    const a = Math.round(Number(e) || 0);
    if (a === 0) return "\u0635\u0641\u0631";
    if (a < 0) return "\u0633\u0627\u0644\u0628 " + Fe(-a);
    const t = [
        "",
        "\u0648\u0627\u062D\u062F",
        "\u0627\u062B\u0646\u0627\u0646",
        "\u062B\u0644\u0627\u062B\u0629",
        "\u0623\u0631\u0628\u0639\u0629",
        "\u062E\u0645\u0633\u0629",
        "\u0633\u062A\u0629",
        "\u0633\u0628\u0639\u0629",
        "\u062B\u0645\u0627\u0646\u064A\u0629",
        "\u062A\u0633\u0639\u0629",
      ],
      r = [
        "\u0639\u0634\u0631\u0629",
        "\u0623\u062D\u062F \u0639\u0634\u0631",
        "\u0627\u062B\u0646\u0627 \u0639\u0634\u0631",
        "\u062B\u0644\u0627\u062B\u0629 \u0639\u0634\u0631",
        "\u0623\u0631\u0628\u0639\u0629 \u0639\u0634\u0631",
        "\u062E\u0645\u0633\u0629 \u0639\u0634\u0631",
        "\u0633\u062A\u0629 \u0639\u0634\u0631",
        "\u0633\u0628\u0639\u0629 \u0639\u0634\u0631",
        "\u062B\u0645\u0627\u0646\u064A\u0629 \u0639\u0634\u0631",
        "\u062A\u0633\u0639\u0629 \u0639\u0634\u0631",
      ],
      i = [
        "",
        "",
        "\u0639\u0634\u0631\u0648\u0646",
        "\u062B\u0644\u0627\u062B\u0648\u0646",
        "\u0623\u0631\u0628\u0639\u0648\u0646",
        "\u062E\u0645\u0633\u0648\u0646",
        "\u0633\u062A\u0648\u0646",
        "\u0633\u0628\u0639\u0648\u0646",
        "\u062B\u0645\u0627\u0646\u0648\u0646",
        "\u062A\u0633\u0639\u0648\u0646",
      ],
      d = [
        "",
        "\u0645\u0627\u0626\u0629",
        "\u0645\u0626\u062A\u0627\u0646",
        "\u062B\u0644\u0627\u062B\u0645\u0627\u0626\u0629",
        "\u0623\u0631\u0628\u0639\u0645\u0627\u0626\u0629",
        "\u062E\u0645\u0633\u0645\u0627\u0626\u0629",
        "\u0633\u062A\u0645\u0627\u0626\u0629",
        "\u0633\u0628\u0639\u0645\u0627\u0626\u0629",
        "\u062B\u0645\u0627\u0646\u0645\u0627\u0626\u0629",
        "\u062A\u0633\u0639\u0645\u0627\u0626\u0629",
      ],
      b = (c) => {
        const p = [],
          m = Math.floor(c / 100),
          u = c % 100;
        if ((m > 0 && p.push(d[m]), u > 0))
          if (u < 10) p.push(t[u]);
          else if (u < 20) p.push(r[u - 10]);
          else {
            const w = Math.floor(u / 10),
              x = u % 10;
            p.push(x > 0 ? t[x] + " \u0648" + i[w] : i[w]);
          }
        return p.join(" \u0648");
      },
      v = [
        {
          value: 1e9,
          singular: "\u0645\u0644\u064A\u0627\u0631",
          dual: "\u0645\u0644\u064A\u0627\u0631\u0627\u0646",
          plural: "\u0645\u0644\u064A\u0627\u0631\u0627\u062A",
        },
        {
          value: 1e6,
          singular: "\u0645\u0644\u064A\u0648\u0646",
          dual: "\u0645\u0644\u064A\u0648\u0646\u0627\u0646",
          plural: "\u0645\u0644\u0627\u064A\u064A\u0646",
        },
        {
          value: 1e3,
          singular: "\u0623\u0644\u0641",
          dual: "\u0623\u0644\u0641\u0627\u0646",
          plural: "\u0622\u0644\u0627\u0641",
        },
      ];
    let o = a;
    const l = [];
    for (const c of v) {
      const p = Math.floor(o / c.value);
      ((o = o % c.value),
        p > 0 &&
          (p === 1
            ? l.push(c.singular)
            : p === 2
              ? l.push(c.dual)
              : p <= 10
                ? l.push(b(p) + " " + c.plural)
                : l.push(b(p) + " " + c.singular)));
    }
    return (o > 0 && l.push(b(o)), l.join(" \u0648"));
  }
  function St(e) {
    const a = Math.round(Math.abs(Number(e) || 0) * 1e3),
      t = Math.floor(a / 1e3),
      r = a % 1e3,
      i = [];
    return (
      (t || !r) && i.push(Fe(t) + " \u062F\u064A\u0646\u0627\u0631"),
      r && i.push(Fe(r) + " \u062F\u0631\u0647\u0645"),
      (Number(e) < 0 ? "\u0633\u0627\u0644\u0628 " : "") + i.join(" \u0648")
    );
  }
  const $e = (e, a = []) => {
      const t = (e.payments || []).map((d) => ({
          ...d,
          paymentId: d.paymentId || d.id,
          projectId: e.id,
        })),
        r = a
          .filter((d) => d.projectId === e.id)
          .map((d) => ({ ...d, paymentId: d.paymentId || d.id })),
        i = new Map();
      return (
        [...t, ...r].forEach((d) => {
          const b = d.paymentId || d.id;
          b && i.set(b, d);
        }),
        Array.from(i.values())
      );
    },
    Ye = (e) =>
      (e.measurements || []).reduce(
        (a, t) => a + Number(t.totalAmount || 0),
        0,
      ),
    Ce = (e, a = []) => {
      const t = Ye(e),
        r = $e(e, a).reduce((l, c) => l + Number(c.amount || 0), 0),
        i = Math.min(t, Math.max(0, Number(e.waivedAmount || 0))),
        d = e.status === "\u0645\u0643\u062A\u0645\u0644",
        b = (e.measurements || []).length > 0,
        v = Math.round((t - i - r) * 1e3) / 1e3,
        o = Math.max(0, -v);
      return {
        cost: t,
        paid: r,
        waived: i,
        completed: d,
        hasMeasure: b,
        remaining: Math.max(0, v),
        surplus: d ? o : 0,
        advance: d ? 0 : o,
        settled: d && b && v <= 0,
      };
    },
    jt = (e = []) => {
      const a = new Map();
      return (
        e.forEach((t) => {
          const r = (t.projectId && t.paymentId) || t.id;
          r && a.set(r, t);
        }),
        Array.from(a.values())
      );
    },
    gt = (e = [], a = []) => {
      const t = new Map();
      return (
        jt(a.filter((r) => !r.projectId)).forEach((r) => t.set(r.id, r)),
        e.forEach((r) => {
          $e(r, a).forEach((i) => {
            const d = i.paymentId || i.id;
            d &&
              t.set(d, {
                ...i,
                customerName: i.customerName || r.customerName,
                projectId: r.id,
              });
          });
        }),
        Array.from(t.values())
      );
    },
    Ie = (e = [], a = []) => gt(e, a).filter((t) => t.includeInIncome !== !1),
    He = (e = [], a = [], t) => {
      const r = (e || [])
          .filter((d) => re(d.date) === t && !d.debtTransactionId)
          .reduce((d, b) => d + Number(b.amount || 0), 0),
        i = (a || [])
          .flatMap((d) => d.transactions || [])
          .filter((d) => d.supplierPayment && re(d.date) === t)
          .reduce((d, b) => d + Math.max(0, Number(b.amount || 0)), 0);
      return r + i;
    },
    $t = (e, a) => {
      const t = e.transactions || [],
        r = t.some((i) => i.id === a.id);
      return {
        ...e,
        transactions: r
          ? t.map((i) => (i.id === a.id ? { ...i, ...a } : i))
          : [a, ...t],
      };
    },
    zt = (e, a = []) =>
      a
        .filter((t) => t.supplierId === e && t.debtTransactionId && H(t.amount))
        .sort(
          (t, r) =>
            (t.date || "").localeCompare(r.date || "") ||
            String(t.id).localeCompare(String(r.id)),
        ),
    Se = (e, a = []) => {
      const t = zt(e.id, a),
        r = e.transactions || [],
        i = new Map();
      r.filter(
        (x) => x.supplierPayment && Array.isArray(x.allocations),
      ).forEach((x) => {
        x.allocations.forEach((h) => {
          const $ = Math.max(0, Number(h.amount || 0));
          !$ ||
            !t.some((B) => B.id === h.invoiceId) ||
            i.set(h.invoiceId, (i.get(h.invoiceId) || 0) + $);
        });
      });
      const d = t.map((x) => ({
          invoice: x,
          paid: Math.min(Number(x.amount || 0), i.get(x.id) || 0),
          remaining: Math.max(
            0,
            Number(x.amount || 0) -
              Math.min(Number(x.amount || 0), i.get(x.id) || 0),
          ),
        })),
        b = r
          .filter((x) => x.supplierPayment)
          .reduce((x, h) => x + Math.max(0, Number(h.amount || 0)), 0),
        v = d.reduce((x, h) => x + h.paid, 0);
      let o =
        r
          .filter((x) => x.type === "credit" && !x.supplierPayment)
          .reduce((x, h) => x + Math.max(0, Number(h.amount || 0)), 0) +
        Math.max(0, b - v);
      d.forEach((x) => {
        const h = Math.min(x.remaining, o);
        ((x.paid += h), (x.remaining -= h), (o -= h));
      });
      const l = d.reduce((x, h) => x + Number(h.remaining || 0), 0),
        c = d.reduce((x, h) => x + Number(h.paid || 0), 0),
        p = new Set(t.map((x) => x.debtTransactionId)),
        m = r
          .filter(
            (x) => !p.has(x.id) && !x.supplierPayment && x.type === "debit",
          )
          .reduce((x, h) => x + Math.max(0, Number(h.amount || 0)), 0),
        u = o,
        w = l + m - u;
      return {
        rows: d,
        invoiceDebt: l,
        invoicePaid: c,
        manualBalance: m,
        paymentExcess: u,
        owed: Math.max(0, w),
        credit: Math.max(0, -w),
        totalInvoices: t.reduce((x, h) => x + Number(h.amount || 0), 0),
      };
    },
    At = (e, a, t) => {
      const r = Se(e, a);
      let i = Number(t || 0);
      return r.rows
        .filter((d) => d.remaining > 0)
        .map((d) => {
          const b = Math.min(d.remaining, i);
          return (
            (i -= b),
            b > 0 ? { invoiceId: d.invoice.id, amount: b } : null
          );
        })
        .filter(Boolean);
    },
    bt = [
      "\u062A\u0643\u0633",
      "\u0633\u064A\u0644\u064A\u0643\u0627\u062A",
      "\u0643\u0644\u0627\u0647\u0645\u0627",
    ],
    ft = [
      "\u062C\u062F\u064A\u062F",
      "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
      "\u0645\u0643\u062A\u0645\u0644",
    ],
    Ze = {
      جديد: { bg: "var(--new-bg)", fg: "var(--new-fg)" },
      "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630": {
        bg: "var(--progress-bg)",
        fg: "var(--progress-fg)",
      },
      مكتمل: { bg: "var(--complete-bg)", fg: "var(--complete-fg)" },
      __fallback: { bg: "var(--divider)", fg: "var(--text-muted)" },
    },
    je = (e) => Ze[e] || Ze.__fallback,
    xt = [
      "\u062A\u0643\u0633",
      "\u0633\u064A\u0644\u064A\u0643\u0627\u062A",
      "\u0627\u0633\u0645\u0646\u062A",
      "\u0643\u0648\u0644\u0629",
      "\u0644\u0635\u0642\u0629",
      "\u062C\u0648\u062A\u0646",
      "\u0646\u0627\u064A\u0644\u0648\u0646",
      "\u0634\u0631\u0648\u0637\u064A",
    ],
    Qe = [
      "\u0646\u0641\u0637",
      "\u062D\u0648\u0627\u0644\u0627\u062A",
      "\u0631\u0648\u0627\u062A\u0628",
      "\u0625\u064A\u062C\u0627\u0631",
      "\u0623\u062C\u0631\u0629 \u0633\u064A\u0627\u0631\u0629",
      "\u0623\u062E\u0631\u0649",
    ],
    De = [
      "\u0645\u0648\u0627\u062F \u062E\u0627\u0645",
      "\u0645\u0648\u0627\u062F \u0628\u0646\u0627\u0621",
      "\u0643\u0647\u0631\u0628\u0627\u0621",
      "\u0623\u062E\u0631\u0649",
    ],
    Pt = [
      "\u062D\u0627\u0636\u0631",
      "\u0646\u0635\u0641 \u064A\u0648\u0645",
      "\u063A\u0627\u0626\u0628",
    ],
    Ue = {
      حاضر: { bg: "#EEF3EC", fg: "var(--success)" },
      "\u0646\u0635\u0641 \u064A\u0648\u0645": {
        bg: "var(--new-bg)",
        fg: "var(--warning)",
      },
      غائب: { bg: "#FBF2ED", fg: "var(--danger)" },
    },
    ie = [
      "projects",
      "invoices",
      "expenses",
      "income",
      "inventory",
      "customers",
      "suppliers",
      "workers",
      "attendance",
      "personalLog",
    ],
    Je = "factory_app_",
    Te = Je + "__all__";
  function se({ children: e, bg: a, fg: t }) {
    return React.createElement(
      "span",
      {
        style: { background: a, color: t },
        className:
          "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
      },
      e,
    );
  }
  function te({ icon: e, label: a, value: t, sub: r, accent: i }) {
    return React.createElement(
      "div",
      {
        className: "rounded-2xl border p-4 flex flex-col gap-3 min-w-0",
        style: {
          background: "var(--card-bg)",
          borderColor: "var(--card-border)",
        },
      },
      React.createElement(
        "div",
        { className: "flex items-center justify-between" },
        React.createElement(
          "span",
          { className: "text-sm", style: { color: "var(--text-muted)" } },
          a,
        ),
        React.createElement(
          "div",
          {
            className:
              "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
            style: { background: i + "1f" },
          },
          React.createElement(D, { name: e, size: 18, color: i }),
        ),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            className: "text-2xl font-bold truncate",
            style: {
              fontFamily: "'El Messiri', sans-serif",
              color: "var(--text-strong)",
            },
          },
          t,
        ),
        r &&
          React.createElement(
            "div",
            {
              className: "text-xs mt-1",
              style: { color: "var(--text-muted)" },
            },
            r,
          ),
      ),
    );
  }
  function ae({ icon: e, title: a, sub: t }) {
    return React.createElement(
      "div",
      {
        className:
          "flex flex-col items-center justify-center text-center py-14",
        style: { color: "var(--text-muted)" },
      },
      React.createElement(D, {
        name: e,
        size: 34,
        style: { marginBottom: 12, opacity: 0.5 },
      }),
      React.createElement(
        "div",
        { className: "font-medium", style: { color: "var(--text-body)" } },
        a,
      ),
      t && React.createElement("div", { className: "text-sm mt-1" }, t),
    );
  }
  function G(e, a = "error") {
    window.dispatchEvent(
      new CustomEvent("factory:toast", { detail: { message: e, type: a } }),
    );
  }
  function Ae() {
    const [e, a] = y([]);
    return (
      be(() => {
        const t = (r) => {
          const i = ne();
          (a((d) => {
            var b, v;
            return [
              ...d,
              {
                id: i,
                message:
                  ((b = r.detail) == null ? void 0 : b.message) ||
                  "\u062D\u062F\u062B \u0623\u0645\u0631 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639",
                type: ((v = r.detail) == null ? void 0 : v.type) || "error",
              },
            ];
          }),
            window.setTimeout(
              () => a((d) => d.filter((b) => b.id !== i)),
              4200,
            ));
        };
        return (
          window.addEventListener("factory:toast", t),
          () => window.removeEventListener("factory:toast", t)
        );
      }, []),
      React.createElement(
        "div",
        {
          className:
            "fixed top-4 left-4 right-4 z-[100] flex flex-col items-center gap-2 pointer-events-none",
          dir: "rtl",
        },
        e.map((t) =>
          React.createElement(
            "div",
            {
              key: t.id,
              role: "status",
              className:
                "pointer-events-auto w-full max-w-md rounded-xl border px-4 py-3 text-sm shadow-lg",
              style: {
                background:
                  t.type === "success" ? "var(--good-bg)" : "var(--warn-bg)",
                borderColor:
                  t.type === "success"
                    ? "var(--good-border)"
                    : "var(--warn-border)",
                color:
                  t.type === "success" ? "var(--success)" : "var(--danger)",
              },
            },
            t.message,
          ),
        ),
      )
    );
  }
  function R({ children: e }) {
    return React.createElement(
      "label",
      {
        className: "text-xs mb-1 block",
        style: { color: "var(--text-muted)" },
      },
      e,
    );
  }
  function E(e) {
    const { className: a, type: t, min: r, ...i } = e;
    return React.createElement("input", {
      ...i,
      type: t,
      min: t === "number" ? (r != null ? r : 0) : r,
      className:
        "w-full rounded-lg border px-3 py-2 text-sm outline-none transition " +
        (a || ""),
      style: {
        background: "var(--input-bg)",
        borderColor: "var(--card-border)",
        color: "var(--text-strong)",
      },
    });
  }
  function me(e) {
    const { className: a, children: t, ...r } = e;
    return React.createElement(
      "select",
      {
        ...r,
        className:
          "w-full rounded-lg border px-3 py-2 text-sm outline-none transition " +
          (a || ""),
        style: {
          background: "var(--input-bg)",
          borderColor: "var(--card-border)",
          color: "var(--text-strong)",
        },
      },
      t,
    );
  }
  function K({
    children: e,
    onClick: a,
    type: t = "button",
    full: r,
    disabled: i,
  }) {
    return React.createElement(
      "button",
      {
        type: t,
        onClick: a,
        disabled: i,
        className:
          "inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition active:scale-[0.98] disabled:opacity-40 " +
          (r ? "w-full" : ""),
        style: { background: "var(--accent)" },
      },
      e,
    );
  }
  function he({ children: e, onClick: a, danger: t }) {
    return React.createElement(
      "button",
      {
        type: "button",
        onClick: a,
        className:
          "inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium border transition active:scale-[0.98]",
        style: t
          ? {
              color: "var(--danger)",
              borderColor: "var(--warn-border)",
              background: "var(--warn-bg)",
            }
          : {
              color: "var(--text-body)",
              borderColor: "var(--card-border)",
              background: "var(--card-bg)",
            },
      },
      e,
    );
  }
  function ce({ title: e, onClose: a, children: t, wide: r }) {
    return React.createElement(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3",
        style: { background: "#00000066" },
      },
      React.createElement(
        "div",
        {
          className:
            "rounded-2xl w-full max-h-[90vh] flex flex-col shadow-2xl " +
            (r ? "max-w-3xl" : "max-w-md"),
          style: { background: "var(--bg)" },
          dir: "rtl",
        },
        React.createElement(
          "div",
          {
            className:
              "flex items-center justify-between px-5 py-4 border-b shrink-0",
            style: { borderColor: "var(--card-border)" },
          },
          React.createElement(
            "h3",
            {
              className: "font-bold text-base",
              style: {
                fontFamily: "'El Messiri', sans-serif",
                color: "var(--text-strong)",
              },
            },
            e,
          ),
          React.createElement(
            "button",
            { onClick: a, style: { color: "var(--text-muted)" } },
            React.createElement(D, { name: "x", size: 20 }),
          ),
        ),
        React.createElement(
          "div",
          { className: "overflow-y-auto px-5 py-4" },
          t,
        ),
      ),
    );
  }
  function ge({ onConfirm: e, onCancel: a, label: t }) {
    return React.createElement(
      "div",
      { className: "flex items-center gap-1.5" },
      React.createElement(
        "span",
        { className: "text-xs", style: { color: "var(--text-muted)" } },
        t || "\u062D\u0630\u0641\u061F",
      ),
      React.createElement(
        "button",
        {
          onClick: e,
          className: "text-xs px-2 py-1 rounded text-white",
          style: { background: "var(--danger)" },
        },
        "\u062A\u0623\u0643\u064A\u062F",
      ),
      React.createElement(
        "button",
        {
          onClick: a,
          className: "text-xs px-2 py-1 rounded border",
          style: {
            borderColor: "var(--card-border)",
            color: "var(--text-body)",
          },
        },
        "\u0625\u0644\u063A\u0627\u0621",
      ),
    );
  }
  function et({ rows: e }) {
    const a = Math.max(1, ...e.map((t) => t.total));
    return React.createElement(
      "div",
      { className: "flex flex-col gap-2.5" },
      e.map((t) =>
        React.createElement(
          "div",
          { key: t.label },
          React.createElement(
            "div",
            {
              className: "flex items-center justify-between text-xs mb-1",
              style: { color: "var(--text-body)" },
            },
            React.createElement("span", null, t.label),
            React.createElement(
              "span",
              { className: "font-medium" },
              N(t.total),
            ),
          ),
          React.createElement(
            "div",
            {
              className: "h-2 rounded-full overflow-hidden",
              style: { background: "var(--divider)" },
            },
            React.createElement("div", {
              className: "h-full rounded-full",
              style: {
                width: (t.total / a) * 100 + "%",
                background: "var(--accent)",
              },
            }),
          ),
        ),
      ),
    );
  }
  async function Lt(e, a) {
    const r = [];
    for (let i = 0; ; i += 500) {
      const { data: d, error: b } = await e
        .from("app_records")
        .select("collection,id,payload")
        .eq("organization_id", a)
        .order("collection", { ascending: !0 })
        .order("id", { ascending: !0 })
        .range(i, i + 500 - 1);
      if (b) throw b;
      if ((r.push(...(d || [])), !d || d.length < 500)) return r;
    }
  }
  function It(e) {
    const [a, t] = y(null),
      [r, i] = y(0),
      [d, b] = y(!1),
      [v, o] = y(!1),
      [l, c] = y(!1),
      [p, m] = y(""),
      u = Object.fromEntries(ie.map((n) => [n, []])),
      [w, x] = y(u),
      h = ye(u),
      $ = ye(Promise.resolve()),
      B = (n) => {
        const k = $.current.then(n, n);
        return (($.current = k.catch(() => {})), k);
      },
      S = (n) => {
        const k = typeof n == "function" ? n(h.current) : n;
        return ((h.current = k), x(k), k);
      };
    be(() => {
      let n = !1,
        k = !1,
        j = !1;
      const I = () => {
          o(!0);
          const g = [];
          let A = null,
            W = !1;
          try {
            const P = localStorage.getItem(Te);
            if (P) {
              const L = JSON.parse(P);
              if (
                !L ||
                typeof L != "object" ||
                ie.some((Q) => !Array.isArray(L[Q]))
              )
                throw new Error("Invalid combined local data");
              ((A = Object.fromEntries(ie.map((Q) => [Q, L[Q]]))), (W = !0));
            }
          } catch (P) {
            g.push(
              "\u0627\u0644\u062D\u0632\u0645\u0629 \u0627\u0644\u0645\u0648\u062D\u062F\u0629",
            );
          }
          if (!A) {
            ((A = {}),
              ie.forEach((P) => {
                try {
                  const L = JSON.parse(localStorage.getItem(Je + P) || "[]");
                  if (!Array.isArray(L))
                    throw new Error("Expected a collection array");
                  A[P] = L;
                } catch (L) {
                  (g.push(P), (A[P] = []));
                }
              }));
            try {
              (localStorage.setItem(Te, JSON.stringify(A)), (W = !0));
            } catch (P) {
              console.error("Local data migration failed:", P);
            }
          }
          (W &&
            ie.forEach((P) => {
              try {
                localStorage.removeItem(Je + P);
              } catch (L) {}
            }),
            S(A),
            m(
              g.length
                ? "\u062A\u0639\u0630\u0631\u062A \u0642\u0631\u0627\u0621\u0629 \u0628\u0639\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u0645\u062D\u0644\u064A: " +
                    g.join(", ")
                : "",
            ),
            c(g.length === 0),
            b(!0));
        },
        M = async () => {
          if (k) {
            j = !0;
            return;
          }
          ((k = !0), c(!1));
          do {
            j = !1;
            try {
              const g = await Lt(de, e);
              if (n) break;
              const A = Object.fromEntries(ie.map((W) => [W, []]));
              ((g || []).forEach((W) => {
                var P;
                A[W.collection] &&
                  !((P = W.payload) != null && P.__deleted) &&
                  A[W.collection].push({ id: W.id, ...(W.payload || {}) });
              }),
                S(A),
                m(""),
                c(!0),
                b(!0));
            } catch (g) {
              n || (m(g.message || String(g)), b(!0));
              break;
            }
          } while (j && !n);
          k = !1;
        };
      if (!de || !e)
        return (
          I(),
          () => {
            n = !0;
          }
        );
      const s = de
        .channel("factory-records-" + e)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "app_records",
            filter: "organization_id=eq." + e,
          },
          M,
        )
        .subscribe();
      return (
        M(),
        () => {
          ((n = !0), de.removeChannel(s));
        }
      );
    }, [e, r]);
    const T = (n, k) =>
        k.reduce((j, { collection: I, record: M }) => {
          const s = j[I] || [];
          if (M.__deleted) return { ...j, [I]: s.filter((A) => A.id !== M.id) };
          const g = s.findIndex((A) => A.id === M.id);
          return {
            ...j,
            [I]: g === -1 ? [M, ...s] : s.map((A) => (A.id === M.id ? M : A)),
          };
        }, n),
      f = async (n, k = {}) => {
        const j = new Map();
        n.filter(
          (M) => M && ie.includes(M.collection) && M.record && M.record.id,
        ).forEach((M) => j.set(`${M.collection}\0${M.record.id}`, M));
        const I = Array.from(j.values());
        return I.length
          ? B(async () => {
              if (de && e) {
                const M = I.map(({ collection: g, record: A }) => ({
                  organization_id: e,
                  collection: g,
                  id: A.id,
                  payload: A,
                }));
                let s;
                try {
                  ({ error: s } = await de.from("app_records").upsert(M, {
                    onConflict: "organization_id,collection,id",
                  }));
                } catch (g) {
                  if ((m(g.message || String(g)), k.throwOnError)) throw g;
                  return !1;
                }
                if (s) {
                  if ((m(s.message), k.throwOnError)) throw s;
                  return !1;
                }
              } else {
                const M = T(h.current, I);
                try {
                  localStorage.setItem(Te, JSON.stringify(M));
                } catch (s) {
                  if (
                    (m(
                      "\u062A\u0639\u0630\u0631 \u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062D\u0644\u064A\u064B\u0627: " +
                        (s.message || String(s)),
                    ),
                    k.throwOnError)
                  )
                    throw s;
                  return !1;
                }
              }
              return (S((M) => T(M, I)), m(""), !0);
            })
          : !0;
      },
      O = (n, k, j = {}) => f([{ collection: n, record: k }], j),
      C = ({ upserts: n = [], deletes: k = [] }, j = {}) =>
        f(
          [
            ...n,
            ...k.map(({ collection: I, id: M }) => ({
              collection: I,
              record: { id: M, __deleted: !0 },
            })),
          ],
          j,
        ),
      q = async (n) => {
        const k = n.filter((j) => j && ie.includes(j.collection) && j.id);
        return k.length
          ? B(async () => {
              if (de && e) {
                const j = (s) =>
                    `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`,
                  I = k
                    .map(
                      ({ collection: s, id: g }) =>
                        `and(collection.eq.${j(s)},id.eq.${j(g)})`,
                    )
                    .join(",");
                let M;
                try {
                  ({ error: M } = await de
                    .from("app_records")
                    .delete()
                    .eq("organization_id", e)
                    .or(I));
                } catch (s) {
                  return (m(s.message || String(s)), !1);
                }
                if (M) return (m(M.message), !1);
              } else {
                const j = { ...h.current };
                k.forEach(({ collection: I, id: M }) => {
                  j[I] = (j[I] || []).filter((s) => s.id !== M);
                });
                try {
                  localStorage.setItem(Te, JSON.stringify(j));
                } catch (I) {
                  return (
                    m(
                      "\u062A\u0639\u0630\u0631 \u062D\u0641\u0638 \u0627\u0644\u062D\u0630\u0641 \u0645\u062D\u0644\u064A\u064B\u0627: " +
                        (I.message || String(I)),
                    ),
                    !1
                  );
                }
              }
              return (
                S((j) => {
                  const I = { ...j };
                  return (
                    k.forEach(({ collection: M, id: s }) => {
                      I[M] = (I[M] || []).filter((g) => g.id !== s);
                    }),
                    I
                  );
                }),
                m(""),
                !0
              );
            })
          : !0;
      },
      F = (n, k) => q([{ collection: n, id: k }]),
      U = () => i((n) => n + 1);
    return {
      ready: d,
      dataLoaded: l,
      usingLocal: v,
      data: w,
      upsert: O,
      upsertMany: f,
      transact: C,
      remove: F,
      removeMany: q,
      downloadsNs: a,
      error: p,
      reload: U,
      importBackup: async (n) => {
        const k = Tt(n);
        if (k) throw new Error(k);
        Ve(
          w,
          "\u0646\u0633\u062E\u0629-\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629-\u0643\u0627\u0645\u0644\u0629-\u0627\u0644\u0645\u0635\u0646\u0639-" +
            Z() +
            "-\u0642\u0628\u0644-\u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F.json",
        );
        const j = await _t(n, w, f);
        return (U(), j);
      },
    };
  }
  async function tt(e, a) {
    let t;
    try {
      if (
        (window.XLSX ||
          (window.__factoryXlsxPromise ||
            (window.__factoryXlsxPromise = new Promise((o, l) => {
              const c = document.createElement("script");
              ((c.src =
                "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"),
                (c.onload = () => o(window.XLSX)),
                (c.onerror = () => l(new Error("XLSX CDN unavailable"))),
                document.head.appendChild(c));
            })),
          await window.__factoryXlsxPromise),
        (t = window.XLSX),
        !t)
      )
        throw new Error("XLSX unavailable");
    } catch (o) {
      G(
        "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631\u060C \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u062B\u0645 \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627.",
      );
      return;
    }
    const r = t.utils.book_new(),
      i = {
        المشاريع: a.projects.map((o) => ({
          الزبون: o.customerName,
          الهاتف: o.phone,
          الموقع: o.location,
          النوع: o.productType,
          الحالة: o.status,
          "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621":
            o.dateCreated,
          "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0643\u0645\u0627\u0644":
            o.completedAt || "",
          الإجمالي: Ye(o),
          ملاحظات: o.notes,
        })),
        "\u0628\u0636\u0627\u0639\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639":
          a.projects.flatMap((o) =>
            (o.items || []).map((l) => ({
              الزبون: o.customerName,
              الاتجاه: l.direction,
              المادة: l.name,
              الكمية: l.quantity,
              الوحدة: l.unit,
              التاريخ: l.date,
            })),
          ),
        "\u0645\u0643\u0627\u064A\u064A\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639":
          a.projects.flatMap((o) =>
            (o.measurements || []).flatMap((l) =>
              (l.entries || []).map((c) => ({
                الزبون: o.customerName,
                العامل: l.workerName,
                التاريخ: l.date,
                البند: c.label,
                الكمية: c.quantity,
                السعر: c.unitPrice,
                المجموع: c.total,
              })),
            ),
          ),
        الفواتير: a.invoices.map((o) => {
          var l;
          return {
            "\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629":
              o.invoiceNumber || "",
            النوع: o.type,
            المورد: o.supplierName || "",
            "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645":
              (l = o.grossAmount) != null
                ? l
                : Number(o.amount || 0) + Number(o.discountAmount || 0),
            الخصم: o.discountAmount || 0,
            "\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642":
              o.amount,
            التاريخ: o.date,
            الوصف: o.description,
          };
        }),
        المصاريف: a.expenses.map((o) => ({
          النوع: o.type,
          المبلغ: o.amount,
          التاريخ: o.date,
          الوصف: o.description,
        })),
        الواردات: Ie(a.projects, a.income).map((o) => {
          var l;
          return {
            الزبون: o.customerName,
            المشروع:
              ((l = a.projects.find((c) => c.id === o.projectId)) == null
                ? void 0
                : l.customerName) || "",
            "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":
              o.projectId || "",
            المبلغ: o.amount,
            التاريخ: o.date,
            الوصف: o.description,
          };
        }),
        "\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639":
          Array.from(
            new Map(
              a.projects.flatMap((o) =>
                $e(o, a.income).map((l) => [
                  l.paymentId || l.id,
                  {
                    الزبون: o.customerName,
                    "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":
                      o.id,
                    "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u0641\u0639\u0629":
                      l.date,
                    المبلغ: l.amount,
                    "\u0648\u0635\u0641 \u0627\u0644\u062F\u0641\u0639\u0629":
                      l.description || "",
                  },
                ]),
              ),
            ).values(),
          ),
        المخزون: a.inventory.map((o) => ({
          المادة: o.name,
          الكمية: o.quantity,
          الوحدة: o.unit,
          "\u062D\u062F \u0627\u0644\u062A\u0646\u0628\u064A\u0647":
            o.minThreshold,
        })),
        العملاء: a.customers.map((o) => ({
          الاسم: o.name,
          الهاتف: o.phone,
          الرصيد: we(o),
          ملاحظات: o.notes,
        })),
        العمال: a.workers.map((o) => ({
          الاسم: o.name,
          الهاتف: o.phone,
          الرصيد: we(o),
          ملاحظات: o.notes,
        })),
        الموردون: a.suppliers.map((o) => ({
          الاسم: o.name,
          الهاتف: o.phone,
          الرصيد: we(o),
          ملاحظات: o.notes,
        })),
        الحضور: a.attendance.map((o) => ({
          العامل: o.workerName,
          التاريخ: o.date,
          الحالة: o.status,
        })),
        "\u0633\u062C\u0644\u064A \u0627\u0644\u0634\u062E\u0635\u064A":
          a.personalLog.map((o) => ({
            النوع: o.type,
            المبلغ: o.amount,
            التاريخ: o.date,
            الوصف: o.description,
          })),
      };
    Object.entries(i).forEach(([o, l]) => {
      const c = t.utils.json_to_sheet(
        l.length
          ? l
          : [
              {
                "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A":
                  "",
              },
            ],
      );
      t.utils.book_append_sheet(r, c, o.slice(0, 31));
    });
    const d = t.write(r, { type: "array", bookType: "xlsx" }),
      b = new Blob([d], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      v =
        "\u062A\u0642\u0631\u064A\u0631-\u0627\u0644\u0645\u0635\u0646\u0639-\u0645\u0644\u062E\u0635-" +
        Z() +
        ".xlsx";
    if (e)
      try {
        await e.save({ filename: v, data: b });
      } catch (o) {
        console.error("export failed", o);
      }
    else Ke(b, v);
  }
  function Ke(e, a) {
    const t = URL.createObjectURL(e),
      r = document.createElement("a");
    ((r.href = t),
      (r.download = a),
      r.click(),
      setTimeout(() => URL.revokeObjectURL(t), 1e3));
  }
  const Mt = (e) => ({
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    collections: Object.fromEntries(
      ie.map((a) => {
        if (!e || !Array.isArray(e[a]))
          throw new Error(
            `\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062C\u0645\u0648\u0639\u0629 ${a} \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629\u061B \u0644\u0645 \u064A\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0633\u062E\u0629.`,
          );
        return [a, e[a]];
      }),
    ),
  });
  function Ve(
    e,
    a = "\u0646\u0633\u062E\u0629-\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629-\u0643\u0627\u0645\u0644\u0629-\u0627\u0644\u0645\u0635\u0646\u0639-" +
      Z() +
      ".json",
  ) {
    const t = JSON.stringify(Mt(e), null, 2);
    Ke(new Blob([t], { type: "application/json;charset=utf-8" }), a);
  }
  function Tt(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      return "\u0645\u0644\u0641 \u0627\u0644\u0646\u0633\u062E\u0629 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0643\u0627\u0626\u0646 JSON.";
    if (e.schemaVersion !== 1)
      return "\u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0646\u0633\u062E\u0629 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645.";
    if (
      !e.collections ||
      typeof e.collections != "object" ||
      Array.isArray(e.collections)
    )
      return "\u0642\u0633\u0645 collections \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F \u0623\u0648 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D.";
    const a = Object.keys(e.collections).filter((t) => !ie.includes(t));
    if (a.length)
      return `\u0627\u0644\u0646\u0633\u062E\u0629 \u062A\u062D\u062A\u0648\u064A \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0644\u0627 \u064A\u062F\u0639\u0645\u0647\u0627 \u0647\u0630\u0627 \u0627\u0644\u0625\u0635\u062F\u0627\u0631: ${a.join(", ")}.`;
    for (const t of ie) {
      const r = e.collections[t];
      if (!Array.isArray(r))
        return `\u0645\u062C\u0645\u0648\u0639\u0629 ${t} \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629 \u0623\u0648 \u0644\u064A\u0633\u062A \u0645\u0635\u0641\u0648\u0641\u0629.`;
      const i = new Set();
      for (const d of r) {
        if (!d || typeof d != "object" || Array.isArray(d))
          return `\u064A\u0648\u062C\u062F \u0633\u062C\u0644 \u062A\u0627\u0644\u0641 \u0641\u064A \u0645\u062C\u0645\u0648\u0639\u0629 ${t}.`;
        if (typeof d.id != "string" || !d.id.trim())
          return `\u064A\u0648\u062C\u062F \u0633\u062C\u0644 \u0628\u0644\u0627 \u0645\u0639\u0631\u0641 \u0641\u064A \u0645\u062C\u0645\u0648\u0639\u0629 ${t}.`;
        if (i.has(d.id))
          return `\u0627\u0644\u0645\u0639\u0631\u0641 ${d.id} \u0645\u0643\u0631\u0631 \u062F\u0627\u062E\u0644 \u0645\u062C\u0645\u0648\u0639\u0629 ${t}.`;
        if (
          (i.add(d.id),
          ["invoices", "expenses", "income", "personalLog"].includes(t) &&
            !H(d.amount))
        )
          return `\u0627\u0644\u0645\u0628\u0644\u063A \u0641\u064A \u0645\u062C\u0645\u0648\u0639\u0629 ${t} \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0648\u062C\u0628\u064B\u0627.`;
        if (t === "projects") {
          for (const b of d.payments || [])
            if (!b || !H(b.amount))
              return `\u062F\u0641\u0639\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629 \u0641\u064A \u0627\u0644\u0645\u0634\u0631\u0648\u0639 ${d.id}.`;
        }
        for (const b of d.transactions || [])
          if (!b || !H(b.amount))
            return `\u0645\u0639\u0627\u0645\u0644\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629 \u0641\u064A \u0627\u0644\u0633\u062C\u0644 ${d.id}.`;
      }
    }
    return "";
  }
  async function _t(e, a, t) {
    let r = 0,
      i = 0;
    const d = [];
    for (const b of ie) {
      const v = new Set((a[b] || []).map((o) => o.id));
      for (const o of e.collections[b])
        (v.has(o.id) ? (i += 1) : (r += 1),
          d.push({ collection: b, record: o }));
    }
    return (await t(d, { throwOnError: !0 }), { added: r, updated: i });
  }
  function Ft() {
    const [e, a] = y(null),
      [t, r] = y(null),
      [i, d] = y(_e),
      [b, v] = y(""),
      o = async (m) => {
        var $, B;
        if (!m) {
          (a(null), r(null), d(!1));
          return;
        }
        a(m);
        const u =
            (($ = m.user.user_metadata) == null
              ? void 0
              : $.organization_name) ||
            "\u0634\u0631\u0643\u0629 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0643\u0628\u0631\u0649 \u0644\u0644\u0637\u0644\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A",
          w =
            ((B = m.user.user_metadata) == null
              ? void 0
              : B.organization_code) || "",
          { data: x, error: h } = await de.rpc(
            "get_or_create_my_organization",
            { p_name: u, p_code: w },
          );
        (h ? v(h.message) : r(Array.isArray(x) ? x[0] : x), d(!1));
      };
    return (
      be(() => {
        if (!_e) return;
        de.auth.getSession().then(({ data: u }) => o(u.session));
        const { data: m } = de.auth.onAuthStateChange((u, w) => o(w));
        return () => m.subscription.unsubscribe();
      }, []),
      {
        session: e,
        organization: t,
        loading: i,
        error: b,
        signIn: (m, u) => de.auth.signInWithPassword({ email: m, password: u }),
        signUp: (m, u, w, x) =>
          de.auth.signUp({
            email: m,
            password: u,
            options: { data: { organization_name: w, organization_code: x } },
          }),
        signOut: () => de.auth.signOut(),
      }
    );
  }
  function Dt({ auth: e }) {
    const [a, t] = y("signin"),
      [r, i] = y(""),
      [d, b] = y(""),
      [v, o] = y(
        "\u0634\u0631\u0643\u0629 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0643\u0628\u0631\u0649 \u0644\u0644\u0637\u0644\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A",
      ),
      [l, c] = y(""),
      [p, m] = y(""),
      [u, w] = y(!1);
    return React.createElement(
      "div",
      {
        dir: "rtl",
        className: "min-h-screen flex items-center justify-center p-4",
        style: { background: "var(--bg)", fontFamily: "'Cairo', sans-serif" },
      },
      React.createElement(
        "div",
        {
          className: "w-full max-w-md rounded-2xl border p-6 shadow-sm",
          style: {
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          },
        },
        React.createElement(
          "h1",
          {
            className: "text-xl font-bold mb-1",
            style: {
              fontFamily: "'El Messiri', sans-serif",
              color: "var(--text-strong)",
            },
          },
          "\u0634\u0631\u0643\u0629 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0643\u0628\u0631\u0649 \u0644\u0644\u0637\u0644\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A",
        ),
        React.createElement(
          "p",
          { className: "text-sm mb-5", style: { color: "var(--text-muted)" } },
          a === "signin"
            ? "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629"
            : "\u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0623\u0648\u0644",
        ),
        React.createElement(
          "div",
          { className: "flex flex-col gap-3" },
          a === "signup" &&
            React.createElement(
              React.Fragment,
              null,
              React.createElement(
                "div",
                null,
                React.createElement(
                  R,
                  null,
                  "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629",
                ),
                React.createElement(E, {
                  value: v,
                  onChange: (h) => o(h.target.value),
                }),
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  R,
                  null,
                  "\u0631\u0645\u0632 \u0627\u0644\u0634\u0631\u0643\u0629 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 (\u0627\u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u064B\u0627 \u0639\u0646\u062F \u0625\u0646\u0634\u0627\u0621 \u0634\u0631\u0643\u0629 \u062C\u062F\u064A\u062F\u0629)",
                ),
                React.createElement(E, {
                  value: l,
                  onChange: (h) => c(h.target.value),
                }),
              ),
            ),
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
            ),
            React.createElement(E, {
              type: "email",
              value: r,
              onChange: (h) => i(h.target.value),
            }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
            ),
            React.createElement(E, {
              type: "password",
              value: d,
              onChange: (h) => b(h.target.value),
            }),
          ),
          React.createElement(
            K,
            {
              onClick: async () => {
                if (!r.trim() || d.length < 6 || (a === "signup" && !v.trim()))
                  return;
                (w(!0), m(""));
                const h =
                  a === "signin"
                    ? await e.signIn(r.trim(), d)
                    : await e.signUp(r.trim(), d, v.trim(), l.trim());
                (w(!1),
                  h.error
                    ? m(h.error.message)
                    : a === "signup" &&
                      !h.data.session &&
                      m(
                        "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628. \u0627\u0641\u062D\u0635 \u0628\u0631\u064A\u062F\u0643 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0633\u0627\u0628 \u062B\u0645 \u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644.",
                      ));
              },
              full: !0,
              disabled: u || !r.trim() || d.length < 6,
            },
            u
              ? "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u0646\u0641\u064A\u0630..."
              : a === "signin"
                ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"
                : "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628",
          ),
          p &&
            React.createElement(
              "div",
              {
                className: "text-xs rounded-lg p-2",
                style: { background: "var(--warn-bg)", color: "var(--danger)" },
              },
              p,
            ),
          React.createElement(
            "button",
            {
              onClick: () => {
                (t(a === "signin" ? "signup" : "signin"), m(""));
              },
              className: "text-xs",
              style: { color: "var(--accent)" },
            },
            a === "signin"
              ? "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F"
              : "\u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F \u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
          ),
        ),
      ),
    );
  }
  function at({
    organizationId: e,
    organizationCode: a,
    email: t,
    onSignOut: r,
  }) {
    const {
        ready: i,
        dataLoaded: d,
        usingLocal: b,
        data: v,
        upsert: o,
        transact: l,
        remove: c,
        downloadsNs: p,
        error: m,
        reload: u,
        importBackup: w,
      } = It(e),
      {
        projects: x,
        invoices: h,
        expenses: $,
        income: B,
        inventory: S,
        customers: T,
        suppliers: f,
        workers: O,
        attendance: C,
        personalLog: q,
      } = v,
      [F, U] = y("dashboard"),
      [X, n] = y("customers"),
      [k, j] = y(null),
      [I, M] = y(!1),
      [s, g] = y(!1),
      [A, W] = y(() => {
        var z;
        try {
          return (
            localStorage.getItem("factory_theme") ||
            ((z = window.matchMedia) != null &&
            z.call(window, "(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light")
          );
        } catch (J) {
          return "light";
        }
      }),
      [P, L] = y(re(Z())),
      Q = ye(null);
    be(() => {
      document.documentElement.setAttribute("data-theme", A);
      try {
        localStorage.setItem("factory_theme", A);
      } catch (z) {}
    }, [A]);
    const ee = ke(
        () =>
          S.filter((z) => Number(z.quantity) <= Number(z.minThreshold || 0)),
        [S],
      ),
      V = re(Z()),
      ue = ke(() => Ie(x, B), [x, B]),
      ze = ke(
        () =>
          ue
            .filter((z) => re(z.date) === V)
            .reduce((z, J) => z + Number(J.amount || 0), 0),
        [ue, V],
      ),
      Me = ke(
        () =>
          $.filter((z) => re(z.date) === V).reduce(
            (z, J) => z + Number(J.amount || 0),
            0,
          ),
        [$, V],
      ),
      fe = ke(() => He(h, f, V), [h, f, V]),
      Re = ke(
        () => T.reduce((z, J) => z + Math.max(0, Oe(J, x, B).total), 0),
        [T, x, B],
      ),
      Xe = async (z) => {
        var ve;
        const J = (ve = z.target.files) == null ? void 0 : ve[0];
        if (((z.target.value = ""), !!J))
          try {
            const le = JSON.parse(await J.text()),
              xe = await w(le);
            G(
              `\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0646\u0633\u062E\u0629 \u0628\u0646\u062C\u0627\u062D: ${xe.added} \u0633\u062C\u0644 \u062C\u062F\u064A\u062F \u0648${xe.updated} \u0633\u062C\u0644 \u0645\u062D\u062F\u062B.`,
              "success",
            );
          } catch (le) {
            G(
              "\u0644\u0645 \u064A\u0643\u062A\u0645\u0644 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0648\u0642\u062F \u062A\u0643\u0648\u0646 \u0628\u0639\u0636 \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u062D\u064F\u0641\u0638\u062A. \u0623\u0639\u062F \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u0644\u0641 \u0646\u0641\u0633\u0647 \u0628\u0639\u062F \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0633\u0628\u0628\u061B \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u064A\u0636\u064A\u0641 \u0623\u0648 \u064A\u062D\u062F\u0651\u062B \u062D\u0633\u0628 \u0627\u0644\u0645\u0639\u0631\u0651\u0641 \u0648\u0644\u0627 \u064A\u0646\u0634\u0626 \u0646\u0633\u062E\u064B\u0627 \u0645\u0643\u0631\u0631\u0629." +
                (le != null && le.message
                  ? " \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644: " +
                    le.message
                  : ""),
            );
          }
      },
      Ne = x.find((z) => z.id === k),
      _ = [
        {
          key: "dashboard",
          label:
            "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
          icon: "dashboard",
        },
        {
          key: "projects",
          label: "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
          icon: "factory",
        },
        {
          key: "invoices",
          label: "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",
          icon: "receipt",
        },
        {
          key: "finance",
          label:
            "\u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641 \u0648\u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
          icon: "wallet",
        },
        {
          key: "accounts",
          label:
            "\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0648\u0627\u0644\u062F\u064A\u0648\u0646",
          icon: "users",
        },
        {
          key: "attendance",
          label:
            "\u062D\u0636\u0648\u0631 \u0627\u0644\u0639\u0645\u0627\u0644",
          icon: "calendar",
        },
        {
          key: "inventory",
          label: "\u0627\u0644\u0645\u062E\u0632\u0648\u0646",
          icon: "package",
        },
        {
          key: "reports",
          label:
            "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0634\u0647\u0631\u064A\u0629",
          icon: "barChart",
        },
        {
          key: "personal",
          label:
            "\u0633\u062C\u0644\u064A \u0627\u0644\u0634\u062E\u0635\u064A",
          icon: "wallet",
        },
      ];
    return i
      ? !d && m && !b
        ? React.createElement(
            "div",
            {
              dir: "rtl",
              className: "min-h-screen flex items-center justify-center p-4",
              style: {
                background: "var(--bg)",
                fontFamily: "'Cairo', sans-serif",
              },
            },
            React.createElement(
              "div",
              {
                className:
                  "w-full max-w-lg rounded-2xl border p-5 flex flex-col gap-3",
                style: {
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                },
              },
              React.createElement(
                "h1",
                {
                  className: "text-lg font-bold",
                  style: { color: "var(--text-strong)" },
                },
                "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629",
              ),
              React.createElement(
                "p",
                { className: "text-sm", style: { color: "var(--text-body)" } },
                "\u0644\u0645 \u062A\u0643\u062A\u0645\u0644 \u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646 \u0627\u0644\u0633\u062D\u0627\u0628\u0629\u060C \u0644\u0630\u0644\u0643 \u0623\u0648\u0642\u0641\u0646\u0627 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0644\u062A\u062C\u0646\u0628 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0641\u0648\u0642 \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0645\u062D\u0645\u0651\u0644\u0629.",
              ),
              React.createElement(
                "p",
                {
                  className: "text-xs break-words",
                  style: { color: "var(--danger)" },
                },
                m,
              ),
              React.createElement(
                "div",
                { className: "flex gap-2" },
                React.createElement(
                  K,
                  { onClick: u },
                  React.createElement(D, { name: "rotate", size: 14 }),
                  " \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629",
                ),
                React.createElement(
                  he,
                  { onClick: r },
                  "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
                ),
              ),
            ),
          )
        : React.createElement(
            "div",
            {
              dir: "rtl",
              className: "w-full min-h-screen flex",
              style: {
                background: "var(--bg)",
                fontFamily: "'Cairo', sans-serif",
              },
            },
            React.createElement(
              "aside",
              {
                className:
                  "w-[220px] shrink-0 hidden sm:flex sticky top-0 h-screen overflow-y-auto flex-col py-5 px-3 gap-1",
                style: { background: "var(--sidebar-bg)" },
              },
              React.createElement(
                "div",
                { className: "px-2 pb-5 flex items-center gap-2" },
                React.createElement("img", {
                  src: "Earthlog.jpeg",
                  alt: "\u0634\u0639\u0627\u0631 \u0627\u0644\u0634\u0631\u0643\u0629",
                  className: "w-9 h-9 rounded-xl object-cover shrink-0",
                }),
                React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "div",
                    {
                      className: "text-white font-bold text-sm",
                      style: { fontFamily: "'El Messiri', sans-serif" },
                    },
                    "\u0634\u0631\u0643\u0629 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0643\u0628\u0631\u0649 \u0644\u0644\u0637\u0644\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A",
                  ),
                  React.createElement(
                    "div",
                    { className: "text-[11px] text-stone-400" },
                    "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629",
                  ),
                ),
              ),
              React.createElement(
                "div",
                { className: "flex flex-col gap-1 overflow-y-auto" },
                _.map((z) => {
                  const J = F === z.key;
                  return React.createElement(
                    "button",
                    {
                      key: z.key,
                      onClick: () => U(z.key),
                      className:
                        "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition text-right",
                      style: {
                        background: J ? "var(--accent)" : "transparent",
                        color: J ? "white" : "var(--sidebar-text)",
                      },
                    },
                    React.createElement(D, { name: z.icon, size: 17 }),
                    z.label,
                  );
                }),
              ),
              React.createElement(
                "div",
                { className: "mt-auto pt-3 flex flex-col gap-2" },
                React.createElement(
                  "button",
                  {
                    onClick: () => W(A === "dark" ? "light" : "dark"),
                    className:
                      "flex items-center gap-2 px-3 py-2 rounded-xl text-xs border border-stone-600 text-stone-300 hover:text-white transition",
                  },
                  React.createElement(D, {
                    name: A === "dark" ? "sun" : "moon",
                    size: 14,
                  }),
                  " ",
                  A === "dark"
                    ? "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062A\u062D"
                    : "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644\u064A",
                ),
                React.createElement(
                  "button",
                  {
                    disabled: !d,
                    onClick: () => tt(p, v),
                    className:
                      "flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs border border-stone-600 text-stone-300 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed",
                  },
                  React.createElement(D, { name: "download", size: 14 }),
                  " \u062A\u0642\u0631\u064A\u0631 Excel (\u0645\u0644\u062E\u0635)",
                ),
                React.createElement(
                  "button",
                  {
                    disabled: !d,
                    onClick: () => Ve(v),
                    className:
                      "flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs border border-stone-600 text-stone-300 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed",
                  },
                  React.createElement(D, { name: "download", size: 14 }),
                  " \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0643\u0627\u0645\u0644\u0629 (JSON)",
                ),
                React.createElement(
                  "button",
                  {
                    disabled: !d,
                    onClick: () => {
                      var z;
                      return (z = Q.current) == null ? void 0 : z.click();
                    },
                    className:
                      "flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs border border-stone-600 text-stone-300 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed",
                  },
                  React.createElement(D, { name: "upload", size: 14 }),
                  " \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0646\u0633\u062E\u0629 JSON",
                ),
                React.createElement("input", {
                  ref: Q,
                  type: "file",
                  accept: ".json,application/json",
                  onChange: Xe,
                  className: "hidden",
                }),
                React.createElement(
                  "div",
                  {
                    className:
                      "px-2 text-[10px] leading-relaxed text-stone-500",
                  },
                  "\u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u064A\u062F\u0645\u062C \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u064A\u062D\u062F\u0651\u062B \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0630\u0627\u062A \u0627\u0644\u0645\u0639\u0631\u0641 \u0646\u0641\u0633\u0647.",
                ),
                React.createElement(
                  "div",
                  {
                    className:
                      "px-2 text-[10px] leading-relaxed text-stone-500",
                  },
                  "\u0646\u0633\u062E\u0629 JSON \u062A\u062D\u0641\u0638 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0648\u062D\u0642\u0648\u0644\u0647\u0627\u061B \u0644\u0627 \u062A\u0634\u0645\u0644 \u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0623\u0648 \u0625\u0639\u062F\u0627\u062F\u0627\u062A Supabase.",
                ),
                b &&
                  React.createElement(
                    "div",
                    {
                      className:
                        "px-2 text-[10px] leading-relaxed text-stone-500",
                    },
                    "\u064A\u0639\u0645\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u062D\u0627\u0644\u064A\u064B\u0627 \u0628\u062A\u062E\u0632\u064A\u0646 \u0645\u062D\u0644\u064A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0641\u0642\u0637.",
                  ),
                a &&
                  React.createElement(
                    "div",
                    {
                      className:
                        "px-2 text-[10px] leading-relaxed text-stone-400",
                    },
                    "\u0631\u0645\u0632 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0634\u0631\u0643\u0629: ",
                    a,
                  ),
                t &&
                  React.createElement(
                    "button",
                    {
                      onClick: r,
                      className:
                        "px-3 py-2 text-xs text-right text-stone-300 hover:text-white",
                    },
                    "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C (",
                    t,
                    ")",
                  ),
              ),
            ),
            React.createElement(
              "div",
              {
                className:
                  "sm:hidden fixed bottom-0 inset-x-0 z-40 flex justify-start gap-1 px-2 py-1 overflow-x-auto",
                style: { background: "var(--sidebar-bg)" },
              },
              _.map((z) => {
                const J = F === z.key;
                return React.createElement(
                  "button",
                  {
                    key: z.key,
                    onClick: () => {
                      (U(z.key), g(!1));
                    },
                    className:
                      "flex flex-col items-center justify-center gap-0.5 px-1 py-1.5 min-w-[64px] min-h-[58px] shrink-0",
                  },
                  React.createElement(D, {
                    name: z.icon,
                    size: 20,
                    color: J ? "var(--accent)" : "#aaa69e",
                  }),
                  React.createElement(
                    "span",
                    {
                      className: "text-[9px] whitespace-nowrap",
                      style: { color: J ? "var(--accent)" : "#aaa69e" },
                    },
                    z.label,
                  ),
                );
              }),
              React.createElement(
                "button",
                {
                  onClick: () => g((z) => !z),
                  className:
                    "flex flex-col items-center justify-center gap-0.5 px-1 py-1.5 min-w-[64px] min-h-[58px] shrink-0",
                  "aria-label": "\u0627\u0644\u0645\u0632\u064A\u062F",
                },
                React.createElement(D, {
                  name: "more",
                  size: 20,
                  color: s ? "var(--accent)" : "#aaa69e",
                }),
                React.createElement(
                  "span",
                  {
                    className: "text-[9px]",
                    style: { color: s ? "var(--accent)" : "#aaa69e" },
                  },
                  "\u0627\u0644\u0645\u0632\u064A\u062F",
                ),
              ),
            ),
            s &&
              React.createElement(
                "div",
                {
                  className:
                    "sm:hidden fixed bottom-[68px] left-3 z-50 w-[min(300px,calc(100vw-24px))] rounded-2xl border p-3 shadow-xl flex flex-col gap-2",
                  style: {
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  },
                },
                React.createElement(
                  "div",
                  {
                    className: "text-xs font-semibold px-1",
                    style: { color: "var(--text-body)" },
                  },
                  "\u0627\u0644\u0623\u062F\u0648\u0627\u062A",
                ),
                React.createElement(
                  "button",
                  {
                    onClick: () => W(A === "dark" ? "light" : "dark"),
                    className:
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border",
                    style: {
                      borderColor: "var(--card-border)",
                      color: "var(--text-body)",
                    },
                  },
                  React.createElement(D, {
                    name: A === "dark" ? "sun" : "moon",
                    size: 15,
                  }),
                  " ",
                  A === "dark"
                    ? "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062A\u062D"
                    : "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644\u064A",
                ),
                React.createElement(
                  "button",
                  {
                    disabled: !d,
                    onClick: () => {
                      (tt(p, v), g(!1));
                    },
                    className:
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border disabled:opacity-50",
                    style: {
                      borderColor: "var(--card-border)",
                      color: "var(--text-body)",
                    },
                  },
                  React.createElement(D, { name: "download", size: 15 }),
                  " \u062A\u0642\u0631\u064A\u0631 Excel (\u0645\u0644\u062E\u0635)",
                ),
                React.createElement(
                  "button",
                  {
                    disabled: !d,
                    onClick: () => {
                      (Ve(v), g(!1));
                    },
                    className:
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border disabled:opacity-50",
                    style: {
                      borderColor: "var(--card-border)",
                      color: "var(--text-body)",
                    },
                  },
                  React.createElement(D, { name: "download", size: 15 }),
                  " \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0643\u0627\u0645\u0644\u0629 (JSON)",
                ),
                React.createElement(
                  "button",
                  {
                    disabled: !d,
                    onClick: () => {
                      var z;
                      (g(!1), (z = Q.current) == null || z.click());
                    },
                    className:
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm border disabled:opacity-50",
                    style: {
                      borderColor: "var(--card-border)",
                      color: "var(--text-body)",
                    },
                  },
                  React.createElement(D, { name: "upload", size: 15 }),
                  " \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0646\u0633\u062E\u0629 JSON",
                ),
                React.createElement(
                  "div",
                  {
                    className: "text-[10px] leading-relaxed px-1",
                    style: { color: "var(--text-muted)" },
                  },
                  "\u0627\u0644\u0646\u0633\u062E\u0629 \u062A\u062D\u0641\u0638 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0648\u0644\u0627 \u062A\u0634\u0645\u0644 \u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0623\u0648 \u0625\u0639\u062F\u0627\u062F\u0627\u062A Supabase.",
                ),
              ),
            React.createElement(
              "main",
              { className: "flex-1 min-w-0 p-4 sm:p-6 pb-24 sm:pb-6" },
              React.createElement(
                "div",
                {
                  className:
                    "sm:hidden mb-4 rounded-xl border px-3 py-3 flex items-center gap-3",
                  style: {
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  },
                },
                React.createElement("img", {
                  src: "Earthlog.jpeg",
                  alt: "\u0634\u0639\u0627\u0631 \u0627\u0644\u0634\u0631\u0643\u0629",
                  className: "w-9 h-9 rounded-xl object-cover shrink-0",
                }),
                React.createElement(
                  "div",
                  { className: "min-w-0 flex-1" },
                  React.createElement(
                    "div",
                    {
                      className: "text-sm font-bold truncate",
                      style: {
                        fontFamily: "'El Messiri', sans-serif",
                        color: "var(--text-strong)",
                      },
                    },
                    "\u0634\u0631\u0643\u0629 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0643\u0628\u0631\u0649 \u0644\u0644\u0637\u0644\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A",
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "text-[10px] truncate",
                      style: { color: "var(--text-muted)" },
                    },
                    t ||
                      "\u062D\u0633\u0627\u0628 \u0627\u0644\u0634\u0631\u0643\u0629",
                    a
                      ? " \xB7 \u0631\u0645\u0632 \u0627\u0644\u0634\u0631\u0643\u0629: " +
                          a
                      : "",
                  ),
                ),
                React.createElement(
                  "button",
                  {
                    onClick: () => W(A === "dark" ? "light" : "dark"),
                    className: "shrink-0 p-2 rounded-lg border",
                    "aria-label":
                      A === "dark"
                        ? "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062A\u062D"
                        : "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644\u064A",
                    style: {
                      color: "var(--text-body)",
                      borderColor: "var(--card-border)",
                    },
                  },
                  React.createElement(D, {
                    name: A === "dark" ? "sun" : "moon",
                    size: 15,
                  }),
                ),
                t &&
                  React.createElement(
                    "button",
                    {
                      onClick: r,
                      className:
                        "shrink-0 text-xs px-2.5 py-1.5 rounded-lg border",
                      style: {
                        color: "var(--text-body)",
                        borderColor: "var(--card-border)",
                      },
                    },
                    "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
                  ),
              ),
              m &&
                React.createElement(
                  "div",
                  {
                    className: "mb-4 rounded-lg px-3 py-2 text-xs",
                    style: {
                      background: "var(--warn-bg)",
                      color: "var(--danger)",
                    },
                  },
                  "\u062A\u0639\u0630\u0631 \u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A: ",
                  m,
                ),
              F === "dashboard" &&
                React.createElement(Et, {
                  projects: x,
                  invoices: h,
                  lowStock: ee,
                  customerDebt: Re,
                  monthIncome: ze,
                  monthExpense: Me,
                  monthInvoices: fe,
                  onOpenProject: (z) => j(z),
                  goProjects: () => U("projects"),
                }),
              F === "projects" &&
                React.createElement(Bt, {
                  projects: x,
                  onOpen: (z) => j(z),
                  onNew: () => M(!0),
                }),
              F === "invoices" &&
                React.createElement(Wt, {
                  invoices: h,
                  projects: x,
                  suppliers: f,
                  transact: l,
                  remove: c,
                }),
              F === "finance" &&
                React.createElement(Yt, {
                  expenses: $,
                  income: B,
                  projects: x,
                  invoices: h,
                  suppliers: f,
                  customers: T,
                  upsert: o,
                  transact: l,
                  remove: c,
                }),
              F === "accounts" &&
                React.createElement(Ht, {
                  sub: X,
                  setSub: n,
                  customers: T,
                  suppliers: f,
                  workers: O,
                  invoices: h,
                  upsert: o,
                  transact: l,
                  remove: c,
                  projects: x,
                  income: B,
                  onOpenProject: (z) => j(z),
                }),
              F === "attendance" &&
                React.createElement(ta, {
                  workers: O,
                  attendance: C,
                  upsert: o,
                  remove: c,
                }),
              F === "inventory" &&
                React.createElement(sa, { inventory: S, upsert: o, remove: c }),
              F === "reports" &&
                React.createElement(aa, {
                  month: P,
                  setMonth: L,
                  projects: x,
                  invoices: h,
                  expenses: $,
                  income: B,
                  attendance: C,
                  workers: O,
                  customers: T,
                  suppliers: f,
                  downloadsNs: p,
                }),
              F === "personal" &&
                React.createElement(ra, { data: q, upsert: o, remove: c }),
            ),
            Ne &&
              React.createElement(Qt, {
                project: Ne,
                onClose: () => j(null),
                onSave: (z) => o("projects", z),
                onDeletePayment: (z, J) => {
                  const ve = z.paymentId || z.id,
                    le = B.filter(
                      (xe) =>
                        xe.projectId === Ne.id &&
                        (xe.paymentId || xe.id) === ve,
                    ).map((xe) => ({ collection: "income", id: xe.id }));
                  l({
                    upserts: [{ collection: "projects", record: J }],
                    deletes: le,
                  });
                },
                onDelete: () => {
                  const z = [
                    { collection: "projects", id: Ne.id },
                    ...B.filter((J) => J.projectId === Ne.id).map((J) => ({
                      collection: "income",
                      id: J.id,
                    })),
                  ];
                  (l({ deletes: z }), j(null));
                },
                onAddPayment: (z, J) => {
                  const ve = {
                    id: J.id,
                    paymentId: J.id,
                    projectId: z.id,
                    date: J.date,
                    customerName: z.customerName,
                    amount: J.amount,
                    includeInIncome: J.includeInIncome !== !1,
                    description: J.description,
                  };
                  l({
                    upserts: [
                      { collection: "projects", record: z },
                      { collection: "income", record: ve },
                    ],
                  });
                },
                customers: T,
                income: B,
                upsertCustomer: (z) => o("customers", z),
              }),
            I &&
              React.createElement(qt, {
                onClose: () => M(!1),
                onCreate: async (z) => {
                  const J = (z.payments || []).map((le) => ({
                    collection: "income",
                    record: {
                      id: le.id,
                      paymentId: le.id,
                      projectId: z.id,
                      date: le.date,
                      customerName: z.customerName,
                      amount: le.amount,
                      includeInIncome: le.includeInIncome !== !1,
                      description: le.description,
                    },
                  }));
                  (await l({
                    upserts: [{ collection: "projects", record: z }, ...J],
                  })) && (M(!1), j(z.id));
                },
                customers: T,
                upsert: o,
              }),
          )
      : React.createElement(
          "div",
          {
            dir: "rtl",
            className: "min-h-[500px] flex items-center justify-center",
            style: {
              background: "var(--bg)",
              fontFamily: "'Cairo', sans-serif",
            },
          },
          React.createElement(
            "div",
            { className: "text-sm", style: { color: "var(--text-muted)" } },
            "\u062C\u0627\u0631\u0650 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...",
          ),
        );
  }
  function Et({
    projects: e,
    invoices: a,
    lowStock: t,
    customerDebt: r,
    monthIncome: i,
    monthExpense: d,
    monthInvoices: b,
    onOpenProject: v,
    goProjects: o,
  }) {
    const l = e.filter(
        (u) =>
          u.status ===
          "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
      ),
      c = e.filter((u) => u.status === "\u062C\u062F\u064A\u062F"),
      p = [...a]
        .sort((u, w) => (w.date || "").localeCompare(u.date || ""))
        .slice(0, 5),
      m = i - d - b;
    return React.createElement(
      "div",
      { className: "flex flex-col gap-6" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          {
            className: "text-xl font-bold",
            style: {
              fontFamily: "'El Messiri', sans-serif",
              color: "var(--text-strong)",
            },
          },
          "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
        ),
        React.createElement(
          "p",
          {
            className: "text-sm mt-0.5",
            style: { color: "var(--text-muted)" },
          },
          "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0635\u0646\u0639 \u0627\u0644\u064A\u0648\u0645",
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 lg:grid-cols-4 gap-3" },
        React.createElement(te, {
          icon: "hammer",
          label:
            "\u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u0627\u0631\u064A\u0629",
          value: l.length,
          accent: "var(--success)",
        }),
        React.createElement(te, {
          icon: "circleDot",
          label:
            "\u0645\u0634\u0627\u0631\u064A\u0639 \u0642\u0627\u062F\u0645\u0629",
          value: c.length,
          accent: "var(--warning)",
        }),
        React.createElement(te, {
          icon: "alert",
          label:
            "\u0645\u0648\u0627\u062F \u0646\u0627\u0642\u0635\u0629 \u0628\u0627\u0644\u0645\u062E\u0632\u0648\u0646",
          value: t.length,
          accent: "var(--danger)",
        }),
        React.createElement(te, {
          icon: m >= 0 ? "trendUp" : "trendDown",
          label:
            "\u0635\u0627\u0641\u064A \u0627\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629",
          value: N(m),
          sub: "\u0648\u0627\u0631\u062F\u0627\u062A \u2212 \u0645\u0635\u0627\u0631\u064A\u0641 \u2212 \u0641\u0648\u0627\u062A\u064A\u0631 \u0645\u062F\u0641\u0648\u0639\u0629",
          accent: m >= 0 ? "var(--success)" : "var(--danger)",
        }),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 lg:grid-cols-3 gap-3" },
        React.createElement(te, {
          icon: "users",
          label:
            "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
          value: N(r),
          accent: "var(--accent)",
        }),
        React.createElement(
          "div",
          {
            className: "rounded-2xl border p-4 lg:col-span-2",
            style: {
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            },
          },
          React.createElement(
            "h3",
            {
              className: "font-semibold text-sm mb-3",
              style: { color: "var(--text-body)" },
            },
            "\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
          ),
          t.length === 0
            ? React.createElement(ae, {
                icon: "package",
                title:
                  "\u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0636\u0645\u0646 \u0627\u0644\u062D\u062F \u0627\u0644\u0637\u0628\u064A\u0639\u064A",
              })
            : React.createElement(
                "div",
                { className: "flex flex-col gap-2" },
                t.map((u) =>
                  React.createElement(
                    "div",
                    {
                      key: u.id,
                      className:
                        "flex items-center justify-between rounded-xl px-3 py-2.5",
                      style: { background: "var(--warn-bg)" },
                    },
                    React.createElement(
                      "div",
                      {
                        className: "text-sm",
                        style: { color: "var(--text-body)" },
                      },
                      u.name,
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "text-xs font-medium",
                        style: { color: "var(--danger)" },
                      },
                      N(u.quantity),
                      " ",
                      u.unit,
                      " \u0645\u062A\u0628\u0642\u064D",
                    ),
                  ),
                ),
              ),
        ),
      ),
      React.createElement(
        "div",
        {
          className: "rounded-2xl border p-4",
          style: {
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          },
        },
        React.createElement(
          "div",
          { className: "flex items-center justify-between mb-3" },
          React.createElement(
            "h3",
            {
              className: "font-semibold text-sm",
              style: { color: "var(--text-body)" },
            },
            "\u0645\u0634\u0627\u0631\u064A\u0639 \u0642\u0627\u062F\u0645\u0629 (\u062C\u062F\u064A\u062F\u0629)",
          ),
          React.createElement(
            "button",
            {
              onClick: o,
              className: "text-xs flex items-center gap-1",
              style: { color: "var(--accent)" },
            },
            "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 ",
            React.createElement(D, { name: "arrowRight", size: 12 }),
          ),
        ),
        c.length === 0
          ? React.createElement(ae, {
              icon: "circleDot",
              title:
                "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u062F\u064A\u062F\u0629",
              sub: "\u0623\u0636\u0641 \u0645\u0634\u0631\u0648\u0639\u064B\u0627 \u0639\u0646\u062F \u0627\u062A\u0635\u0627\u0644 \u0632\u0628\u0648\u0646",
            })
          : React.createElement(
              "div",
              { className: "grid sm:grid-cols-2 gap-2" },
              c.slice(0, 6).map((u) =>
                React.createElement(
                  "button",
                  {
                    key: u.id,
                    onClick: () => v(u.id),
                    className:
                      "flex items-center justify-between rounded-xl border px-3 py-2.5 text-right transition",
                    style: { borderColor: "var(--divider)" },
                  },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "div",
                      {
                        className: "text-sm font-medium",
                        style: { color: "var(--text-strong)" },
                      },
                      u.customerName,
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "text-xs flex items-center gap-1 mt-0.5",
                        style: { color: "var(--text-muted)" },
                      },
                      React.createElement(D, { name: "mappin", size: 11 }),
                      " ",
                      u.location ||
                        "\u0628\u062F\u0648\u0646 \u0645\u0648\u0642\u0639",
                    ),
                  ),
                  React.createElement(
                    se,
                    { bg: je(u.status).bg, fg: je(u.status).fg },
                    u.productType,
                  ),
                ),
              ),
            ),
      ),
      React.createElement(
        "div",
        {
          className: "rounded-2xl border p-4",
          style: {
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          },
        },
        React.createElement(
          "h3",
          {
            className: "font-semibold text-sm mb-3",
            style: { color: "var(--text-body)" },
          },
          "\u0623\u062D\u062F\u062B \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",
        ),
        p.length === 0
          ? React.createElement(ae, {
              icon: "receipt",
              title:
                "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u0648\u0627\u062A\u064A\u0631 \u0645\u0633\u062C\u0651\u0644\u0629 \u0628\u0639\u062F",
            })
          : React.createElement(
              "div",
              {
                className: "flex flex-col divide-y",
                style: { borderColor: "var(--divider)" },
              },
              p.map((u) =>
                React.createElement(
                  "div",
                  {
                    key: u.id,
                    className: "flex items-center justify-between py-2.5",
                    style: { borderColor: "var(--divider)" },
                  },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "div",
                      {
                        className: "text-sm",
                        style: { color: "var(--text-body)" },
                      },
                      u.supplierName || u.type,
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "text-xs",
                        style: { color: "var(--text-muted)" },
                      },
                      u.type,
                      " \xB7 ",
                      u.date,
                    ),
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "text-sm font-semibold",
                      style: { color: "var(--text-strong)" },
                    },
                    N(u.amount),
                  ),
                ),
              ),
            ),
      ),
    );
  }
  function Bt({ projects: e, onOpen: a, onNew: t }) {
    const [r, i] = y(""),
      [d, b] = y("\u0627\u0644\u0643\u0644"),
      v = oe(r),
      o = e.filter((l) => {
        const c = (l.measurements || []).map((w) => w.workerName || ""),
          p = [l.customerName, l.location, ...c].map(oe),
          m = !v || p.some((w) => w.includes(v)),
          u = d === "\u0627\u0644\u0643\u0644" || l.status === d;
        return m && u;
      });
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between flex-wrap gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            {
              className: "text-xl font-bold",
              style: {
                fontFamily: "'El Messiri', sans-serif",
                color: "var(--text-strong)",
              },
            },
            "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
          ),
          React.createElement(
            "p",
            {
              className: "text-sm mt-0.5",
              style: { color: "var(--text-muted)" },
            },
            "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0632\u0628\u0627\u0626\u0646\u060C \u0627\u0644\u0628\u0636\u0627\u0639\u0629 \u0627\u0644\u0645\u0631\u0633\u0644\u0629\u060C \u0648\u0627\u0644\u0645\u0643\u0627\u064A\u064A\u0644",
          ),
        ),
        React.createElement(
          K,
          { onClick: t },
          React.createElement(D, { name: "plus", size: 16 }),
          " \u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F",
        ),
      ),
      React.createElement(
        "div",
        { className: "flex items-center gap-3 flex-wrap" },
        React.createElement(
          "div",
          { className: "relative flex-1 min-w-[180px]" },
          React.createElement(
            "span",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2",
              style: { color: "var(--text-muted)" },
            },
            React.createElement(D, { name: "search", size: 15 }),
          ),
          React.createElement("input", {
            value: r,
            onChange: (l) => i(l.target.value),
            placeholder:
              "\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0623\u0648 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648 \u0627\u0644\u0639\u0627\u0645\u0644...",
            className:
              "w-full rounded-lg border pr-9 pl-3 py-2 text-sm outline-none",
            style: {
              background: "var(--input-bg)",
              borderColor: "var(--card-border)",
              color: "var(--text-strong)",
            },
          }),
        ),
        React.createElement(
          "div",
          { className: "flex gap-1.5 flex-wrap" },
          ["\u0627\u0644\u0643\u0644", ...ft].map((l) =>
            React.createElement(
              "button",
              {
                key: l,
                onClick: () => b(l),
                className: "text-xs px-3 py-2 rounded-lg border transition",
                style:
                  d === l
                    ? {
                        background: "var(--accent)",
                        borderColor: "var(--accent)",
                        color: "white",
                      }
                    : {
                        background: "var(--card-bg)",
                        borderColor: "var(--card-border)",
                        color: "var(--text-body)",
                      },
              },
              l,
            ),
          ),
        ),
      ),
      o.length === 0
        ? React.createElement(ae, {
            icon: "factory",
            title:
              "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0637\u0627\u0628\u0642\u0629",
            sub: "\u0623\u0636\u0641 \u0645\u0634\u0631\u0648\u0639\u064B\u0627 \u062C\u062F\u064A\u062F\u064B\u0627 \u0644\u0644\u0628\u062F\u0621",
          })
        : React.createElement(
            "div",
            { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" },
            o.map((l) => {
              const c = (l.measurements || []).reduce(
                (p, m) => p + Number(m.totalAmount || 0),
                0,
              );
              return React.createElement(
                "button",
                {
                  key: l.id,
                  onClick: () => a(l.id),
                  className:
                    "text-right rounded-2xl border p-4 hover:shadow-sm transition flex flex-col gap-3",
                  style: {
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  },
                },
                React.createElement(
                  "div",
                  { className: "flex items-start justify-between" },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "div",
                      {
                        className: "font-semibold",
                        style: { color: "var(--text-strong)" },
                      },
                      l.customerName,
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "text-xs flex items-center gap-1 mt-1",
                        style: { color: "var(--text-muted)" },
                      },
                      React.createElement(D, { name: "mappin", size: 11 }),
                      " ",
                      l.location ||
                        "\u0628\u062F\u0648\u0646 \u0645\u0648\u0642\u0639",
                    ),
                  ),
                  React.createElement(
                    se,
                    { bg: je(l.status).bg, fg: je(l.status).fg },
                    l.status ||
                      "\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641\u0629",
                  ),
                ),
                React.createElement(
                  "div",
                  {
                    className:
                      "flex items-center justify-between text-xs pt-2 border-t",
                    style: {
                      color: "var(--text-muted)",
                      borderColor: "var(--divider)",
                    },
                  },
                  React.createElement("span", null, l.productType),
                  React.createElement(
                    "span",
                    null,
                    c > 0
                      ? N(c) + " \u0625\u062C\u0645\u0627\u0644\u064A"
                      : l.dateCreated,
                  ),
                ),
              );
            }),
          ),
    );
  }
  function Ge({
    items: e,
    value: a,
    onSelect: t,
    getLabel: r,
    getSearchText: i,
    placeholder: d,
    emptyText:
      b = "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u0645\u0637\u0627\u0628\u0642\u0629",
  }) {
    const [v, o] = y(""),
      [l, c] = y(!1),
      p = e.find((w) => w.id === a),
      m = oe(v),
      u = e.filter((w) => !m || oe(i(w)).includes(m));
    return React.createElement(
      "div",
      { className: "relative" },
      React.createElement(E, {
        value: l ? v : p ? r(p) : "",
        placeholder: d,
        onFocus: () => {
          (c(!0), o(""));
        },
        onChange: (w) => {
          (o(w.target.value), c(!0));
        },
        onBlur: () => window.setTimeout(() => c(!1), 150),
      }),
      l &&
        React.createElement(
          "div",
          {
            className:
              "absolute inset-x-0 top-full z-20 mt-1 max-h-56 overflow-y-auto rounded-lg border shadow-lg",
            style: {
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            },
          },
          u.length === 0
            ? React.createElement(
                "div",
                {
                  className: "px-3 py-2 text-xs",
                  style: { color: "var(--text-muted)" },
                },
                b,
              )
            : u.map((w) =>
                React.createElement(
                  "button",
                  {
                    key: w.id,
                    type: "button",
                    onMouseDown: (x) => x.preventDefault(),
                    onClick: () => {
                      (t(w.id), o(""), c(!1));
                    },
                    className:
                      "w-full px-3 py-2 text-right text-sm border-b last:border-b-0",
                    style: {
                      color: "var(--text-body)",
                      borderColor: "var(--divider)",
                    },
                  },
                  r(w),
                ),
              ),
        ),
      p &&
        React.createElement(
          "button",
          {
            type: "button",
            onClick: () => {
              (t(null), o(""), c(!1));
            },
            className: "absolute left-2 top-1/2 -translate-y-1/2 text-xs",
            style: { color: "var(--text-muted)" },
          },
          "\u0645\u0633\u062D",
        ),
    );
  }
  function yt({
    customers: e,
    customerId: a,
    customerName: t,
    onSelect: r,
    onCreateNew: i,
  }) {
    const [d, b] = y(!1),
      [v, o] = y(""),
      [l, c] = y("");
    return React.createElement(
      "div",
      { className: "flex flex-col gap-2" },
      !d &&
        React.createElement(Ge, {
          items: e,
          value: a,
          onSelect: r,
          placeholder:
            "\u0627\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0623\u0648 \u0627\u0644\u0647\u0627\u062A\u0641...",
          getLabel: (m) => m.name + (m.phone ? " \u2014 " + m.phone : ""),
          getSearchText: (m) => [m.name, m.phone].filter(Boolean).join(" "),
        }),
      !d &&
        React.createElement(
          "button",
          {
            type: "button",
            onClick: () => {
              (b(!0), o(""), c(""));
            },
            className: "text-xs self-start",
            style: { color: "var(--accent)" },
          },
          "+ \u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F",
        ),
      d &&
        React.createElement(
          "div",
          {
            className: "rounded-lg border p-2.5 flex flex-col gap-2",
            style: { borderColor: "var(--card-border)" },
          },
          React.createElement(E, {
            placeholder:
              "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F",
            value: v,
            onChange: (m) => o(m.target.value),
          }),
          React.createElement(E, {
            placeholder:
              "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
            value: l,
            onChange: (m) => c(m.target.value),
          }),
          React.createElement(
            "div",
            { className: "flex gap-2" },
            React.createElement(
              K,
              {
                onClick: () => {
                  if (!v.trim() || qe(e, v)) {
                    G(
                      "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0648\u062C\u0648\u062F \u0645\u0633\u0628\u0642\u064B\u0627 \u0623\u0648 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D.",
                    );
                    return;
                  }
                  const m = {
                    id: ne(),
                    name: v.trim(),
                    phone: l.trim(),
                    notes: "",
                    transactions: [],
                  };
                  (i(m), b(!1));
                },
                disabled: !v.trim(),
              },
              React.createElement(D, { name: "plus", size: 14 }),
              " \u0625\u0636\u0627\u0641\u0629 \u0648\u0627\u062E\u062A\u064A\u0627\u0631",
            ),
            React.createElement(
              he,
              { onClick: () => b(!1) },
              "\u0625\u0644\u063A\u0627\u0621",
            ),
          ),
        ),
      !d &&
        t &&
        !a &&
        React.createElement(
          "div",
          { className: "text-xs", style: { color: "var(--text-muted)" } },
          "\u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u0633\u0645 \u0642\u062F\u064A\u0645 \u063A\u064A\u0631 \u0645\u0633\u062C\u0651\u0644 \u0643\u0639\u0645\u064A\u0644 \u0628\u0639\u062F: \xAB",
          t,
          "\xBB \u2014 \u0627\u062E\u062A\u0631 \u0639\u0645\u064A\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0623\u0639\u0644\u0627\u0647 \u0644\u0631\u0628\u0637\u0647.",
        ),
    );
  }
  function qt({ onClose: e, onCreate: a, customers: t, upsert: r }) {
    const [i, d] = y(""),
      [b, v] = y(""),
      [o, l] = y(Z()),
      [c, p] = y(""),
      [m, u] = y(!0),
      [w, x] = y(Le()),
      [h, $] = y(""),
      [B, S] = y(""),
      [T, f] = y("\u062A\u0643\u0633"),
      [O, C] = y(""),
      [q, F] = y(null),
      U = (n) => {
        (r("customers", n), F(n), d(n.id), b || v(n.phone || ""));
      },
      X = () => {
        const n = t.find((j) => j.id === i) || q;
        if (!n) return;
        if (c !== "" && !H(c)) {
          G(
            "\u0645\u0628\u0644\u063A \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0648\u062C\u0628\u064B\u0627.",
          );
          return;
        }
        if (H(c)) {
          if (!w) {
            G(
              "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649.",
            );
            return;
          }
          if (!o) {
            G(
              "\u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639.",
            );
            return;
          }
          if (w < o) {
            G(
              "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u0633\u0628\u0642 \u0627\u0644\u062F\u0641\u0639\u0629 \u062A\u0627\u0631\u064A\u062E \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639.",
            );
            return;
          }
        }
        const k = H(c)
          ? {
              id: ne(),
              date: w,
              amount: Number(c),
              includeInIncome: m,
              description:
                h.trim() ||
                "\u062F\u0641\u0639\u0629 \u0639\u0646\u062F \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
            }
          : null;
        a({
          id: ne(),
          customerId: n.id,
          customerName: n.name,
          phone: b.trim() || n.phone || "",
          location: B.trim(),
          productType: T,
          status: "\u062C\u062F\u064A\u062F",
          dateCreated: o,
          notes: O.trim(),
          items: [],
          measurements: [],
          payments: k ? [k] : [],
          completedAt: null,
        });
      };
    return React.createElement(
      ce,
      {
        title: "\u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F",
        onClose: e,
      },
      React.createElement(
        "div",
        { className: "flex flex-col gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(R, null, "\u0627\u0644\u0639\u0645\u064A\u0644"),
          React.createElement(yt, {
            customers: t,
            customerId: i,
            onSelect: d,
            onCreateNew: U,
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u062E\u0627\u0635 \u0628\u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
          ),
          React.createElement(E, {
            value: b,
            onChange: (n) => v(n.target.value),
            placeholder:
              "\u0627\u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u064B\u0627 \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0647\u0627\u062A\u0641 \u0627\u0644\u0639\u0645\u064A\u0644",
          }),
        ),
        React.createElement(
          "div",
          { className: "grid grid-cols-2 gap-3" },
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u062A\u0627\u0631\u064A\u062E \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
            ),
            React.createElement(E, {
              type: "date",
              value: o,
              onChange: (n) => l(n.target.value),
            }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649",
            ),
            React.createElement(E, {
              type: "datetime-local",
              value: w,
              onChange: (n) => x(n.target.value),
            }),
          ),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u0648\u0627\u0635\u0644 \u0645\u0646 \u0627\u0644\u0632\u0628\u0648\u0646 \u0639\u0646\u062F \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
          ),
          React.createElement(E, {
            type: "number",
            value: c,
            onChange: (n) => p(n.target.value),
            placeholder:
              "\u0627\u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u064B\u0627 \u0625\u0630\u0627 \u0644\u0645 \u064A\u062F\u0641\u0639",
          }),
        ),
        H(c) &&
          React.createElement(
            "label",
            {
              className: "flex items-center gap-2 text-xs",
              style: { color: "var(--text-body)" },
            },
            React.createElement("input", {
              type: "checkbox",
              checked: m,
              onChange: (n) => u(n.target.checked),
            }),
            " \u0627\u062D\u062A\u0633\u0627\u0628 \u0627\u0644\u062F\u0641\u0639\u0629 \u0636\u0645\u0646 \u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
          ),
        H(c) &&
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u0645\u0644\u0627\u062D\u0638\u0629 \u0627\u0644\u062F\u0641\u0639\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
            ),
            React.createElement(E, {
              value: h,
              onChange: (n) => $(n.target.value),
            }),
          ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
          ),
          React.createElement(E, {
            value: B,
            onChange: (n) => S(n.target.value),
            placeholder:
              "\u0627\u0644\u062D\u064A / \u0627\u0644\u0645\u0646\u0637\u0642\u0629",
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0646\u0648\u0639 \u0627\u0644\u0645\u0646\u062A\u062C \u0627\u0644\u0645\u0637\u0644\u0648\u0628",
          ),
          React.createElement(
            me,
            { value: T, onChange: (n) => f(n.target.value) },
            bt.map((n) => React.createElement("option", { key: n }, n)),
          ),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0645\u0644\u0627\u062D\u0638\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
          ),
          React.createElement("textarea", {
            value: O,
            onChange: (n) => C(n.target.value),
            rows: 2,
            className:
              "w-full rounded-lg border px-3 py-2 text-sm outline-none",
            style: {
              background: "var(--input-bg)",
              borderColor: "var(--card-border)",
              color: "var(--text-strong)",
            },
          }),
        ),
        React.createElement(
          K,
          { onClick: X, full: !0, disabled: !i },
          React.createElement(D, { name: "plus", size: 16 }),
          " \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
        ),
      ),
    );
  }
  function Ot(e, a = []) {
    const t = Ce(e, a),
      r = Math.max(0, t.cost - t.waived),
      i = Math.max(0, t.remaining),
      d = t.settled || (r > 0 && i === 0 && t.surplus === 0),
      b = d
        ? "\u062E\u0627\u0644\u0635"
        : t.surplus > 0
          ? "\u062E\u0627\u0644\u0635 \u2014 \u0631\u0635\u064A\u062F \u0644\u0644\u0632\u0628\u0648\u0646"
          : "\u063A\u064A\u0631 \u062E\u0627\u0644\u0635",
      v = St(r),
      o =
        String(e.id || "")
          .replace(/[^0-9]/g, "")
          .slice(-6) || "000001",
      l = (e.measurements || []).flatMap((h) =>
        (h.entries || []).map(($) => ({
          label:
            $.label ||
            $.name ||
            "\u0628\u0646\u062F \u0642\u064A\u0627\u0633 \u0646\u0647\u0627\u0626\u064A",
          quantity: Number($.quantity || 0),
          unitPrice: Number($.unitPrice || 0),
          total: Number($.total || $.totalAmount || 0),
        })),
      ),
      c = l.length
        ? l
            .map(
              (h, $) =>
                `<tr><td class="index">${$ + 1}</td><td class="item-name">${Y(h.label)}</td><td>${N(h.quantity)}</td><td>${N(h.unitPrice)}</td><td class="num">${N(h.total)}</td></tr>`,
            )
            .join("")
        : '<tr><td colspan="5" class="empty-row">\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u064A\u0627\u0633\u0627\u062A \u0646\u0647\u0627\u0626\u064A\u0629 \u0645\u0633\u062C\u0644\u0629</td></tr>',
      p = new URL("Earthlog.jpeg", window.location.href).href,
      m = window.open("", "_blank", "width=900,height=1000");
    if (!m) {
      G(
        "\u064A\u0631\u062C\u0649 \u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0627\u0644\u0646\u0648\u0627\u0641\u0630 \u0627\u0644\u0645\u0646\u0628\u062B\u0642\u0629 \u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629.",
      );
      return;
    }
    const u = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>\u0641\u0627\u062A\u0648\u0631\u0629 \u0642\u064A\u0627\u0633 \u0646\u0647\u0627\u0626\u064A - ${Y(e.customerName || "")}</title><style>
    @page{size:A4 portrait;margin:0}
    *{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    :root{--ink:#17212b;--muted:#64727d;--brand:#125b5f;--brand-dark:#0b3e42;--gold:#d8a84e;--line:#dce6e7;--soft:#f1f7f6;--paper:#fff}
    body{margin:0;background:#eef2f1;color:var(--ink);font-family:'Cairo',Arial,Tahoma,sans-serif;font-size:12px}
    .page{position:relative;width:210mm;min-height:297mm;margin:0 auto;background:var(--paper);padding:10mm 14mm 16mm;overflow:hidden}
    .shape{position:absolute;z-index:0;top:-30mm;left:-35mm;width:92mm;height:92mm;border-radius:50%;background:var(--soft);opacity:.9}
    .shape2{position:absolute;z-index:0;top:-14mm;right:-30mm;width:72mm;height:72mm;border-radius:50%;border:10mm solid #f7fbfa;opacity:.9}
    .topline{position:absolute;z-index:1;top:0;right:0;left:0;height:5mm;background:linear-gradient(90deg,var(--brand-dark),var(--brand),var(--gold))}
    .content{position:relative;z-index:2}
    .header{display:grid;grid-template-columns:1.25fr .95fr;gap:14px;align-items:start;padding-top:2mm;padding-bottom:8px;border-bottom:1px solid var(--line)}
    .identity{display:flex;align-items:center;gap:12px}
    .logo{width:58px;height:58px;flex:0 0 58px;border-radius:14px;object-fit:cover;box-shadow:0 6px 14px rgba(18,91,95,.18)}
    .company{font-size:21px;line-height:1.35;font-weight:800;color:var(--brand-dark)}
    .subtitle{font-size:11px;color:var(--muted);margin-top:2px;font-weight:600}
    .address{font-size:10.5px;color:var(--muted);margin-top:5px}
    .meta{display:grid;grid-template-columns:1fr 1fr;gap:7px}
    .meta-card{border:1px solid var(--line);border-radius:11px;padding:7px 9px;background:#fbfdfd}
    .meta-card.wide{grid-column:1 / -1}
    .meta-label{display:block;font-size:9.5px;color:var(--muted);margin-bottom:2px}
    .meta-value{display:block;font-size:11px;font-weight:800;color:var(--brand-dark)}
    .managers{margin-top:7px;border-radius:12px;background:var(--soft);padding:6px 10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
    .managers-title{font-size:10px;color:var(--brand-dark);font-weight:800;margin-left:3px}
    .manager{font-size:10px;color:var(--ink);white-space:nowrap;padding-left:9px;border-left:1px solid #c8dada}
    .manager:last-child{border-left:0}
    .manager b{color:var(--brand-dark);margin-left:4px}
    .title-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:11px 0 8px}
    .title{font-size:20px;font-weight:800;color:var(--brand-dark);margin:0}
    .title-badge{border-radius:999px;background:var(--brand);color:#fff;padding:6px 14px;font-size:10px;font-weight:700}
    .customer-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:9px}
    .customer-card{border:1px solid var(--line);border-radius:13px;padding:7px 11px;background:#fff}
    .customer-card .label{font-size:9.5px;color:var(--muted);margin-bottom:3px}
    .customer-card .value{font-size:13px;font-weight:800;color:var(--ink);min-height:19px}
    table{width:100%;border-collapse:separate;border-spacing:0;overflow:hidden;border:1px solid var(--line);border-radius:13px;background:#fff}
    th{background:var(--brand-dark);color:#fff;padding:7px 6px;font-size:10.5px;font-weight:700;text-align:center}
    td{padding:6px 6px;border-top:1px solid var(--line);text-align:center;font-size:11px}
    tbody tr:nth-child(even) td{background:#f8fbfa}
    .index{color:var(--brand);font-weight:800;width:8%}.item-name{text-align:right;padding-right:12px;font-weight:700;width:42%}.num{font-weight:800;color:var(--brand-dark)}
    .empty-row{padding:25px;color:var(--muted)}
    .summary{display:grid;grid-template-columns:1.15fr .85fr;gap:10px;margin-top:9px}
    .words-card,.total-card{border:1px solid var(--line);border-radius:13px;overflow:hidden}
    .words-card{padding:9px 12px;background:var(--soft);line-height:1.7}
    .section-label{font-size:10px;font-weight:800;color:var(--brand-dark);margin-bottom:4px}
    .words{font-size:12px;font-weight:700;color:var(--ink)}
    .status{margin-top:7px;display:inline-flex;border-radius:999px;padding:4px 10px;background:${d ? "#e5f3e9" : "#fff1dc"};color:${d ? "#267044" : "#9a5a0b"};font-weight:800;font-size:10px}
    .note{font-size:10px;color:var(--muted);margin-top:5px}
    .total-card{background:#fff}
    .total-row{display:flex;justify-content:space-between;align-items:center;padding:7px 11px;font-size:11px}
    .total-row + .total-row{border-top:1px solid var(--line)}
    .total-row strong{font-size:12px;color:var(--brand-dark)}
    .total-row.main{background:var(--brand-dark);color:#fff;font-size:13px;font-weight:800}
    .total-row.main strong{color:#fff;font-size:17px}
    .total-row.discount{color:#9a5a0b;background:#fffaf0}
    .total-row.balance{color:${i > 0 ? "#a04336" : "#267044"};font-weight:800;background:${i > 0 ? "#fff5f2" : "#f0faf3"}}
    .signatures{display:grid;grid-template-columns:1fr 1fr;gap:45px;margin:16px 20px 0;text-align:center;color:var(--muted);font-size:10px}
    .signature-line{border-top:1px solid #9daeb0;margin-top:18px;padding-top:4px}
    .footer{position:absolute;bottom:0;right:0;left:0;padding:8px 14mm;background:var(--brand-dark);color:#fff;text-align:center;font-size:11px;font-weight:700;letter-spacing:.1px}
    @media print{body{background:#fff}.page{margin:0;box-shadow:none}}
  </style></head><body><main class="page"><div class="topline"></div><div class="shape"></div><div class="shape2"></div><div class="content">
    <header class="header"><div><div class="identity"><img class="logo" src="${p}" alt="\u0634\u0639\u0627\u0631 \u0627\u0644\u0634\u0631\u0643\u0629" /><div><div class="company">${Pe}</div><div class="address">\u0644\u064A\u0628\u064A\u0627 - \u0637\u0631\u0627\u0628\u0644\u0633 - \u0639\u064A\u0646 \u0632\u0627\u0631\u0629 - \u0628\u062C\u0627\u0646\u0628 \u0634\u064A\u0644 \u0627\u0644\u0628\u0631\u0642\u0627\u0646</div></div></div><div class="managers"><span class="manager"><b>\u0639\u0628\u062F\u0648</b>0913551514</span><span class="manager"><b>\u0645\u062D\u0645\u062F</b>0925881514</span><span class="manager"><b>\u0645\u062D\u0645\u062F</b>0935001514</span></div></div><div class="meta"><div class="meta-card"><span class="meta-label">\u0627\u0644\u062A\u0627\u0631\u064A\u062E</span><span class="meta-value">${Z()}</span></div><div class="meta-card"><span class="meta-label">\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629</span><span class="meta-value">${o}</span></div><div class="meta-card wide"><span class="meta-label">\u062A\u0627\u0631\u064A\u062E \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639</span><span class="meta-value">${Y(e.dateCreated || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F")}</span></div></div></header>
    <section class="customer-grid"><div class="customer-card"><div class="label">\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646</div><div class="value">${Y(e.customerName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F")}</div></div><div class="customer-card"><div class="label">\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639</div><div class="value">${Y(e.location || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F")}</div></div></section>
    <table><thead><tr><th>#</th><th>\u0627\u0644\u0628\u0646\u062F / \u0627\u0644\u0642\u064A\u0627\u0633 \u0627\u0644\u0646\u0647\u0627\u0626\u064A</th><th>\u0627\u0644\u0643\u0645\u064A\u0629</th><th>\u0633\u0639\u0631 \u0627\u0644\u0648\u062D\u062F\u0629</th><th>\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A</th></tr></thead><tbody>${c}</tbody></table>
    <section class="summary"><div class="words-card"><div class="section-label">\u0635\u0627\u0641\u064A \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 \u0628\u0627\u0644\u062D\u0631\u0648\u0641</div><div class="words">${Y(v)} \u0644\u064A\u0628\u064A \u0641\u0642\u0637 \u0644\u0627 \u063A\u064A\u0631</div><div class="status">\u0627\u0644\u062D\u0627\u0644\u0629: ${b}</div></div><div class="total-card"><div class="total-row"><span>\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645</span><strong>${N(t.cost)}</strong></div>${t.waived > 0 ? `<div class="total-row discount"><span>\u0627\u0644\u062E\u0635\u0645</span><strong>\u2212${N(t.waived)}</strong></div>` : ""}<div class="total-row main"><span>\u0635\u0627\u0641\u064A \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629</span><strong>${N(r)}</strong></div><div class="total-row"><span>\u0627\u0644\u0645\u062F\u0641\u0648\u0639</span><strong>${N(t.paid)}</strong></div><div class="total-row balance"><span>${t.surplus > 0 ? "\u0631\u0635\u064A\u062F \u0644\u0644\u0632\u0628\u0648\u0646" : "\u0627\u0644\u0628\u0627\u0642\u064A"}</span><strong>${t.surplus > 0 ? N(t.surplus) : N(i)}</strong></div></div></section>
    <div class="signatures"><div>\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629<div class="signature-line">\u0627\u0644\u062A\u0648\u0642\u064A\u0639</div></div><div>\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0625\u062F\u0627\u0631\u0629<div class="signature-line">\u0627\u0644\u062A\u0648\u0642\u064A\u0639 \u0648\u0627\u0644\u062E\u062A\u0645</div></div></div>
  </div><div class="footer">${Pe} \u2014 \u0634\u0643\u0631\u0627 \u0644\u062A\u0639\u0627\u0645\u0644\u0643\u0645 \u0645\u0639\u0646\u0627</div></main></body></html>`;
    (m.document.open(), m.document.write(u), m.document.close());
    let w = !1;
    const x = () => {
      if (!w) {
        w = !0;
        try {
          (m.focus(), m.print());
        } catch (h) {
          console.error("Print failed:", h);
        }
      }
    };
    ((m.onload = x), window.setTimeout(x, 700));
  }
  function Rt(
    e,
    a,
    { invoices: t = [], projects: r = [], income: i = [] } = {},
  ) {
    const d = e === "supplier",
      b = (f, O) => (f.date || "").localeCompare(O.date || ""),
      v = (f, O = "") => `<td${O ? ` class="${O}"` : ""}>${f}</td>`,
      o = (f, O, C) =>
        `<table><thead><tr>${f.map((q) => `<th>${q}</th>`).join("")}</tr></thead><tbody>${O.length ? O.join("") : `<tr><td colspan="${f.length}" class="empty">${C}</td></tr>`}</tbody></table>`,
      l = (f, O) => `<h3 class="sec">${f}</h3>${O}`,
      c = (f, O, C = "") =>
        `<div class="sum-row ${C}"><span>${f}</span><strong>${O}</strong></div>`;
    let p = "",
      m = "",
      u = 0,
      w = !1;
    if (d) {
      const f = Se(a, t),
        O = [...(a.transactions || [])].sort(b),
        C = new Set(f.rows.map((X) => X.invoice.debtTransactionId)),
        q = O.filter((X) => X.supplierPayment),
        F = O.filter((X) => !X.supplierPayment && !C.has(X.id));
      ((p += l(
        "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0622\u062C\u0644\u0629",
        o(
          [
            "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
            "\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
            "\u0627\u0644\u0646\u0648\u0639",
            "\u0627\u0644\u0645\u0628\u0644\u063A",
            "\u0627\u0644\u0645\u0633\u062F\u062F",
            "\u0627\u0644\u0645\u062A\u0628\u0642\u064A",
          ],
          f.rows.map(
            (X) =>
              `<tr>${v(Y(X.invoice.date || ""))}${v(Y(X.invoice.invoiceNumber || "\u2014"))}${v(Y(X.invoice.type || ""))}${v(N(X.invoice.amount))}${v(N(X.paid), "good")}${v(X.remaining ? N(X.remaining) : "\u0645\u0633\u062F\u062F\u0629", X.remaining ? "bad" : "good")}</tr>`,
          ),
          "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u0648\u0627\u062A\u064A\u0631 \u0622\u062C\u0644\u0629",
        ),
      )),
        (p += l(
          "\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0633\u062F\u0627\u062F",
          o(
            [
              "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
              "\u0627\u0644\u0628\u064A\u0627\u0646",
              "\u0627\u0644\u0645\u0628\u0644\u063A",
            ],
            q.map(
              (X) =>
                `<tr>${v(Y(X.date || ""))}${v(Y(X.note || "\u0633\u062F\u0627\u062F"), "name")}${v(N(X.amount), "good")}</tr>`,
            ),
            "\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0641\u0639\u0627\u062A \u0633\u062F\u0627\u062F",
          ),
        )),
        F.length &&
          (p += l(
            "\u062D\u0631\u0643\u0627\u062A \u064A\u062F\u0648\u064A\u0629",
            o(
              [
                "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
                "\u0627\u0644\u0628\u064A\u0627\u0646",
                "\u0627\u0644\u0646\u0648\u0639",
                "\u0627\u0644\u0645\u0628\u0644\u063A",
              ],
              F.map(
                (X) =>
                  `<tr>${v(Y(X.date || ""))}${v(Y(X.note || ""), "name")}${v(X.type === "debit" ? "\u0632\u064A\u0627\u062F\u0629 \u0639\u0644\u064A\u0646\u0627" : "\u0631\u0635\u064A\u062F \u0644\u0646\u0627 / \u062A\u0633\u0648\u064A\u0629")}${v(N(X.amount), X.type === "debit" ? "bad" : "good")}</tr>`,
              ),
              "",
            ),
          )));
      const U = f.invoiceDebt + f.manualBalance - f.paymentExcess;
      ((u = Math.abs(U)),
        (w = U <= 0),
        (m =
          U > 0
            ? "\u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0644\u0644\u0645\u0648\u0631\u062F (\u0639\u0644\u064A\u0646\u0627)"
            : U < 0
              ? "\u0631\u0635\u064A\u062F \u0644\u0646\u0627 \u0639\u0646\u062F \u0627\u0644\u0645\u0648\u0631\u062F"
              : "\u0627\u0644\u0631\u0635\u064A\u062F"),
        (p += `<div class="summary">${c("\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0622\u062C\u0644\u0629", N(f.totalInvoices))}${c("\u0627\u0644\u0645\u0633\u062F\u062F \u0645\u0646 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631", N(f.invoicePaid), "good")}${c("\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0645\u0646 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631", N(f.invoiceDebt))}${c("\u062D\u0631\u0643\u0627\u062A \u064A\u062F\u0648\u064A\u0629 (\u0639\u0644\u064A\u0646\u0627)", N(f.manualBalance))}${f.paymentExcess > 0 ? c("\u062F\u0641\u0639\u0627\u062A \u0632\u0627\u0626\u062F\u0629 (\u0631\u0635\u064A\u062F \u0644\u0646\u0627)", N(f.paymentExcess), "good") : ""}${c(m, N(u), "main")}</div>`));
    } else {
      const f = [...(a.transactions || [])].sort(b);
      let O = 0;
      const C = f.map(
          (g) => (
            (O +=
              g.type === "debit"
                ? Number(g.amount || 0)
                : -Number(g.amount || 0)),
            `<tr>${v(Y(g.date || ""))}${v(Y(g.note || (g.type === "debit" ? "\u0632\u064A\u0627\u062F\u0629 \u062F\u064A\u0646" : "\u062A\u0633\u062F\u064A\u062F")), "name")}${v(g.type === "debit" ? N(g.amount) : "", "bad")}${v(g.type === "credit" ? N(g.amount) : "", "good")}${v(N(O))}</tr>`
          ),
        ),
        q = we(a),
        F = r.map((g) => ({ p: g, m: Ce(g, i) })),
        U = F.reduce((g, A) => g + A.m.remaining, 0),
        X = F.reduce((g, A) => g + A.m.surplus, 0),
        n = F.map(
          ({ p: g, m: A }) =>
            `<tr>${v(Y(g.location || "\u0628\u062F\u0648\u0646 \u0645\u0648\u0642\u0639"), "name")}${v(Y(g.status || ""))}${v(N(A.cost))}${v(A.waived ? N(A.waived) : "\u2014")}${v(N(A.paid), "good")}${v(A.remaining ? "\u0628\u0627\u0642\u064A " + N(A.remaining) : A.surplus ? "\u0631\u0635\u064A\u062F \u0644\u0647 " + N(A.surplus) : A.advance ? "\u062F\u0641\u0639\u0629 \u0645\u0642\u062F\u0645\u0629 " + N(A.advance) : A.settled ? "\u062E\u0627\u0644\u0635" : "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0643\u064A\u0644", A.remaining ? "bad" : "good")}</tr>`,
        ),
        k = F.flatMap(({ p: g }) => $e(g, i).map((A) => ({ ...A, project: g })))
          .sort(b)
          .map(
            (g) =>
              `<tr>${v(Y(g.date || ""))}${v(Y(g.project.location || g.project.customerName || ""), "name")}${v(Y(g.description || "\u062F\u0641\u0639\u0629"))}${v(N(g.amount), "good")}</tr>`,
          ),
        j = We(a, i),
        I = j.reduce((g, A) => g + Number(A.amount || 0), 0),
        M = j.map(
          (g) =>
            `<tr>${v(Y(g.date || ""))}${v(Y(g.description || "\u062F\u0641\u0639\u0629"), "name")}${v(N(g.amount), "good")}</tr>`,
        );
      ((p += l(
        "\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u064A\u062F\u0648\u064A\u0629",
        o(
          [
            "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
            "\u0627\u0644\u0628\u064A\u0627\u0646",
            "\u0639\u0644\u064A\u0647",
            "\u0644\u0647",
            "\u0627\u0644\u0631\u0635\u064A\u062F",
          ],
          C,
          "\u0644\u0627 \u062A\u0648\u062C\u062F \u062D\u0631\u0643\u0627\u062A \u064A\u062F\u0648\u064A\u0629",
        ),
      )),
        (p += l(
          "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
          o(
            [
              "\u0627\u0644\u0645\u0648\u0642\u0639",
              "\u0627\u0644\u062D\u0627\u0644\u0629",
              "\u0627\u0644\u062A\u0643\u0644\u0641\u0629",
              "\u0627\u0644\u062E\u0635\u0645",
              "\u0627\u0644\u0648\u0627\u0635\u0644",
              "\u0627\u0644\u0645\u0648\u0642\u0641",
            ],
            n,
            "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0631\u062A\u0628\u0637\u0629",
          ),
        )),
        (p += l(
          "\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
          o(
            [
              "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
              "\u0627\u0644\u0645\u0634\u0631\u0648\u0639",
              "\u0627\u0644\u0628\u064A\u0627\u0646",
              "\u0627\u0644\u0645\u0628\u0644\u063A",
            ],
            k,
            "\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0641\u0639\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
          ),
        )),
        (p += l(
          "\u062F\u0641\u0639\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629 (\u0628\u062F\u0648\u0646 \u0645\u0634\u0631\u0648\u0639)",
          o(
            [
              "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
              "\u0627\u0644\u0628\u064A\u0627\u0646",
              "\u0627\u0644\u0645\u0628\u0644\u063A",
            ],
            M,
            "\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0641\u0639\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629",
          ),
        )));
      const s = q + U - X - I;
      ((u = Math.abs(s)),
        (w = s <= 0),
        (m =
          s > 0
            ? "\u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0639\u0644\u0649 \u0627\u0644\u0632\u0628\u0648\u0646"
            : s < 0
              ? "\u0631\u0635\u064A\u062F \u0644\u0644\u0632\u0628\u0648\u0646"
              : "\u0627\u0644\u0631\u0635\u064A\u062F"),
        (p += `<div class="summary">${c("\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u064A\u062F\u0648\u064A", N(q))}${c("\u0628\u0627\u0642\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639", N(U))}${X > 0 ? c("\u0631\u0635\u064A\u062F \u0641\u0627\u0626\u0636 \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0643\u062A\u0645\u0644\u0629 (\u2212)", N(X), "good") : ""}${I > 0 ? c("\u062F\u0641\u0639\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629 (\u2212)", N(I), "good") : ""}${c(m, N(u), "main")}</div>`));
    }
    const x =
        (d
          ? "\u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0645\u0648\u0631\u0651\u062F"
          : "\u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0632\u0628\u0648\u0646") +
        " - " +
        (a.name || ""),
      h = new URL("Earthlog.jpeg", window.location.href).href,
      $ = window.open("", "_blank", "width=900,height=1000");
    if (!$) {
      G(
        "\u064A\u0631\u062C\u0649 \u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0627\u0644\u0646\u0648\u0627\u0641\u0630 \u0627\u0644\u0645\u0646\u0628\u062B\u0642\u0629 \u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0643\u0634\u0641.",
      );
      return;
    }
    const B = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>${Y(x)}</title><style>
    @page{size:A4 portrait;margin:10mm}
    *{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    :root{--ink:#17212b;--muted:#64727d;--brand:#125b5f;--brand-dark:#0b3e42;--gold:#d8a84e;--line:#dce6e7;--soft:#f1f7f6}
    body{margin:0;background:#eef2f1;color:var(--ink);font-family:'Cairo',Arial,Tahoma,sans-serif;font-size:12px}
    .page{width:210mm;margin:0 auto;background:#fff;padding:8mm 12mm 10mm}
    .topline{height:5mm;margin:-8mm -12mm 6mm;background:linear-gradient(90deg,var(--brand-dark),var(--brand),var(--gold))}
    .header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:8px;border-bottom:1px solid var(--line)}
    .identity{display:flex;align-items:center;gap:12px}
    .logo{width:54px;height:54px;border-radius:12px;object-fit:cover}
    .company{font-size:19px;font-weight:800;color:var(--brand-dark)}
    .subtitle{font-size:11px;color:var(--muted);font-weight:600}
    .address{font-size:10px;color:var(--muted);margin-top:3px}
    .meta{font-size:11px;color:var(--muted);text-align:left}
    .meta b{color:var(--brand-dark)}
    .title-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0 6px}
    .title{font-size:19px;font-weight:800;color:var(--brand-dark);margin:0}
    .badge{border-radius:999px;background:var(--brand);color:#fff;padding:5px 14px;font-size:10px;font-weight:700}
    .party{border:1px solid var(--line);border-radius:12px;padding:7px 12px;background:var(--soft);display:flex;gap:24px;flex-wrap:wrap}
    .party span{color:var(--muted);font-size:10px;display:block}
    .party strong{font-size:13px}
    .sec{font-size:13px;color:var(--brand-dark);margin:12px 0 5px}
    table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--line);border-radius:10px;overflow:hidden}
    th{background:var(--brand-dark);color:#fff;padding:6px 5px;font-size:10.5px}
    td{padding:5px;border-top:1px solid var(--line);text-align:center;font-size:11px}
    td.name{text-align:right}
    td.empty{color:var(--muted);padding:12px}
    td.good{color:#267044;font-weight:700}td.bad{color:#a04336;font-weight:700}
    tbody tr:nth-child(even) td{background:#f8fbfa}
    tr{page-break-inside:avoid}
    .summary{margin:14px 0 0 auto;width:62%;border:1px solid var(--line);border-radius:12px;overflow:hidden;page-break-inside:avoid}
    .sum-row{display:flex;justify-content:space-between;padding:6px 11px;font-size:11px}
    .sum-row+.sum-row{border-top:1px solid var(--line)}
    .sum-row.good{color:#267044}
    .sum-row.main{background:${w ? "#267044" : "#a04336"};color:#fff;font-size:13px;font-weight:800}
    .words{margin-top:8px;font-size:11px;font-weight:700;color:var(--ink)}
    .signatures{display:grid;grid-template-columns:1fr 1fr;gap:45px;margin:22px 20px 0;text-align:center;color:var(--muted);font-size:10px;page-break-inside:avoid}
    .signature-line{border-top:1px solid #9daeb0;margin-top:20px;padding-top:4px}
    .footer{margin-top:14px;padding:7px;background:var(--brand-dark);color:#fff;text-align:center;font-size:10.5px;font-weight:700;border-radius:8px}
    @media print{body{background:#fff}.page{margin:0;width:auto;padding:0}.topline{margin:0 0 6mm}}
  </style></head><body><main class="page"><div class="topline"></div>
    <header class="header"><div class="identity"><img class="logo" src="${h}" alt="" /><div><div class="company">${Pe}</div><div class="address">\u0644\u064A\u0628\u064A\u0627 - \u0637\u0631\u0627\u0628\u0644\u0633 - \u0639\u064A\u0646 \u0632\u0627\u0631\u0629 - \u0628\u062C\u0627\u0646\u0628 \u0634\u064A\u0644 \u0627\u0644\u0628\u0631\u0642\u0627\u0646</div></div></div><div class="meta">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0643\u0634\u0641<br><b>${Z()}</b></div></header>
    <div class="title-row"><h1 class="title">${d ? "\u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0645\u0648\u0631\u0651\u062F" : "\u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0632\u0628\u0648\u0646"}</h1><span class="badge">${m}: ${N(u)} \u062F\u064A\u0646\u0627\u0631</span></div>
    <div class="party"><div><span>${d ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0631\u0651\u062F" : "\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646"}</span><strong>${Y(a.name || "")}</strong></div>${a.phone ? `<div><span>\u0627\u0644\u0647\u0627\u062A\u0641</span><strong>${Y(a.phone)}</strong></div>` : ""}</div>
    ${p}
    <div class="words">${m}: ${Y(Fe(u))} \u062F\u064A\u0646\u0627\u0631 \u0644\u064A\u0628\u064A \u0641\u0642\u0637 \u0644\u0627 \u063A\u064A\u0631</div>
    <div class="signatures"><div><div class="signature-line">\u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0645\u062D\u0627\u0633\u0628</div></div><div><div class="signature-line">\u062A\u0648\u0642\u064A\u0639 ${d ? "\u0627\u0644\u0645\u0648\u0631\u0651\u062F" : "\u0627\u0644\u0632\u0628\u0648\u0646"}</div></div></div>
    <div class="footer">${Pe}</div>
  </main></body></html>`;
    ($.document.open(), $.document.write(B), $.document.close());
    let S = !1;
    const T = () => {
      if (!S) {
        S = !0;
        try {
          ($.focus(), $.print());
        } catch (f) {
          console.error("Print failed:", f);
        }
      }
    };
    (($.onload = T), window.setTimeout(T, 700));
  }
  function Xt({
    month: e,
    projects: a = [],
    invoices: t = [],
    expenses: r = [],
    income: i = [],
    customers: d = [],
    suppliers: b = [],
  }) {
    const o = Ie(a, i).filter((F) => re(F.date) === e),
      l = r.filter((F) => re(F.date) === e),
      c = t.filter((F) => re(F.date) === e),
      p = o.reduce((F, U) => F + Number(U.amount || 0), 0),
      m = l.reduce((F, U) => F + Number(U.amount || 0), 0),
      u = c.reduce((F, U) => F + Number(U.amount || 0), 0),
      w = He(t, b, e),
      x = p - m - w,
      h = d.reduce((F, U) => F + Math.max(0, Oe(U, a, i).total), 0),
      $ = b.reduce((F, U) => F + Se(U, t).owed, 0),
      B = new Date(`${e}-01T00:00`).toLocaleDateString("ar-LY", {
        year: "numeric",
        month: "long",
      }),
      S = new URL("Earthlog.jpeg", window.location.href).href,
      T = window.open("", "_blank", "width=900,height=1000");
    if (!T) {
      G(
        "\u064A\u0631\u062C\u0649 \u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0627\u0644\u0646\u0648\u0627\u0641\u0630 \u0627\u0644\u0645\u0646\u0628\u062B\u0642\u0629 \u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u062A\u0642\u0631\u064A\u0631.",
      );
      return;
    }
    const f = (F, U, X = "") =>
        `<div class="summary-row ${X}"><span>${F}</span><strong>${N(U)}</strong></div>`,
      O = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="UTF-8" /><title>\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A \u0627\u0644\u0634\u0647\u0631\u064A - ${Y(B)}</title><style>
    @page{size:A4 portrait;margin:10mm}*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    body{margin:0;background:#eef2f1;color:#17212b;font-family:'Cairo',Arial,Tahoma,sans-serif;font-size:12px}.page{width:210mm;margin:0 auto;background:#fff;padding:8mm 12mm 10mm}.topline{height:5mm;margin:-8mm -12mm 6mm;background:linear-gradient(90deg,#0b3e42,#125b5f,#d8a84e)}
    .header{display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid #dce6e7;padding-bottom:10px}.identity{display:flex;align-items:center;gap:12px}.logo{width:54px;height:54px;border-radius:12px;object-fit:cover}.company{font-size:19px;font-weight:800;color:#0b3e42}.subtitle,.meta,.period{font-size:11px;color:#64727d}.title{font-size:20px;font-weight:800;color:#0b3e42;margin:16px 0 4px}
    .summary{border:1px solid #dce6e7;border-radius:12px;overflow:hidden;margin-bottom:16px}.summary-row{display:flex;justify-content:space-between;padding:8px 12px;border-bottom:1px solid #dce6e7}.summary-row:last-child{border-bottom:0}.summary-row.main{background:#125b5f;color:#fff;font-size:14px}.summary-row.debt{background:#fff5f1;color:#a04336}
    .section-title{font-size:14px;font-weight:800;color:#0b3e42;margin:14px 0 6px}table{width:100%;border-collapse:collapse;border:1px solid #dce6e7}th{background:#0b3e42;color:#fff;padding:7px 5px}td{padding:6px 5px;border-top:1px solid #dce6e7;text-align:center}td.name{text-align:right}tbody tr:nth-child(even) td{background:#f8fbfa}.footer{margin-top:22px;text-align:center;color:#64727d;font-size:10px}@media print{body{background:#fff}.page{width:auto;margin:0;padding:0}.topline{margin:0 0 6mm}}
  </style></head><body><main class="page"><div class="topline"></div><header class="header"><div class="identity"><img class="logo" src="${S}" alt="\u0627\u0644\u0634\u0639\u0627\u0631"/><div><div class="company">${Pe}</div></div></div><div class="meta">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0628\u0627\u0639\u0629<br/><strong>${ut(Le())}</strong></div></header>
    <h1 class="title">\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A \u0627\u0644\u0634\u0647\u0631\u064A</h1><div class="period">\u0639\u0646 \u0634\u0647\u0631 ${Y(B)}</div><section class="summary">${f("\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A", p)}${f("\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641", m)}${f("\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631", u)}${f("\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629 \u0641\u0639\u0644\u064A\u064B\u0627", w)}${f("\u0627\u0644\u0635\u0627\u0641\u064A \u0627\u0644\u0646\u0642\u062F\u064A", x, "main")}${f("\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0633\u062A\u062D\u0642\u0627\u062A\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u0621", h, "debt")}${f("\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646", $, "debt")}</section>
    <div class="section-title">\u0645\u0644\u062E\u0635 \u0627\u0644\u0634\u0647\u0631</div><table><thead><tr><th>\u0627\u0644\u0646\u0648\u0639</th><th>\u0639\u062F\u062F \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A</th><th>\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A</th></tr></thead><tbody><tr><td class="name">\u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A</td><td>${o.length}</td><td>${N(p)}</td></tr><tr><td class="name">\u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641</td><td>${l.length}</td><td>${N(m)}</td></tr><tr><td class="name">\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631</td><td>${c.length}</td><td>${N(u)}</td></tr></tbody></table><div class="footer">\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0622\u0644\u064A\u064B\u0627 \u0645\u0646 \u0646\u0638\u0627\u0645 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A.</div></main></body></html>`;
    (T.document.write(O), T.document.close());
    let C = !1;
    const q = () => {
      if (!C) {
        C = !0;
        try {
          (T.focus(), T.print());
        } catch (F) {
          console.error("Print failed:", F);
        }
      }
    };
    ((T.onload = q), window.setTimeout(q, 700));
  }
  function Ut({ remaining: e, waived: a, onApply: t, onReset: r }) {
    const [i, d] = y(""),
      [b, v] = y("");
    if (e <= 0 && a <= 0) return null;
    const o = () => {
      if (!H(i) || Number(i) > e) {
        G(
          "\u0623\u062F\u062E\u0644 \u0645\u0628\u0644\u063A\u064B\u0627 \u0645\u0648\u062C\u0628\u064B\u0627 \u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0628\u0627\u0642\u064A.",
        );
        return;
      }
      (t(Number(i), b.trim()), d(""), v(""));
    };
    return React.createElement(
      "div",
      {
        className: "rounded-xl border p-3 flex flex-col gap-2",
        style: { borderColor: "var(--card-border)" },
      },
      React.createElement(
        "div",
        {
          className: "text-sm font-medium",
          style: { color: "var(--text-body)" },
        },
        "\u0627\u0644\u062A\u063A\u0627\u0636\u064A \u0639\u0646 \u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u0645\u0628\u0644\u063A",
      ),
      e > 0 &&
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "div",
            { className: "flex gap-2" },
            React.createElement(E, {
              type: "number",
              placeholder: `\u0627\u0644\u0645\u0628\u0644\u063A (\u0627\u0644\u0628\u0627\u0642\u064A ${N(e)})`,
              value: i,
              onChange: (l) => d(l.target.value),
            }),
            React.createElement(E, {
              placeholder:
                "\u0633\u0628\u0628 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
              value: b,
              onChange: (l) => v(l.target.value),
            }),
          ),
          React.createElement(
            "div",
            { className: "flex gap-2 flex-wrap" },
            React.createElement(
              he,
              { onClick: o },
              "\u062A\u063A\u0627\u0636\u064A \u0639\u0646 \u0627\u0644\u0645\u0628\u0644\u063A",
            ),
            React.createElement(
              he,
              { onClick: () => d(String(e)) },
              "\u0643\u0627\u0645\u0644 \u0627\u0644\u0628\u0627\u0642\u064A",
            ),
          ),
        ),
      a > 0 &&
        React.createElement(
          "div",
          {
            className: "flex items-center justify-between text-xs",
            style: { color: "var(--text-muted)" },
          },
          React.createElement(
            "span",
            null,
            "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062A\u063A\u0627\u0636\u0649 \u0639\u0646\u0647: ",
            N(a),
          ),
          React.createElement(
            "button",
            { onClick: r, style: { color: "var(--danger)" } },
            "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u063A\u0627\u0636\u064A",
          ),
        ),
    );
  }
  function Qt({
    project: e,
    onClose: a,
    onSave: t,
    onDelete: r,
    onDeletePayment: i,
    onAddPayment: d,
    customers: b,
    upsertCustomer: v,
    income: o = [],
  }) {
    const [l, c] = y("info"),
      [p, m] = y(e),
      [u, w] = y(!1),
      [x, h] = y(null),
      $ = ye(null),
      B = ye(null);
    be(() => m(e), [e.id]);
    const S = () => {
        ($.current && clearTimeout($.current),
          ($.current = null),
          (B.current = null));
      },
      T = () => {
        const s = B.current;
        (S(), s && t(s));
      };
    be(
      () => () => {
        ($.current && clearTimeout($.current), B.current && t(B.current));
      },
      [],
    );
    const f = (s) => {
        const g = { ...p, ...s };
        (m(g),
          (B.current = g),
          $.current && clearTimeout($.current),
          ($.current = setTimeout(() => {
            const A = B.current;
            ((B.current = null), ($.current = null), A && t(A));
          }, 650)));
      },
      O = () => {
        (T(), a());
      },
      C = () => {
        (S(), r());
      },
      q = Ce(p, o),
      F = $e(p, o),
      U = (s) => {
        const g = { ...p, payments: [s, ...(p.payments || [])] };
        (S(), m(g), d(g, s));
      },
      X = (s) => {
        const g = s.paymentId || s.id,
          A = {
            ...p,
            payments: (p.payments || []).filter(
              (W) => (W.paymentId || W.id) !== g,
            ),
          };
        (S(), m(A), i(s, A), h(null));
      },
      n = (s, g) =>
        f({
          waivedAmount: Math.min(q.cost, Number(p.waivedAmount || 0) + s),
          waiveNote: g || p.waiveNote || "",
        }),
      k =
        q.remaining > 0
          ? "\u0627\u0644\u0628\u0627\u0642\u064A"
          : q.surplus > 0
            ? "\u0631\u0635\u064A\u062F \u0644\u0644\u0632\u0628\u0648\u0646"
            : q.advance > 0
              ? "\u0645\u0642\u062F\u0651\u0645 \u0632\u0627\u0626\u062F"
              : "\u0627\u0644\u062D\u0627\u0644\u0629",
      j =
        q.remaining > 0
          ? N(q.remaining)
          : q.surplus > 0
            ? N(q.surplus)
            : q.advance > 0
              ? N(q.advance)
              : q.settled
                ? "\u062E\u0627\u0644\u0635"
                : "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0643\u064A\u0644",
      I = q.remaining > 0 ? "var(--danger)" : "var(--success)",
      M = q.remaining > 0 ? "var(--warn-bg)" : "var(--good-bg)";
    return React.createElement(
      ce,
      {
        title: `\u0645\u0634\u0631\u0648\u0639 \u2014 ${p.customerName}`,
        onClose: O,
        wide: !0,
      },
      React.createElement(
        "div",
        { className: "flex items-center gap-1.5 mb-4 flex-wrap" },
        [
          {
            k: "info",
            l: "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A",
            icon: "user",
          },
          {
            k: "items",
            l: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0645\u0631\u0633\u0644\u0629",
            icon: "truck",
          },
          {
            k: "measure",
            l: "\u0627\u0644\u0645\u0643\u0627\u064A\u064A\u0644",
            icon: "ruler",
          },
        ].map((s) =>
          React.createElement(
            "button",
            {
              key: s.k,
              onClick: () => c(s.k),
              className:
                "text-xs px-3 py-2 rounded-lg border flex items-center gap-1.5 transition",
              style:
                l === s.k
                  ? {
                      background: "var(--accent)",
                      borderColor: "var(--accent)",
                      color: "white",
                    }
                  : {
                      background: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                      color: "var(--text-body)",
                    },
            },
            React.createElement(D, { name: s.icon, size: 13 }),
            " ",
            s.l,
          ),
        ),
      ),
      l === "info" &&
        React.createElement(
          "div",
          { className: "flex flex-col gap-3" },
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u0627\u0644\u0639\u0645\u064A\u0644",
            ),
            React.createElement(yt, {
              customers: b,
              customerId: p.customerId,
              customerName: p.customerName,
              onSelect: (s) => {
                const g = b.find((A) => A.id === s);
                f({ customerId: s, customerName: g ? g.name : p.customerName });
              },
              onCreateNew: (s) => {
                (v(s), f({ customerId: s.id, customerName: s.name }));
              },
            }),
          ),
          React.createElement(
            "div",
            { className: "grid sm:grid-cols-2 gap-3" },
            React.createElement(
              "div",
              null,
              React.createElement(
                R,
                null,
                "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
              ),
              React.createElement(E, {
                value: p.phone,
                onChange: (s) => f({ phone: s.target.value }),
              }),
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                R,
                null,
                "\u0627\u0644\u0645\u0648\u0642\u0639",
              ),
              React.createElement(E, {
                value: p.location,
                onChange: (s) => f({ location: s.target.value }),
              }),
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                R,
                null,
                "\u0646\u0648\u0639 \u0627\u0644\u0645\u0646\u062A\u062C",
              ),
              React.createElement(
                me,
                {
                  value: p.productType,
                  onChange: (s) => f({ productType: s.target.value }),
                },
                bt.map((s) => React.createElement("option", { key: s }, s)),
              ),
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                R,
                null,
                "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621",
              ),
              React.createElement(E, {
                type: "date",
                value: p.dateCreated || "",
                onChange: (s) => f({ dateCreated: s.target.value }),
              }),
            ),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u0627\u0644\u062D\u0627\u0644\u0629",
            ),
            React.createElement(
              me,
              {
                value: p.status,
                onChange: (s) =>
                  f({
                    status: s.target.value,
                    completedAt:
                      s.target.value === "\u0645\u0643\u062A\u0645\u0644"
                        ? p.completedAt || Z()
                        : null,
                  }),
              },
              ft.map((s) => React.createElement("option", { key: s }, s)),
            ),
            React.createElement(
              "div",
              {
                className: "text-xs mt-1",
                style: { color: "var(--text-muted)" },
              },
              "\u062A\u062A\u062D\u062F\u0651\u062B \u0647\u0630\u0647 \u0627\u0644\u062D\u0627\u0644\u0629 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627: \xAB\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630\xBB \u0639\u0646\u062F \u0623\u0648\u0644 \u062D\u0631\u0643\u0629 \u0628\u0636\u0627\u0639\u0629\u060C \u0648\xAB\u0645\u0643\u062A\u0645\u0644\xBB \u0639\u0646\u062F \u0623\u0648\u0644 \u0643\u064A\u0644 \u2014 \u0648\u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u062F\u064A\u0644\u0647\u0627 \u064A\u062F\u0648\u064A\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u062D\u0627\u062C\u0629.",
            ),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u0645\u0644\u0627\u062D\u0638\u0627\u062A",
            ),
            React.createElement("textarea", {
              value: p.notes,
              onChange: (s) => f({ notes: s.target.value }),
              rows: 2,
              className:
                "w-full rounded-lg border px-3 py-2 text-sm outline-none",
              style: {
                background: "var(--input-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-strong)",
              },
            }),
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm mt-1" },
            React.createElement(
              "div",
              {
                className: "rounded-xl p-3",
                style: { background: "var(--divider)" },
              },
              React.createElement(
                "div",
                { className: "text-xs", style: { color: "var(--text-muted)" } },
                "\u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629",
              ),
              React.createElement(
                "div",
                {
                  className: "font-bold mt-1",
                  style: { color: "var(--text-strong)" },
                },
                N(q.cost),
              ),
            ),
            React.createElement(
              "div",
              {
                className: "rounded-xl p-3",
                style: { background: "var(--good-bg)" },
              },
              React.createElement(
                "div",
                { className: "text-xs", style: { color: "var(--text-muted)" } },
                "\u0627\u0644\u0648\u0627\u0635\u0644",
              ),
              React.createElement(
                "div",
                {
                  className: "font-bold mt-1",
                  style: { color: "var(--success)" },
                },
                N(q.paid),
              ),
            ),
            q.waived > 0 &&
              React.createElement(
                "div",
                {
                  className: "rounded-xl p-3",
                  style: { background: "var(--divider)" },
                },
                React.createElement(
                  "div",
                  {
                    className: "text-xs",
                    style: { color: "var(--text-muted)" },
                  },
                  "\u0645\u062A\u063A\u0627\u0636\u0649 \u0639\u0646\u0647",
                ),
                React.createElement(
                  "div",
                  {
                    className: "font-bold mt-1",
                    style: { color: "var(--text-strong)" },
                  },
                  N(q.waived),
                ),
              ),
            React.createElement(
              "div",
              { className: "rounded-xl p-3", style: { background: M } },
              React.createElement(
                "div",
                { className: "text-xs", style: { color: "var(--text-muted)" } },
                k,
              ),
              React.createElement(
                "div",
                { className: "font-bold mt-1", style: { color: I } },
                j,
              ),
            ),
          ),
          React.createElement(
            "div",
            {
              className: "rounded-xl border p-3 flex flex-col gap-2",
              style: { borderColor: "var(--card-border)" },
            },
            React.createElement(
              "div",
              {
                className: "text-sm font-medium",
                style: { color: "var(--text-body)" },
              },
              "\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
            ),
            F.length === 0
              ? React.createElement(
                  "div",
                  {
                    className: "text-xs",
                    style: { color: "var(--text-muted)" },
                  },
                  "\u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0641\u0639\u0627\u062A \u0645\u0633\u062C\u0651\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639.",
                )
              : F.map((s) => {
                  const g = s.paymentId || s.id;
                  return React.createElement(
                    "div",
                    {
                      key: g,
                      className:
                        "flex items-center justify-between gap-2 py-2 border-b last:border-b-0",
                      style: { borderColor: "var(--divider)" },
                    },
                    React.createElement(
                      "div",
                      { className: "min-w-0" },
                      React.createElement(
                        "div",
                        {
                          className: "text-sm font-medium",
                          style: { color: "var(--text-body)" },
                        },
                        N(s.amount),
                      ),
                      React.createElement(
                        "div",
                        {
                          className: "text-xs",
                          style: { color: "var(--text-muted)" },
                        },
                        s.date ||
                          "\u0628\u062F\u0648\u0646 \u062A\u0627\u0631\u064A\u062E",
                        s.description ? " \xB7 " + s.description : "",
                      ),
                    ),
                    React.createElement(
                      "div",
                      { className: "flex items-center gap-2 shrink-0" },
                      s.includeInIncome === !1
                        ? React.createElement(
                            se,
                            { bg: "var(--divider)", fg: "var(--text-muted)" },
                            "\u063A\u064A\u0631 \u0645\u062D\u062A\u0633\u0628 \u0643\u0640\u0648\u0627\u0631\u062F",
                          )
                        : React.createElement(
                            se,
                            { bg: "var(--good-bg)", fg: "var(--success)" },
                            "\u0645\u062D\u062A\u0633\u0628 \u0643\u0640\u0648\u0627\u0631\u062F",
                          ),
                      x === g
                        ? React.createElement(ge, {
                            label:
                              "\u062D\u0630\u0641 \u0627\u0644\u062F\u0641\u0639\u0629\u061F",
                            onConfirm: () => X(s),
                            onCancel: () => h(null),
                          })
                        : React.createElement(
                            "button",
                            {
                              onClick: () => h(g),
                              className: "text-xs flex items-center gap-1",
                              style: { color: "var(--danger)" },
                            },
                            React.createElement(D, { name: "trash", size: 13 }),
                            " \u062D\u0630\u0641",
                          ),
                    ),
                  );
                }),
          ),
          React.createElement(
            "div",
            { className: "flex gap-2" },
            React.createElement(
              he,
              { onClick: () => Ot(p, o) },
              React.createElement(D, { name: "download", size: 14 }),
              " \u0637\u0628\u0627\u0639\u0629 \u0641\u0627\u062A\u0648\u0631\u0629 \u0627\u0644\u0642\u064A\u0627\u0633",
            ),
          ),
          p.status !== "\u0645\u0643\u062A\u0645\u0644" &&
            React.createElement(
              K,
              {
                full: !0,
                onClick: () =>
                  f({
                    status: "\u0645\u0643\u062A\u0645\u0644",
                    completedAt: Z(),
                  }),
              },
              React.createElement(D, { name: "check", size: 16 }),
              " \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u064A\u062F\u0648\u064A\u064B\u0627",
            ),
          React.createElement(Jt, { project: p, onAdd: U }),
          React.createElement(Ut, {
            remaining: q.remaining,
            waived: q.waived,
            onApply: n,
            onReset: () => f({ waivedAmount: 0, waiveNote: "" }),
          }),
          React.createElement(
            "div",
            {
              className: "pt-3 border-t flex justify-end",
              style: { borderColor: "var(--card-border)" },
            },
            u
              ? React.createElement(ge, {
                  label:
                    "\u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0646\u0647\u0627\u0626\u064A\u064B\u0627\u061F",
                  onConfirm: C,
                  onCancel: () => w(!1),
                })
              : React.createElement(
                  "button",
                  {
                    onClick: () => w(!0),
                    className: "text-xs flex items-center gap-1",
                    style: { color: "var(--danger)" },
                  },
                  React.createElement(D, { name: "trash", size: 13 }),
                  " \u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
                ),
          ),
        ),
      l === "items" && React.createElement(Vt, { project: p, update: f }),
      l === "measure" && React.createElement(Gt, { project: p, update: f }),
    );
  }
  function Jt({ project: e, onAdd: a }) {
    const [t, r] = y(""),
      [i, d] = y(""),
      [b, v] = y(Le()),
      [o, l] = y(!0);
    return React.createElement(
      "div",
      {
        className: "rounded-xl border p-3 flex flex-col gap-2",
        style: { borderColor: "var(--card-border)" },
      },
      React.createElement(
        "div",
        {
          className: "text-sm font-medium flex items-center gap-1.5",
          style: { color: "var(--text-body)" },
        },
        React.createElement(D, { name: "wallet", size: 14 }),
        " \u062A\u0633\u062C\u064A\u0644 \u0648\u0627\u0631\u062F \u0645\u0646 \u0627\u0644\u0632\u0628\u0648\u0646",
      ),
      React.createElement(
        "div",
        { className: "flex gap-2" },
        React.createElement(E, {
          type: "number",
          placeholder:
            "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u0633\u062A\u0644\u0645",
          value: t,
          onChange: (p) => r(p.target.value),
        }),
        React.createElement(E, {
          placeholder:
            "\u0645\u0644\u0627\u062D\u0638\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
          value: i,
          onChange: (p) => d(p.target.value),
        }),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0633\u0627\u0639\u0629",
        ),
        React.createElement(E, {
          type: "datetime-local",
          value: b,
          onChange: (p) => v(p.target.value),
        }),
      ),
      React.createElement(
        "label",
        {
          className: "flex items-center gap-2 text-xs",
          style: { color: "var(--text-body)" },
        },
        React.createElement("input", {
          type: "checkbox",
          checked: o,
          onChange: (p) => l(p.target.checked),
        }),
        " \u0627\u062D\u062A\u0633\u0627\u0628 \u0627\u0644\u062F\u0641\u0639\u0629 \u0636\u0645\u0646 \u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
      ),
      React.createElement(
        he,
        {
          onClick: () => {
            if (!H(t)) {
              G(
                "\u0623\u062F\u062E\u0644 \u0645\u0628\u0644\u063A\u064B\u0627 \u0645\u0648\u062C\u0628\u064B\u0627.",
              );
              return;
            }
            (a({
              id: ne(),
              date: b,
              amount: Number(t),
              includeInIncome: o,
              description:
                i.trim() ||
                "\u062F\u0641\u0639\u0629 \u0645\u0646 \u0627\u0644\u0632\u0628\u0648\u0646",
            }),
              r(""),
              d(""),
              v(Le()),
              l(!0));
          },
        },
        React.createElement(D, { name: "plus", size: 14 }),
        " \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062F\u0641\u0639\u0629",
      ),
    );
  }
  function Vt({ project: e, update: a }) {
    const [t, r] = y("\u0625\u0631\u0633\u0627\u0644"),
      [i, d] = y(""),
      [b, v] = y(""),
      [o, l] = y("\u0643\u064A\u0633"),
      [c, p] = y(null),
      m = e.items || [],
      u = () => {
        if (!i.trim() || !H(b)) {
          G(
            "\u0623\u062F\u062E\u0644 \u0643\u0645\u064A\u0629 \u0645\u0648\u062C\u0628\u0629.",
          );
          return;
        }
        const $ = {
          items: [
            {
              id: ne(),
              date: Z(),
              direction: t,
              name: i.trim(),
              quantity: Number(b),
              unit: o,
            },
            ...m,
          ],
        };
        (e.status === "\u062C\u062F\u064A\u062F" &&
          ($.status =
            "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630"),
          a($),
          d(""),
          v(""));
      },
      w = (h) => {
        (a({ items: m.filter(($) => $.id !== h) }), p(null));
      },
      x = {
        إرسال: { icon: "truck", fg: "var(--success)" },
        مرتجع: { icon: "rotate", fg: "var(--danger)" },
        إضافة: { icon: "plus", fg: "var(--warning)" },
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-4" },
      React.createElement(
        "div",
        {
          className: "rounded-xl border p-3 flex flex-col gap-2",
          style: { borderColor: "var(--card-border)" },
        },
        React.createElement(
          "div",
          { className: "grid grid-cols-3 gap-2" },
          React.createElement(
            me,
            { value: t, onChange: (h) => r(h.target.value) },
            React.createElement(
              "option",
              { value: "\u0625\u0631\u0633\u0627\u0644" },
              "\u0625\u0631\u0633\u0627\u0644",
            ),
            React.createElement(
              "option",
              { value: "\u0645\u0631\u062A\u062C\u0639" },
              "\u0645\u0631\u062A\u062C\u0639",
            ),
            React.createElement(
              "option",
              { value: "\u0625\u0636\u0627\u0641\u0629" },
              "\u0625\u0636\u0627\u0641\u0629",
            ),
          ),
          React.createElement(E, {
            list: "item-suggestions",
            placeholder:
              "\u0627\u0633\u0645 \u0627\u0644\u0645\u0627\u062F\u0629",
            value: i,
            onChange: (h) => d(h.target.value),
          }),
          React.createElement(
            me,
            { value: o, onChange: (h) => l(h.target.value) },
            React.createElement("option", null, "\u0643\u064A\u0633"),
            React.createElement("option", null, "\u0644\u062A\u0631"),
            React.createElement("option", null, "\u0645"),
            React.createElement("option", null, "\u0642\u0637\u0639\u0629"),
          ),
        ),
        React.createElement(
          "datalist",
          { id: "item-suggestions" },
          xt.map((h) => React.createElement("option", { key: h, value: h })),
        ),
        React.createElement(
          "div",
          { className: "flex gap-2" },
          React.createElement(E, {
            type: "number",
            placeholder: "\u0627\u0644\u0643\u0645\u064A\u0629",
            value: b,
            onChange: (h) => v(h.target.value),
          }),
          React.createElement(
            K,
            { onClick: u },
            React.createElement(D, { name: "plus", size: 16 }),
            " \u062A\u0633\u062C\u064A\u0644",
          ),
        ),
      ),
      m.length === 0
        ? React.createElement(ae, {
            icon: "truck",
            title:
              "\u0644\u0627 \u062A\u0648\u062C\u062F \u062D\u0631\u0643\u0627\u062A \u0628\u0636\u0627\u0639\u0629 \u0645\u0633\u062C\u0651\u0644\u0629",
          })
        : React.createElement(
            "div",
            {
              className: "flex flex-col divide-y",
              style: { borderColor: "var(--divider)" },
            },
            m.map((h) => {
              const $ = x[h.direction] || x.إرسال;
              return React.createElement(
                "div",
                {
                  key: h.id,
                  className: "flex items-center justify-between py-2.5 gap-2",
                  style: { borderColor: "var(--divider)" },
                },
                React.createElement(
                  "div",
                  { className: "flex items-center gap-2 min-w-0" },
                  React.createElement(D, {
                    name: $.icon,
                    size: 14,
                    color: $.fg,
                  }),
                  React.createElement(
                    "div",
                    { className: "min-w-0" },
                    React.createElement(
                      "div",
                      {
                        className: "text-sm truncate",
                        style: { color: "var(--text-body)" },
                      },
                      h.name,
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "text-xs",
                        style: { color: "var(--text-muted)" },
                      },
                      h.direction,
                      " \xB7 ",
                      h.date,
                    ),
                  ),
                ),
                React.createElement(
                  "div",
                  { className: "flex items-center gap-3 shrink-0" },
                  React.createElement(
                    "span",
                    {
                      className: "text-sm font-medium",
                      style: { color: "var(--text-body)" },
                    },
                    N(h.quantity),
                    " ",
                    h.unit,
                  ),
                  c === h.id
                    ? React.createElement(ge, {
                        onConfirm: () => w(h.id),
                        onCancel: () => p(null),
                      })
                    : React.createElement(
                        "button",
                        {
                          onClick: () => p(h.id),
                          style: { color: "var(--text-muted)" },
                        },
                        React.createElement(D, { name: "trash", size: 14 }),
                      ),
                ),
              );
            }),
          ),
    );
  }
  function Gt({ project: e, update: a }) {
    const [t, r] = y(""),
      [i, d] = y([
        { label: "\u062A\u0643\u0633", quantity: "", unitPrice: "", total: "" },
      ]),
      [b, v] = y(null),
      [o, l] = y(null),
      c = e.measurements || [],
      p = (S, T) => d((f) => f.map((O, C) => (C === S ? pt(O, T) : O))),
      m = () =>
        d((S) => [...S, { label: "", quantity: "", unitPrice: "", total: "" }]),
      u = (S) => d((T) => T.filter((f, O) => O !== S)),
      w = vt(i, "label"),
      x = () => {
        if (!t.trim()) {
          G(
            "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0645\u0644.",
          );
          return;
        }
        const S = i
          .filter(
            (C) =>
              C.label.trim() &&
              H(C.total) &&
              pe(C.quantity || 0) &&
              pe(C.unitPrice || 0),
          )
          .map((C) => ({
            ...C,
            quantity: Number(C.quantity || 0),
            unitPrice: Number(C.unitPrice || 0),
            total: Number(C.total),
          }));
        if (S.length === 0) {
          G(
            "\u0623\u062F\u062E\u0644 \u0628\u0646\u0648\u062F \u0642\u064A\u0627\u0633 \u0635\u062D\u064A\u062D\u0629 \u0648\u0628\u0642\u064A\u0645 \u063A\u064A\u0631 \u0633\u0627\u0644\u0628\u0629.",
          );
          return;
        }
        const T = c.find((C) => C.id === o),
          f = {
            id: (T == null ? void 0 : T.id) || ne(),
            date: (T == null ? void 0 : T.date) || Z(),
            workerName: t.trim(),
            entries: S,
            totalAmount: S.reduce((C, q) => C + q.total, 0),
          },
          O = {
            measurements: T ? c.map((C) => (C.id === o ? f : C)) : [f, ...c],
          };
        (!T &&
          e.status !== "\u0645\u0643\u062A\u0645\u0644" &&
          ((O.status = "\u0645\u0643\u062A\u0645\u0644"),
          (O.completedAt = e.completedAt || Z())),
          a(O),
          r(""),
          d([
            {
              label: "\u062A\u0643\u0633",
              quantity: "",
              unitPrice: "",
              total: "",
            },
          ]),
          l(null));
      },
      h = (S) => {
        (l(S.id),
          r(S.workerName || ""),
          d(
            (S.entries || []).map((T) => {
              var f, O, C;
              return {
                ...T,
                quantity: String((f = T.quantity) != null ? f : ""),
                unitPrice: String((O = T.unitPrice) != null ? O : ""),
                total: String((C = T.total) != null ? C : ""),
              };
            }),
          ),
          v(null));
      },
      $ = () => {
        (l(null),
          r(""),
          d([
            {
              label: "\u062A\u0643\u0633",
              quantity: "",
              unitPrice: "",
              total: "",
            },
          ]));
      },
      B = (S) => {
        (a({ measurements: c.filter((T) => T.id !== S) }), v(null));
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-4" },
      React.createElement(
        "div",
        {
          className: "rounded-xl border p-3 flex flex-col gap-3",
          style: { borderColor: "var(--card-border)" },
        },
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0645\u0644 (\u0627\u0644\u0630\u064A \u0643\u0627\u0644 \u0627\u0644\u0639\u0645\u0644)",
          ),
          React.createElement(E, {
            value: t,
            onChange: (S) => r(S.target.value),
            placeholder:
              "\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0645\u0644",
          }),
        ),
        React.createElement(
          "div",
          { className: "flex flex-col gap-2" },
          i.map((S, T) =>
            React.createElement(
              "div",
              {
                key: T,
                className:
                  "grid grid-cols-2 sm:grid-cols-12 gap-1.5 items-center",
              },
              React.createElement(
                "div",
                { className: "col-span-2 sm:col-span-3 min-w-0" },
                React.createElement(E, {
                  list: "measure-suggestions",
                  placeholder: "\u0627\u0644\u0628\u0646\u062F",
                  value: S.label,
                  onChange: (f) => p(T, { label: f.target.value }),
                }),
              ),
              React.createElement(
                "div",
                { className: "col-span-1 sm:col-span-3 min-w-0" },
                React.createElement(E, {
                  type: "number",
                  placeholder: "\u0627\u0644\u0643\u0645\u064A\u0629 (\u0645)",
                  value: S.quantity,
                  onChange: (f) => p(T, { quantity: f.target.value }),
                }),
              ),
              React.createElement(
                "div",
                { className: "col-span-1 sm:col-span-3 min-w-0" },
                React.createElement(E, {
                  type: "number",
                  placeholder:
                    "\u0633\u0639\u0631 \u0627\u0644\u0648\u062D\u062F\u0629",
                  value: S.unitPrice,
                  onChange: (f) => p(T, { unitPrice: f.target.value }),
                }),
              ),
              React.createElement(
                "div",
                { className: "col-span-1 sm:col-span-2 min-w-0" },
                React.createElement(E, {
                  type: "number",
                  placeholder: "\u0627\u0644\u0645\u062C\u0645\u0648\u0639",
                  value: S.total,
                  onChange: (f) => p(T, { total: f.target.value }),
                }),
              ),
              React.createElement(
                "div",
                { className: "col-span-2 sm:col-span-1 flex justify-center" },
                i.length > 1 &&
                  React.createElement(
                    "button",
                    {
                      onClick: () => u(T),
                      style: { color: "var(--text-muted)" },
                    },
                    React.createElement(D, { name: "x", size: 14 }),
                  ),
              ),
            ),
          ),
          React.createElement(
            "datalist",
            { id: "measure-suggestions" },
            [
              "\u062A\u0643\u0633",
              "\u0633\u064A\u0644\u064A\u0643\u0627\u062A",
              "\u0645\u0631\u0645\u0627\u062A",
              "\u062C\u0648\u062A\u0646",
              "\u0646\u0627\u064A\u0644\u0648",
            ].map((S) => React.createElement("option", { key: S, value: S })),
          ),
          React.createElement(
            "button",
            {
              onClick: m,
              className: "text-xs flex items-center gap-1 self-start",
              style: { color: "var(--accent)" },
            },
            React.createElement(D, { name: "plus", size: 12 }),
            " \u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062F",
          ),
        ),
        React.createElement(
          "div",
          {
            className: "flex items-center justify-between border-t pt-2",
            style: { borderColor: "var(--divider)" },
          },
          React.createElement(
            "span",
            { className: "text-sm", style: { color: "var(--text-muted)" } },
            "\u0645\u062C\u0645\u0648\u0639 \u0647\u0630\u0627 \u0627\u0644\u0643\u064A\u0644",
          ),
          React.createElement(
            "span",
            { className: "font-bold", style: { color: "var(--text-strong)" } },
            N(w),
          ),
        ),
        React.createElement(
          "div",
          { className: "flex gap-2" },
          React.createElement(
            K,
            { onClick: x, full: !0 },
            React.createElement(D, { name: o ? "check" : "plus", size: 16 }),
            " ",
            o
              ? "\u062D\u0641\u0638 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0643\u064A\u0644"
              : "\u062D\u0641\u0638 \u0627\u0644\u0643\u064A\u0644",
          ),
          o &&
            React.createElement(
              he,
              { onClick: $ },
              "\u0625\u0644\u063A\u0627\u0621",
            ),
        ),
      ),
      c.length === 0
        ? React.createElement(ae, {
            icon: "ruler",
            title:
              "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0643\u0627\u064A\u064A\u0644 \u0645\u0633\u062C\u0651\u0644\u0629 \u0628\u0639\u062F",
          })
        : React.createElement(
            "div",
            { className: "flex flex-col gap-2" },
            c.map((S) =>
              React.createElement(
                "div",
                {
                  key: S.id,
                  className: "rounded-xl border p-3",
                  style: { borderColor: "var(--card-border)" },
                },
                React.createElement(
                  "div",
                  { className: "flex items-center justify-between mb-2" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "text-sm font-medium flex items-center gap-1.5",
                      style: { color: "var(--text-body)" },
                    },
                    React.createElement(D, { name: "user", size: 13 }),
                    " ",
                    S.workerName,
                    React.createElement(
                      "span",
                      { style: { color: "var(--text-muted)" } },
                      "\xB7",
                    ),
                    React.createElement(
                      "span",
                      {
                        className: "font-normal flex items-center gap-1",
                        style: { color: "var(--text-muted)" },
                      },
                      React.createElement(D, { name: "calendar", size: 11 }),
                      " ",
                      S.date,
                    ),
                  ),
                  b === S.id
                    ? React.createElement(ge, {
                        onConfirm: () => B(S.id),
                        onCancel: () => v(null),
                      })
                    : React.createElement(
                        "div",
                        { className: "flex items-center gap-3" },
                        React.createElement(
                          "button",
                          {
                            onClick: () => h(S),
                            className: "text-xs",
                            style: { color: "var(--accent)" },
                          },
                          "\u062A\u0639\u062F\u064A\u0644",
                        ),
                        React.createElement(
                          "button",
                          {
                            onClick: () => v(S.id),
                            style: { color: "var(--text-muted)" },
                          },
                          React.createElement(D, { name: "trash", size: 14 }),
                        ),
                      ),
                ),
                React.createElement(
                  "div",
                  { className: "flex flex-col gap-1" },
                  S.entries.map((T, f) =>
                    React.createElement(
                      "div",
                      {
                        key: f,
                        className: "flex items-center justify-between text-xs",
                        style: { color: "var(--text-muted)" },
                      },
                      React.createElement(
                        "span",
                        null,
                        T.label,
                        " ",
                        T.quantity
                          ? `(${N(T.quantity)} \xD7 ${N(T.unitPrice)})`
                          : "",
                      ),
                      React.createElement(
                        "span",
                        {
                          className: "font-medium",
                          style: { color: "var(--text-body)" },
                        },
                        N(T.total),
                      ),
                    ),
                  ),
                ),
                React.createElement(
                  "div",
                  {
                    className:
                      "flex items-center justify-between border-t mt-2 pt-2 text-sm",
                    style: { borderColor: "var(--divider)" },
                  },
                  React.createElement(
                    "span",
                    { style: { color: "var(--text-muted)" } },
                    "\u0627\u0644\u0645\u062C\u0645\u0648\u0639",
                  ),
                  React.createElement(
                    "span",
                    {
                      className: "font-bold",
                      style: { color: "var(--text-strong)" },
                    },
                    N(S.totalAmount),
                  ),
                ),
              ),
            ),
          ),
    );
  }
  function Wt({
    invoices: e,
    projects: a,
    suppliers: t,
    transact: r,
    remove: i,
  }) {
    const [d, b] = y(!1),
      [v, o] = y(null),
      [l, c] = y("\u0627\u0644\u0643\u0644"),
      [p, m] = y(""),
      [u, w] = y(""),
      [x, h] = y(""),
      [$, B] = y(null),
      [S, T] = y(null),
      f = oe(p),
      O = oe(u),
      C = e.filter((n) => {
        const k = l === "\u0627\u0644\u0643\u0644" || n.type === l,
          j = !x || re(n.date) === x,
          I = !f || oe(n.supplierName).includes(f),
          M = !O || oe(n.invoiceNumber).includes(O);
        return k && j && I && M;
      }),
      q = C.reduce((n, k) => n + Number(k.amount || 0), 0),
      F = [...C].sort((n, k) => (k.date || "").localeCompare(n.date || "")),
      U = async (n) => {
        const k = [],
          j = [{ collection: "invoices", id: n.id }];
        if (n.supplierId && n.debtTransactionId) {
          const I = t.find((M) => M.id === n.supplierId);
          I &&
            k.push({
              collection: "suppliers",
              record: {
                ...I,
                transactions: (I.transactions || []).filter(
                  (M) => M.id !== n.debtTransactionId,
                ),
              },
            });
        }
        await r({ upserts: k, deletes: j });
      },
      X = async (n) => {
        var I;
        const k = [{ collection: "invoices", record: n }];
        if (
          v != null &&
          v.supplierId &&
          v.debtTransactionId &&
          (v.supplierId !== n.supplierId || !n.debtTransactionId)
        ) {
          const M = t.find((s) => s.id === v.supplierId);
          M &&
            k.push({
              collection: "suppliers",
              record: {
                ...M,
                transactions: (M.transactions || []).filter(
                  (s) => s.id !== v.debtTransactionId,
                ),
              },
            });
        }
        if (n.supplierId && n.debtTransactionId) {
          const M = t.find((s) => s.id === n.supplierId);
          if (M) {
            const s = {
                id: n.debtTransactionId,
                date: n.date,
                type: "debit",
                amount: n.amount,
                note:
                  "\u0641\u0627\u062A\u0648\u0631\u0629 " +
                  (n.invoiceNumber ? "#" + n.invoiceNumber : n.type),
              },
              g =
                ((I = k.find(
                  (A) => A.collection === "suppliers" && A.record.id === M.id,
                )) == null
                  ? void 0
                  : I.record) || M;
            k.push({ collection: "suppliers", record: $t(g, s) });
          }
        }
        const j = await r({ upserts: k });
        return (j && o(null), j);
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between flex-wrap gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            {
              className: "text-xl font-bold",
              style: {
                fontFamily: "'El Messiri', sans-serif",
                color: "var(--text-strong)",
              },
            },
            "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",
          ),
          React.createElement(
            "p",
            {
              className: "text-sm mt-0.5",
              style: { color: "var(--text-muted)" },
            },
            "\u0645\u0648\u0627\u062F \u062E\u0627\u0645\u060C \u0645\u0648\u0627\u062F \u0628\u0646\u0627\u0621\u060C \u0643\u0647\u0631\u0628\u0627\u0621 \u0648\u063A\u064A\u0631\u0647\u0627 \u2014 \u0645\u0639 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0628\u0646\u0648\u062F",
          ),
        ),
        React.createElement(
          K,
          { onClick: () => b(!0) },
          React.createElement(D, { name: "plus", size: 16 }),
          " \u0641\u0627\u062A\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629",
        ),
      ),
      React.createElement(
        "div",
        { className: "flex items-center gap-3 flex-wrap" },
        React.createElement(
          "div",
          { className: "flex gap-1.5 flex-wrap" },
          ["\u0627\u0644\u0643\u0644", ...De].map((n) =>
            React.createElement(
              "button",
              {
                key: n,
                onClick: () => c(n),
                className: "text-xs px-3 py-2 rounded-lg border transition",
                style:
                  l === n
                    ? {
                        background: "var(--accent)",
                        borderColor: "var(--accent)",
                        color: "white",
                      }
                    : {
                        background: "var(--card-bg)",
                        borderColor: "var(--card-border)",
                        color: "var(--text-body)",
                      },
              },
              n,
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "relative min-w-[180px] flex-1" },
          React.createElement(
            "span",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2",
              style: { color: "var(--text-muted)" },
            },
            React.createElement(D, { name: "search", size: 15 }),
          ),
          React.createElement(E, {
            value: p,
            onChange: (n) => m(n.target.value),
            placeholder:
              "\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0631\u062F...",
            className: "pr-9",
          }),
        ),
        React.createElement(
          "div",
          { className: "relative min-w-[150px] flex-1" },
          React.createElement(
            "span",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2",
              style: { color: "var(--text-muted)" },
            },
            "#",
          ),
          React.createElement(E, {
            value: u,
            onChange: (n) => w(n.target.value),
            placeholder:
              "\u0628\u062D\u062B \u0628\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629...",
            className: "pr-8",
          }),
        ),
        React.createElement(
          "div",
          { className: "min-w-[150px] flex-1" },
          React.createElement(E, {
            type: "month",
            value: x,
            onChange: (n) => h(n.target.value),
            "aria-label":
              "\u0641\u0644\u062A\u0631\u0629 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u062D\u0633\u0628 \u0627\u0644\u0634\u0647\u0631",
          }),
        ),
        React.createElement(
          "div",
          {
            className: "mr-auto rounded-lg px-4 py-2 text-sm",
            style: { background: "var(--divider)" },
          },
          React.createElement(
            "span",
            { className: "ml-1", style: { color: "var(--text-muted)" } },
            "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A:",
          ),
          React.createElement(
            "span",
            { className: "font-bold", style: { color: "var(--text-strong)" } },
            N(q),
          ),
        ),
      ),
      F.length === 0
        ? React.createElement(ae, {
            icon: "receipt",
            title:
              "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u0648\u0627\u062A\u064A\u0631",
            sub: "\u0623\u0636\u0641 \u0623\u0648\u0644 \u0641\u0627\u062A\u0648\u0631\u0629 \u0644\u062A\u0628\u062F\u0623",
          })
        : React.createElement(
            "div",
            {
              className: "rounded-2xl border overflow-hidden",
              style: {
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              },
            },
            React.createElement(
              "div",
              {
                className: "flex flex-col divide-y",
                style: { borderColor: "var(--divider)" },
              },
              F.map((n) => {
                var k, j;
                return React.createElement(
                  "div",
                  { key: n.id, style: { borderColor: "var(--divider)" } },
                  React.createElement(
                    "button",
                    {
                      onClick: () => T(S === n.id ? null : n.id),
                      className:
                        "w-full flex items-center justify-between px-4 py-3 gap-2 text-right",
                    },
                    React.createElement(
                      "div",
                      { className: "min-w-0" },
                      React.createElement(
                        "div",
                        {
                          className:
                            "text-sm font-medium truncate flex items-center gap-1.5",
                          style: { color: "var(--text-body)" },
                        },
                        n.supplierName ||
                          "\u0628\u062F\u0648\u0646 \u0627\u0633\u0645 \u0645\u0648\u0631\u0651\u062F",
                        " ",
                        n.invoiceNumber &&
                          React.createElement(
                            "span",
                            {
                              className: "text-xs font-normal",
                              style: { color: "var(--text-muted)" },
                            },
                            "#",
                            n.invoiceNumber,
                          ),
                      ),
                      React.createElement(
                        "div",
                        {
                          className:
                            "text-xs flex items-center gap-1.5 mt-0.5 flex-wrap",
                          style: { color: "var(--text-muted)" },
                        },
                        React.createElement(
                          se,
                          { bg: "var(--divider)", fg: "var(--warning)" },
                          n.type,
                        ),
                        n.date,
                        n.projectId &&
                          React.createElement(
                            "span",
                            { style: { color: "var(--accent)" } },
                            "\xB7 ",
                            ((k = a.find((I) => I.id === n.projectId)) == null
                              ? void 0
                              : k.customerName) || "",
                          ),
                        (n.items || []).length > 0 &&
                          React.createElement(
                            "span",
                            null,
                            "\xB7 ",
                            n.items.length,
                            " \u0628\u0646\u062F",
                          ),
                      ),
                    ),
                    React.createElement(
                      "span",
                      {
                        className: "font-semibold shrink-0",
                        style: { color: "var(--text-strong)" },
                      },
                      N(n.amount),
                    ),
                  ),
                  S === n.id &&
                    React.createElement(
                      "div",
                      { className: "px-4 pb-3 flex flex-col gap-2" },
                      n.description &&
                        React.createElement(
                          "div",
                          {
                            className: "text-xs",
                            style: { color: "var(--text-muted)" },
                          },
                          n.description,
                        ),
                      Number(n.discountAmount || 0) > 0 &&
                        React.createElement(
                          "div",
                          {
                            className:
                              "rounded-lg px-3 py-2 text-xs flex flex-wrap gap-x-4 gap-y-1",
                            style: {
                              background: "var(--divider)",
                              color: "var(--text-body)",
                            },
                          },
                          React.createElement(
                            "span",
                            null,
                            "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645: ",
                            N(
                              (j = n.grossAmount) != null
                                ? j
                                : Number(n.amount || 0) +
                                    Number(n.discountAmount || 0),
                            ),
                          ),
                          React.createElement(
                            "span",
                            { style: { color: "var(--warning)" } },
                            "\u0627\u0644\u062E\u0635\u0645: \u2212",
                            N(n.discountAmount),
                          ),
                          React.createElement(
                            "strong",
                            { style: { color: "var(--text-strong)" } },
                            "\u0627\u0644\u0635\u0627\u0641\u064A: ",
                            N(n.amount),
                          ),
                        ),
                      (n.items || []).length > 0 &&
                        React.createElement(
                          "div",
                          {
                            className: "rounded-lg p-2.5 flex flex-col gap-1",
                            style: { background: "var(--divider)" },
                          },
                          n.items.map((I, M) =>
                            React.createElement(
                              "div",
                              {
                                key: M,
                                className:
                                  "flex items-center justify-between text-xs",
                                style: { color: "var(--text-body)" },
                              },
                              React.createElement(
                                "span",
                                null,
                                I.name,
                                " ",
                                I.quantity
                                  ? `(${N(I.quantity)} ${I.unit || ""} \xD7 ${N(I.unitPrice)})`
                                  : "",
                              ),
                              React.createElement(
                                "span",
                                { className: "font-medium" },
                                N(I.total),
                              ),
                            ),
                          ),
                        ),
                      React.createElement(
                        "div",
                        { className: "flex justify-end" },
                        $ === n.id
                          ? React.createElement(ge, {
                              onConfirm: () => {
                                (U(n), B(null));
                              },
                              onCancel: () => B(null),
                            })
                          : React.createElement(
                              "div",
                              { className: "flex items-center gap-3" },
                              React.createElement(
                                "button",
                                {
                                  onClick: () => o(n),
                                  className: "text-xs",
                                  style: { color: "var(--accent)" },
                                },
                                "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
                              ),
                              React.createElement(
                                "button",
                                {
                                  onClick: () => B(n.id),
                                  className: "text-xs flex items-center gap-1",
                                  style: { color: "var(--danger)" },
                                },
                                React.createElement(D, {
                                  name: "trash",
                                  size: 13,
                                }),
                                " \u062D\u0630\u0641 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
                              ),
                            ),
                      ),
                    ),
                );
              }),
            ),
          ),
      d &&
        React.createElement(
          ce,
          {
            title:
              "\u0641\u0627\u062A\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629",
            onClose: () => b(!1),
            wide: !0,
          },
          React.createElement(rt, {
            projects: a,
            suppliers: t,
            onAdd: async (n) => {
              (await X(n)) && b(!1);
            },
          }),
        ),
      v &&
        React.createElement(
          ce,
          {
            title:
              "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
            onClose: () => o(null),
            wide: !0,
          },
          React.createElement(rt, {
            initialInvoice: v,
            projects: a,
            suppliers: t,
            upsert,
            onAdd: X,
          }),
        ),
    );
  }
  function rt({
    onAdd: e,
    projects: a,
    suppliers: t,
    initialInvoice: r = null,
  }) {
    var W, P;
    const [i, d] = y((r == null ? void 0 : r.invoiceNumber) || ""),
      [b, v] = y((r == null ? void 0 : r.type) || De[0]),
      [o, l] = y((r == null ? void 0 : r.supplierId) || ""),
      [c, p] = y((r == null ? void 0 : r.supplierName) || ""),
      m = r
        ? Number(
            (W = r.grossAmount) != null
              ? W
              : Number(r.amount || 0) + Number(r.discountAmount || 0),
          )
        : 0,
      [u, w] = y(m ? String(m) : ""),
      [x, h] = y(r != null && r.discountAmount ? String(r.discountAmount) : ""),
      [$, B] = y((r == null ? void 0 : r.date) || Z()),
      [S, T] = y((r == null ? void 0 : r.description) || ""),
      [f, O] = y((r == null ? void 0 : r.projectId) || ""),
      [C, q] = y(!!(r != null && r.debtTransactionId)),
      [F, U] = y(
        (P = r == null ? void 0 : r.items) != null && P.length
          ? r.items
          : [
              {
                name: "",
                quantity: "",
                unit: "\u0642\u0637\u0639\u0629",
                unitPrice: "",
                total: "",
              },
            ],
      ),
      X = (L, Q) => U((ee) => ee.map((V, ue) => (ue === L ? pt(V, Q) : V))),
      n = () =>
        U((L) => [
          ...L,
          {
            name: "",
            quantity: "",
            unit: "\u0642\u0637\u0639\u0629",
            unitPrice: "",
            total: "",
          },
        ]),
      k = (L) => U((Q) => Q.filter((ee, V) => V !== L)),
      j = vt(F, "name"),
      I = j > 0 ? j : Number(u || 0),
      M = Number(x || 0),
      s = kt(I, M),
      g = s.netAmount;
    be(() => {
      const L = t.find((Q) => Q.id === o);
      L && p(L.name);
    }, [o]);
    const A = () => {
      if (!H(I)) {
        G(
          "\u0623\u062F\u062E\u0644 \u0625\u062C\u0645\u0627\u0644\u064A\u064B\u0627 \u0645\u0648\u062C\u0628\u064B\u0627 \u0644\u0644\u0641\u0627\u062A\u0648\u0631\u0629.",
        );
        return;
      }
      if (!pe(M) || M >= I) {
        G(
          "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u062E\u0635\u0645 \u063A\u064A\u0631 \u0633\u0627\u0644\u0628 \u0648\u0623\u0642\u0644 \u0645\u0646 \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629.",
        );
        return;
      }
      const L = F.filter(
          (V) =>
            V.name.trim() &&
            H(V.total) &&
            pe(V.quantity || 0) &&
            pe(V.unitPrice || 0),
        ).map((V) => ({
          name: V.name.trim(),
          quantity: Number(V.quantity || 0),
          unit: V.unit,
          unitPrice: Number(V.unitPrice || 0),
          total: Number(V.total),
        })),
        Q = C && o ? (r == null ? void 0 : r.debtTransactionId) || ne() : null,
        ee = {
          id: (r == null ? void 0 : r.id) || ne(),
          invoiceNumber: i.trim(),
          type: b,
          supplierId: o || null,
          supplierName: c.trim(),
          amount: s.netAmount,
          grossAmount: s.grossAmount,
          discountAmount: s.discountAmount,
          date: $,
          description: S.trim(),
          projectId:
            (b === "\u0645\u0648\u0627\u062F \u0628\u0646\u0627\u0621" && f) ||
            null,
          items: L,
          debtTransactionId: Q,
        };
      e(ee);
    };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-3" },
      React.createElement(
        "div",
        { className: "grid sm:grid-cols-2 gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0646\u0648\u0639 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
          ),
          React.createElement(
            me,
            { value: b, onChange: (L) => v(L.target.value) },
            De.map((L) => React.createElement("option", { key: L }, L)),
          ),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
          ),
          React.createElement(E, {
            value: i,
            onChange: (L) => d(L.target.value),
          }),
        ),
      ),
      b === "\u0645\u0648\u0627\u062F \u0628\u0646\u0627\u0621" &&
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u062D\u0645\u0651\u0644 \u0627\u0644\u062A\u0643\u0644\u0641\u0629 \u0639\u0644\u0649 \u0645\u0634\u0631\u0648\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
          ),
          React.createElement(
            me,
            { value: f, onChange: (L) => O(L.target.value) },
            React.createElement(
              "option",
              { value: "" },
              "\u0628\u062F\u0648\u0646 \u062A\u062D\u062F\u064A\u062F",
            ),
            a.map((L) =>
              React.createElement(
                "option",
                { key: L.id, value: L.id },
                L.customerName,
                " \u2014 ",
                L.location,
              ),
            ),
          ),
        ),
      React.createElement(
        "div",
        { className: "grid sm:grid-cols-2 gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u0645\u0648\u0631\u0651\u062F \u0627\u0644\u0645\u0633\u062C\u0651\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
          ),
          React.createElement(
            me,
            { value: o, onChange: (L) => l(L.target.value) },
            React.createElement(
              "option",
              { value: "" },
              "\u0628\u062F\u0648\u0646 \u0631\u0628\u0637 \u2014 \u0627\u0643\u062A\u0628 \u0627\u0644\u0627\u0633\u0645 \u064A\u062F\u0648\u064A\u064B\u0627",
            ),
            t.map((L) =>
              React.createElement("option", { key: L.id, value: L.id }, L.name),
            ),
          ),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0631\u0651\u062F / \u0627\u0644\u062C\u0647\u0629",
          ),
          React.createElement(E, {
            value: c,
            onChange: (L) => p(L.target.value),
            placeholder:
              "\u0645\u062B\u0627\u0644: \u0634\u0631\u0643\u0629 \u0645\u0648\u0627\u062F \u0627\u0644\u0628\u0646\u0627\u0621",
          }),
        ),
      ),
      o &&
        React.createElement(
          "label",
          {
            className: "flex items-center gap-2 text-xs",
            style: { color: "var(--text-body)" },
          },
          React.createElement("input", {
            type: "checkbox",
            checked: C,
            onChange: (L) => q(L.target.checked),
          }),
          " \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 \u063A\u064A\u0631 \u0645\u062F\u0641\u0648\u0639\u0629 \u2014 \u0633\u062C\u0651\u0644 \u0642\u064A\u0645\u062A\u0647\u0627 \u0643\u0645\u0633\u062A\u062D\u0642 \u0639\u0644\u064A\u0646\u0627 \u0644\u0644\u0645\u0648\u0631\u062F",
        ),
      React.createElement(
        "div",
        {
          className: "rounded-xl border p-3 flex flex-col gap-2",
          style: { borderColor: "var(--card-border)" },
        },
        React.createElement(
          R,
          null,
          "\u0628\u0646\u0648\u062F \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A \u2014 \u0623\u0648 \u0623\u062F\u062E\u0644 \u0645\u0628\u0644\u063A\u064B\u0627 \u0625\u062C\u0645\u0627\u0644\u064A\u064B\u0627 \u0623\u062F\u0646\u0627\u0647)",
        ),
        F.map((L, Q) =>
          React.createElement(
            "div",
            {
              key: Q,
              className:
                "grid grid-cols-2 sm:grid-cols-12 gap-1.5 items-center",
            },
            React.createElement(
              "div",
              { className: "col-span-2 sm:col-span-3 min-w-0" },
              React.createElement(E, {
                placeholder:
                  "\u0627\u0633\u0645 \u0627\u0644\u0645\u0627\u062F\u0629",
                value: L.name,
                onChange: (ee) => X(Q, { name: ee.target.value }),
              }),
            ),
            React.createElement(
              "div",
              { className: "col-span-1 sm:col-span-2 min-w-0" },
              React.createElement(E, {
                type: "number",
                placeholder: "\u0643\u0645\u064A\u0629",
                value: L.quantity,
                onChange: (ee) => X(Q, { quantity: ee.target.value }),
              }),
            ),
            React.createElement(
              "div",
              { className: "col-span-1 sm:col-span-2 min-w-0" },
              React.createElement(E, {
                placeholder: "\u0648\u062D\u062F\u0629",
                value: L.unit,
                onChange: (ee) => X(Q, { unit: ee.target.value }),
              }),
            ),
            React.createElement(
              "div",
              { className: "col-span-1 sm:col-span-2 min-w-0" },
              React.createElement(E, {
                type: "number",
                placeholder: "\u0627\u0644\u0633\u0639\u0631",
                value: L.unitPrice,
                onChange: (ee) => X(Q, { unitPrice: ee.target.value }),
              }),
            ),
            React.createElement(
              "div",
              { className: "col-span-1 sm:col-span-2 min-w-0" },
              React.createElement(E, {
                type: "number",
                placeholder: "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A",
                value: L.total,
                onChange: (ee) => X(Q, { total: ee.target.value }),
              }),
            ),
            React.createElement(
              "div",
              { className: "col-span-2 sm:col-span-1 flex justify-center" },
              F.length > 1 &&
                React.createElement(
                  "button",
                  {
                    onClick: () => k(Q),
                    style: { color: "var(--text-muted)" },
                  },
                  React.createElement(D, { name: "x", size: 14 }),
                ),
            ),
          ),
        ),
        React.createElement(
          "button",
          {
            onClick: n,
            className: "text-xs flex items-center gap-1 self-start",
            style: { color: "var(--accent)" },
          },
          React.createElement(D, { name: "plus", size: 12 }),
          " \u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062F",
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 sm:grid-cols-3 gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            j > 0
              ? "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645 (\u0645\u0646 \u0627\u0644\u0628\u0646\u0648\u062F)"
              : "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0642\u0628\u0644 \u0627\u0644\u062E\u0635\u0645",
          ),
          React.createElement(E, {
            type: "number",
            value: j > 0 ? j : u,
            onChange: (L) => w(L.target.value),
            disabled: j > 0,
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(R, null, "\u0627\u0644\u062E\u0635\u0645"),
          React.createElement(E, {
            type: "number",
            min: "0",
            value: x,
            onChange: (L) => h(L.target.value),
            placeholder: "0",
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
          ),
          React.createElement(E, {
            type: "date",
            value: $,
            onChange: (L) => B(L.target.value),
          }),
        ),
      ),
      I > 0 &&
        React.createElement(
          "div",
          {
            className:
              "rounded-lg px-3 py-2 flex items-center justify-between text-sm",
            style: { background: "var(--divider)", color: "var(--text-body)" },
          },
          React.createElement(
            "span",
            null,
            "\u0635\u0627\u0641\u064A \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 \u0628\u0639\u062F \u0627\u0644\u062E\u0635\u0645",
          ),
          React.createElement(
            "strong",
            { style: { color: "var(--text-strong)" } },
            N(Math.max(0, g)),
          ),
        ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0648\u0635\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
        ),
        React.createElement(E, {
          value: S,
          onChange: (L) => T(L.target.value),
        }),
      ),
      React.createElement(
        K,
        { onClick: A, full: !0, disabled: !H(I) },
        React.createElement(D, { name: "plus", size: 16 }),
        " ",
        r
          ? "\u062D\u0641\u0638 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629"
          : "\u062D\u0641\u0638 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629",
      ),
    );
  }
  function Yt({
    expenses: e,
    income: a,
    projects: t,
    invoices: r = [],
    suppliers: i = [],
    customers: d = [],
    upsert: b,
    transact: v,
    remove: o,
  }) {
    const [l, c] = y("expenses"),
      [p, m] = y(!1),
      [u, w] = y(null),
      [x, h] = y(null),
      [$, B] = y(null),
      S = gt(t, a),
      T = Ie(t, a),
      O = [...(l === "expenses" ? e : S)].sort(wt),
      C = O.reduce((n, k) => {
        const j = String(k.date || "").slice(0, 10) || "unknown",
          I = n.find((M) => M.day === j);
        return (I ? I.entries.push(k) : n.push({ day: j, entries: [k] }), n);
      }, []),
      q = e.reduce((n, k) => n + Number(k.amount || 0), 0),
      F = T.reduce((n, k) => n + Number(k.amount || 0), 0),
      U = async (n) => {
        const k = [],
          j = x == null ? void 0 : x.projectId;
        if (j && j !== n.projectId) {
          const M = t.find((s) => s.id === j);
          M &&
            k.push({
              collection: "projects",
              record: {
                ...M,
                payments: (M.payments || []).filter(
                  (s) => (s.paymentId || s.id) !== (x.paymentId || x.id),
                ),
              },
            });
        }
        if (n.projectId) {
          const M = t.find((s) => s.id === n.projectId);
          if (M) {
            const s = {
                id: n.paymentId || n.id,
                paymentId: n.paymentId || n.id,
                date: n.date,
                amount: n.amount,
                includeInIncome: n.includeInIncome !== !1,
                description: n.description,
              },
              g = M.payments || [],
              A = s.paymentId || s.id,
              W = g.some((P) => (P.paymentId || P.id) === A)
                ? g.map((P) =>
                    (P.paymentId || P.id) === A ? { ...P, ...s } : P,
                  )
                : [s, ...g];
            k.push({ collection: "projects", record: { ...M, payments: W } });
          }
        }
        k.push({ collection: "income", record: n });
        const I = await v({ upserts: k });
        return (I && (h(null), m(!1)), I);
      },
      X = (n) => {
        const k = [];
        if (n.projectId) {
          const j = t.find((I) => I.id === n.projectId);
          j &&
            k.push({
              collection: "projects",
              record: {
                ...j,
                payments: (j.payments || []).filter(
                  (I) => (I.paymentId || I.id) !== (n.paymentId || n.id),
                ),
              },
            });
        }
        return v({ upserts: k, deletes: [{ collection: "income", id: n.id }] });
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between flex-wrap gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            {
              className: "text-xl font-bold",
              style: {
                fontFamily: "'El Messiri', sans-serif",
                color: "var(--text-strong)",
              },
            },
            "\u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641 \u0648\u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
          ),
          React.createElement(
            "p",
            {
              className: "text-sm mt-0.5",
              style: { color: "var(--text-muted)" },
            },
            "\u0645\u0635\u0627\u0631\u064A\u0641 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u0635\u0646\u0639\u060C \u0648\u0648\u0627\u0631\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
          ),
        ),
        React.createElement(
          K,
          { onClick: () => m(!0) },
          React.createElement(D, { name: "plus", size: 16 }),
          " ",
          l === "expenses"
            ? "\u0645\u0635\u0631\u0648\u0641 \u062C\u062F\u064A\u062F"
            : "\u0648\u0627\u0631\u062F \u062C\u062F\u064A\u062F",
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" },
        React.createElement(te, {
          icon: "trendDown",
          label:
            "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641",
          value: N(q),
          accent: "var(--danger)",
        }),
        React.createElement(te, {
          icon: "trendUp",
          label:
            "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
          value: N(F),
          accent: "var(--success)",
        }),
        React.createElement(te, {
          icon: "wallet",
          label: "\u0627\u0644\u0635\u0627\u0641\u064A",
          value: N(F - q),
          accent: "var(--warning)",
        }),
      ),
      React.createElement(
        "div",
        { className: "flex gap-1.5" },
        React.createElement(
          "button",
          {
            onClick: () => c("expenses"),
            className: "text-sm px-4 py-2 rounded-lg border transition",
            style:
              l === "expenses"
                ? {
                    background: "var(--accent)",
                    borderColor: "var(--accent)",
                    color: "white",
                  }
                : {
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                    color: "var(--text-body)",
                  },
          },
          "\u0645\u0635\u0627\u0631\u064A\u0641 \u0627\u0644\u0645\u0635\u0646\u0639",
        ),
        React.createElement(
          "button",
          {
            onClick: () => c("income"),
            className: "text-sm px-4 py-2 rounded-lg border transition",
            style:
              l === "income"
                ? {
                    background: "var(--accent)",
                    borderColor: "var(--accent)",
                    color: "white",
                  }
                : {
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                    color: "var(--text-body)",
                  },
          },
          "\u0648\u0627\u0631\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
        ),
      ),
      O.length === 0
        ? React.createElement(ae, {
            icon: "wallet",
            title:
              l === "expenses"
                ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0635\u0627\u0631\u064A\u0641 \u0645\u0633\u062C\u0651\u0644\u0629"
                : "\u0644\u0627 \u062A\u0648\u062C\u062F \u0648\u0627\u0631\u062F\u0627\u062A \u0645\u0633\u062C\u0651\u0644\u0629",
          })
        : React.createElement(
            "div",
            {
              className: "rounded-2xl border overflow-hidden",
              style: {
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              },
            },
            React.createElement(
              "div",
              {
                className: "flex flex-col",
                style: { borderColor: "var(--divider)" },
              },
              C.map((n) =>
                React.createElement(
                  React.Fragment,
                  { key: n.day },
                  React.createElement(
                    "div",
                    {
                      className:
                        "flex items-center justify-between px-4 py-2.5 border-b border-t",
                      style: {
                        background: "var(--divider)",
                        borderColor: "var(--card-border)",
                      },
                    },
                    React.createElement(
                      "span",
                      {
                        className: "text-xs font-semibold",
                        style: { color: "var(--text-body)" },
                      },
                      n.day === "unknown"
                        ? "\u0628\u062F\u0648\u0646 \u062A\u0627\u0631\u064A\u062E"
                        : Nt(n.day),
                    ),
                    React.createElement(
                      "span",
                      {
                        className: "text-xs font-semibold",
                        style: {
                          color:
                            l === "expenses"
                              ? "var(--danger)"
                              : "var(--success)",
                        },
                      },
                      "\u0625\u062C\u0645\u0627\u0644\u064A ",
                      l === "expenses"
                        ? "\u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641"
                        : "\u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
                      ": ",
                      N(
                        n.entries
                          .filter(
                            (k) => l === "expenses" || k.includeInIncome !== !1,
                          )
                          .reduce((k, j) => k + Number(j.amount || 0), 0),
                      ),
                    ),
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "flex flex-col divide-y",
                      style: { borderColor: "var(--divider)" },
                    },
                    n.entries.map((k) => {
                      var j;
                      return React.createElement(
                        "div",
                        {
                          key: k.id,
                          className:
                            "flex items-center justify-between px-4 py-3 gap-2",
                          style: { borderColor: "var(--divider)" },
                        },
                        React.createElement(
                          "div",
                          { className: "min-w-0" },
                          React.createElement(
                            "div",
                            {
                              className: "text-sm font-medium",
                              style: { color: "var(--text-body)" },
                            },
                            l === "expenses"
                              ? k.type
                              : k.customerName || "\u0648\u0627\u0631\u062F",
                            " ",
                            l === "income" &&
                              k.includeInIncome === !1 &&
                              React.createElement(
                                se,
                                {
                                  bg: "var(--divider)",
                                  fg: "var(--text-muted)",
                                },
                                "\u063A\u064A\u0631 \u0645\u062D\u062A\u0633\u0628",
                              ),
                          ),
                          React.createElement(
                            "div",
                            {
                              className: "text-xs mt-0.5",
                              style: { color: "var(--text-muted)" },
                            },
                            ut(k.date),
                            " ",
                            k.projectId
                              ? "\xB7 " +
                                  (((j = t.find((I) => I.id === k.projectId)) ==
                                  null
                                    ? void 0
                                    : j.customerName) ||
                                    "\u0645\u0634\u0631\u0648\u0639")
                              : "",
                            " ",
                            k.description ? "\xB7 " + k.description : "",
                          ),
                        ),
                        React.createElement(
                          "div",
                          { className: "flex items-center gap-3 shrink-0" },
                          React.createElement(
                            "span",
                            {
                              className: "font-semibold",
                              style: {
                                color:
                                  l === "expenses"
                                    ? "var(--danger)"
                                    : k.includeInIncome === !1
                                      ? "var(--text-muted)"
                                      : "var(--success)",
                              },
                            },
                            l === "expenses"
                              ? "\u2212"
                              : k.includeInIncome === !1
                                ? ""
                                : "+",
                            N(k.amount),
                          ),
                          $ === k.id
                            ? React.createElement(ge, {
                                onConfirm: () => {
                                  (l === "expenses"
                                    ? o("expenses", k.id)
                                    : X(k),
                                    B(null));
                                },
                                onCancel: () => B(null),
                              })
                            : React.createElement(
                                "div",
                                { className: "flex items-center gap-3" },
                                React.createElement(
                                  "button",
                                  {
                                    onClick: () =>
                                      l === "expenses" ? w(k) : h(k),
                                    className: "text-xs",
                                    style: { color: "var(--accent)" },
                                  },
                                  "\u062A\u0639\u062F\u064A\u0644",
                                ),
                                React.createElement(
                                  "button",
                                  {
                                    onClick: () => B(k.id),
                                    style: { color: "var(--text-muted)" },
                                  },
                                  React.createElement(D, {
                                    name: "trash",
                                    size: 14,
                                  }),
                                ),
                              ),
                        ),
                      );
                    }),
                  ),
                ),
              ),
            ),
          ),
      p &&
        l === "expenses" &&
        React.createElement(
          ce,
          {
            title: "\u0645\u0635\u0631\u0648\u0641 \u062C\u062F\u064A\u062F",
            onClose: () => m(!1),
          },
          React.createElement(ot, {
            onAdd: (n) => {
              (b("expenses", n), m(!1));
            },
          }),
        ),
      p &&
        l === "income" &&
        React.createElement(
          ce,
          {
            title: "\u0648\u0627\u0631\u062F \u062C\u062F\u064A\u062F",
            onClose: () => m(!1),
          },
          React.createElement(st, { projects: t, customers: d, onAdd: U }),
        ),
      u &&
        React.createElement(
          ce,
          {
            title:
              "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0635\u0631\u0648\u0641",
            onClose: () => w(null),
          },
          React.createElement(ot, {
            initialExpense: u,
            onAdd: (n) => {
              (b("expenses", n), w(null));
            },
          }),
        ),
      x &&
        React.createElement(
          ce,
          {
            title:
              "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0648\u0627\u0631\u062F",
            onClose: () => h(null),
          },
          React.createElement(st, {
            initialIncome: x,
            projects: t,
            customers: d,
            onAdd: U,
          }),
        ),
    );
  }
  function ot({ onAdd: e, initialExpense: a = null }) {
    const [t, r] = y((a == null ? void 0 : a.type) || Qe[0]),
      [i, d] = y(a != null && a.amount ? String(a.amount) : ""),
      [b, v] = y(Be(a == null ? void 0 : a.date)),
      [o, l] = y((a == null ? void 0 : a.description) || ""),
      c = () => {
        if (!H(i) || Number(i) < 0) {
          G(
            "\u0627\u0644\u0645\u0628\u0644\u063A \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0648\u062C\u0628\u064B\u0627.",
          );
          return;
        }
        e({
          id: (a == null ? void 0 : a.id) || ne(),
          type: t,
          amount: Number(i),
          date: b,
          description: o.trim(),
        });
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-3" },
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0646\u0648\u0639 \u0627\u0644\u0645\u0635\u0631\u0648\u0641",
        ),
        React.createElement(
          me,
          { value: t, onChange: (p) => r(p.target.value) },
          Qe.map((p) => React.createElement("option", { key: p }, p)),
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(R, null, "\u0627\u0644\u0645\u0628\u0644\u063A"),
          React.createElement(E, {
            type: "number",
            value: i,
            onChange: (p) => d(p.target.value),
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0633\u0627\u0639\u0629",
          ),
          React.createElement(E, {
            type: "datetime-local",
            value: b,
            onChange: (p) => v(p.target.value),
          }),
        ),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0648\u0635\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
        ),
        React.createElement(E, {
          value: o,
          onChange: (p) => l(p.target.value),
        }),
      ),
      React.createElement(
        K,
        { onClick: c, full: !0, disabled: !i },
        React.createElement(D, { name: "plus", size: 16 }),
        " ",
        a
          ? "\u062D\u0641\u0638 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0635\u0631\u0648\u0641"
          : "\u062D\u0641\u0638 \u0627\u0644\u0645\u0635\u0631\u0648\u0641",
      ),
    );
  }
  function st({
    onAdd: e,
    projects: a,
    customers: t = [],
    initialIncome: r = null,
  }) {
    var T;
    const i =
        (r == null ? void 0 : r.customerId) ||
        (!(r != null && r.projectId) &&
          r != null &&
          r.customerName &&
          ((T = t.find((f) => oe(f.name) === oe(r.customerName))) == null
            ? void 0
            : T.id)) ||
        "",
      [d, b] = y((r == null ? void 0 : r.projectId) || ""),
      [v, o] = y(i),
      [l, c] = y((r == null ? void 0 : r.customerName) || ""),
      [p, m] = y(r != null && r.amount ? String(r.amount) : ""),
      [u, w] = y(Be(r == null ? void 0 : r.date)),
      [x, h] = y((r == null ? void 0 : r.description) || ""),
      [$, B] = y((r == null ? void 0 : r.includeInIncome) !== !1);
    return React.createElement(
      "div",
      { className: "flex flex-col gap-3" },
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
        ),
        React.createElement(Ge, {
          items: a,
          value: d,
          onSelect: b,
          placeholder:
            "\u0627\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0623\u0648 \u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639...",
          getLabel: (f) =>
            f.customerName + (f.location ? " \u2014 " + f.location : ""),
          getSearchText: (f) =>
            [f.customerName, f.location, f.phone, f.dateCreated]
              .filter(Boolean)
              .join(" "),
        }),
      ),
      !d &&
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u0632\u0628\u0648\u0646 (\u0628\u062F\u0648\u0646 \u0645\u0634\u0631\u0648\u0639)",
          ),
          React.createElement(Ge, {
            items: t,
            value: v,
            onSelect: o,
            placeholder:
              "\u0627\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0632\u0628\u0648\u0646 \u0623\u0648 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0647...",
            getLabel: (f) => f.name + (f.phone ? " \u2014 " + f.phone : ""),
            getSearchText: (f) => [f.name, f.phone].filter(Boolean).join(" "),
            emptyText:
              "\u0644\u0627 \u064A\u0648\u062C\u062F \u0632\u0628\u0648\u0646 \u0628\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0645 \u2014 \u0623\u0636\u0641\u0647 \u0645\u0646 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0623\u0648 \u0627\u0643\u062A\u0628 \u0627\u0644\u0627\u0633\u0645 \u0623\u062F\u0646\u0627\u0647",
          }),
          v
            ? React.createElement(
                "div",
                {
                  className: "text-xs mt-1",
                  style: { color: "var(--success)" },
                },
                "\u0633\u064A\u064F\u0633\u062C\u064E\u0651\u0644 \u0647\u0630\u0627 \u0627\u0644\u0648\u0627\u0631\u062F \u0641\u064A \u062D\u0633\u0627\u0628 \u0627\u0644\u0632\u0628\u0648\u0646 \u0648\u064A\u064F\u062E\u0635\u0645 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062D\u0642 \u0639\u0644\u064A\u0647.",
              )
            : React.createElement(
                "div",
                { className: "mt-2" },
                React.createElement(
                  R,
                  null,
                  "\u0623\u0648 \u0627\u0633\u0645 \u0632\u0628\u0648\u0646 \u063A\u064A\u0631 \u0645\u0633\u062C\u0651\u0644 (\u0644\u0646 \u064A\u0631\u062A\u0628\u0637 \u0628\u062D\u0633\u0627\u0628)",
                ),
                React.createElement(E, {
                  value: l,
                  onChange: (f) => c(f.target.value),
                }),
              ),
        ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(R, null, "\u0627\u0644\u0645\u0628\u0644\u063A"),
          React.createElement(E, {
            type: "number",
            value: p,
            onChange: (f) => m(f.target.value),
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0633\u0627\u0639\u0629",
          ),
          React.createElement(E, {
            type: "datetime-local",
            value: u,
            onChange: (f) => w(f.target.value),
          }),
        ),
      ),
      React.createElement(
        "label",
        {
          className: "flex items-center gap-2 text-xs",
          style: { color: "var(--text-body)" },
        },
        React.createElement("input", {
          type: "checkbox",
          checked: $,
          onChange: (f) => B(f.target.checked),
        }),
        " \u0627\u062D\u062A\u0633\u0627\u0628 \u0627\u0644\u062F\u0641\u0639\u0629 \u0636\u0645\u0646 \u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0648\u0635\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
        ),
        React.createElement(E, {
          value: x,
          onChange: (f) => h(f.target.value),
        }),
      ),
      React.createElement(
        K,
        {
          onClick: () => {
            if (!H(p)) {
              G(
                "\u0627\u0644\u0645\u0628\u0644\u063A \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0648\u062C\u0628\u064B\u0627.",
              );
              return;
            }
            const f = a.find((C) => C.id === d),
              O = f ? null : t.find((C) => C.id === v);
            e({
              ...r,
              id: (r == null ? void 0 : r.id) || ne(),
              paymentId: r == null ? void 0 : r.paymentId,
              projectId: d || null,
              customerId: O ? O.id : null,
              customerName: f ? f.customerName : O ? O.name : l.trim(),
              amount: Number(p),
              date: u,
              includeInIncome: $,
              description: x.trim(),
            });
          },
          full: !0,
          disabled: !p,
        },
        React.createElement(D, { name: "plus", size: 16 }),
        " ",
        r
          ? "\u062D\u0641\u0638 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0648\u0627\u0631\u062F"
          : "\u062D\u0641\u0638 \u0627\u0644\u0648\u0627\u0631\u062F",
      ),
    );
  }
  function Ht({
    sub: e,
    setSub: a,
    customers: t,
    suppliers: r,
    workers: i,
    invoices: d,
    upsert: b,
    transact: v,
    remove: o,
    projects: l,
    income: c,
    onOpenProject: p,
  }) {
    const m = {
        customers: {
          label: "\u0639\u0645\u0644\u0627\u0621",
          icon: "users",
          collection: "customers",
          data: t,
        },
        workers: {
          label: "\u0639\u0645\u0627\u0644",
          icon: "user",
          collection: "workers",
          data: i,
        },
        suppliers: {
          label: "\u0645\u0648\u0631\u062F\u0648\u0646",
          icon: "briefcase",
          collection: "suppliers",
          data: r,
        },
      },
      u = m[e];
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          {
            className: "text-xl font-bold",
            style: {
              fontFamily: "'El Messiri', sans-serif",
              color: "var(--text-strong)",
            },
          },
          "\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0648\u0627\u0644\u062F\u064A\u0648\u0646",
        ),
        React.createElement(
          "p",
          {
            className: "text-sm mt-0.5",
            style: { color: "var(--text-muted)" },
          },
          "\u0639\u0645\u0644\u0627\u0621\u060C \u0639\u0645\u0627\u0644\u060C \u0648\u0645\u0648\u0631\u062F\u0648\u0646 \u2014 \u0645\u0639 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A",
        ),
      ),
      React.createElement(
        "div",
        { className: "flex gap-1.5" },
        Object.entries(m).map(([w, x]) =>
          React.createElement(
            "button",
            {
              key: w,
              onClick: () => a(w),
              className:
                "text-sm px-4 py-2 rounded-lg border flex items-center gap-1.5 transition",
              style:
                e === w
                  ? {
                      background: "var(--accent)",
                      borderColor: "var(--accent)",
                      color: "white",
                    }
                  : {
                      background: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                      color: "var(--text-body)",
                    },
            },
            React.createElement(D, { name: x.icon, size: 14 }),
            " ",
            x.label,
          ),
        ),
      ),
      React.createElement(Kt, {
        kind: e,
        label: u.label,
        icon: u.icon,
        collection: u.collection,
        data: u.data,
        invoices: d,
        upsert: b,
        transact: v,
        remove: o,
        projects: l,
        income: c,
        onOpenProject: p,
      }),
    );
  }
  function Kt({
    kind: e,
    label: a,
    icon: t,
    collection: r,
    data: i,
    invoices: d,
    upsert: b,
    transact: v,
    remove: o,
    projects: l,
    income: c,
    onOpenProject: p,
  }) {
    const [m, u] = y(""),
      [w, x] = y(!1),
      [h, $] = y(null),
      B = i.filter((C) => !m || C.name.includes(m)),
      S = i.find((C) => C.id === h),
      T =
        e === "customers" && S
          ? l.filter(
              (C) =>
                C.customerId === S.id ||
                (!C.customerId && C.customerName === S.name),
            )
          : null,
      f = S
        ? d.filter((C) =>
            e === "suppliers"
              ? C.supplierId === S.id
              : e === "customers" &&
                (C.customerId === S.id ||
                  (!C.customerId && oe(C.customerName) === oe(S.name))),
          )
        : [],
      O = (C) => {
        const q = [{ collection: r, record: C }];
        return (
          e === "customers" &&
            S &&
            C.name !== S.name &&
            l
              .filter(
                (F) =>
                  F.customerId === S.id ||
                  (!F.customerId && F.customerName === S.name),
              )
              .forEach((F) =>
                q.push({
                  collection: "projects",
                  record: { ...F, customerName: C.name },
                }),
              ),
          v({ upserts: q })
        );
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-4" },
      React.createElement(
        "div",
        { className: "flex items-center gap-3 flex-wrap" },
        React.createElement(
          "div",
          { className: "relative flex-1 min-w-[180px]" },
          React.createElement(
            "span",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2",
              style: { color: "var(--text-muted)" },
            },
            React.createElement(D, { name: "search", size: 15 }),
          ),
          React.createElement("input", {
            value: m,
            onChange: (C) => u(C.target.value),
            placeholder: `\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0628\u064A\u0646 ${a}...`,
            className:
              "w-full rounded-lg border pr-9 pl-3 py-2 text-sm outline-none",
            style: {
              background: "var(--input-bg)",
              borderColor: "var(--card-border)",
              color: "var(--text-strong)",
            },
          }),
        ),
        React.createElement(
          K,
          { onClick: () => x(!0) },
          React.createElement(D, { name: "plus", size: 16 }),
          " \u0625\u0636\u0627\u0641\u0629 ",
          a.replace(/ون$|اء$/, ""),
        ),
      ),
      B.length === 0
        ? React.createElement(ae, {
            icon: t,
            title: `\u0644\u0627 \u064A\u0648\u062C\u062F ${a} \u0645\u0633\u062C\u0651\u0644\u0648\u0646 \u0628\u0639\u062F`,
          })
        : React.createElement(
            "div",
            { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" },
            B.map((C) => {
              const q = e === "customers" ? Oe(C, l, c).total : we(C);
              return React.createElement(
                "button",
                {
                  key: C.id,
                  onClick: () => $(C.id),
                  className:
                    "text-right rounded-2xl border p-4 flex flex-col gap-2",
                  style: {
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  },
                },
                React.createElement(
                  "div",
                  { className: "flex items-center justify-between" },
                  React.createElement(
                    "div",
                    {
                      className: "font-semibold",
                      style: { color: "var(--text-strong)" },
                    },
                    C.name,
                  ),
                  React.createElement(D, {
                    name: t,
                    size: 16,
                    color: "var(--text-muted)",
                  }),
                ),
                C.phone &&
                  React.createElement(
                    "div",
                    {
                      className: "text-xs flex items-center gap-1",
                      style: { color: "var(--text-muted)" },
                    },
                    React.createElement(D, { name: "phone", size: 11 }),
                    " ",
                    C.phone,
                  ),
                React.createElement(
                  "div",
                  {
                    className: "pt-2 border-t",
                    style: { borderColor: "var(--divider)" },
                  },
                  q > 0 &&
                    React.createElement(
                      se,
                      { bg: "var(--warn-bg)", fg: "var(--danger)" },
                      e === "suppliers"
                        ? "\u0639\u0644\u064A\u0646\u0627"
                        : "\u0639\u0644\u064A\u0647",
                      " ",
                      N(q),
                    ),
                  q < 0 &&
                    React.createElement(
                      se,
                      { bg: "var(--good-bg)", fg: "var(--success)" },
                      e === "suppliers" ? "\u0644\u0646\u0627" : "\u0644\u0647",
                      " ",
                      N(-q),
                    ),
                  q === 0 &&
                    React.createElement(
                      se,
                      { bg: "var(--divider)", fg: "var(--text-muted)" },
                      "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0635\u064A\u062F",
                    ),
                ),
              );
            }),
          ),
      w &&
        React.createElement(
          ce,
          {
            title: `\u0625\u0636\u0627\u0641\u0629 ${a.replace(/ون$|اء$/, "")}`,
            onClose: () => x(!1),
          },
          React.createElement(Zt, {
            existing: i,
            onAdd: (C) => {
              (b(r, C), x(!1));
            },
          }),
        ),
      S &&
        React.createElement(ea, {
          contact: S,
          label: a,
          icon: t,
          invoices: d,
          relatedInvoices: f,
          onClose: () => $(null),
          onSave: O,
          onDelete: () => {
            (o(r, S.id), $(null));
          },
          relatedProjects: T,
          income: c,
          onOpenProject: p,
          existing: i.filter((C) => C.id !== S.id),
        }),
    );
  }
  function Zt({ onAdd: e, existing: a = [] }) {
    const [t, r] = y(""),
      [i, d] = y(""),
      [b, v] = y("");
    return React.createElement(
      "div",
      { className: "flex flex-col gap-3" },
      React.createElement(
        "div",
        null,
        React.createElement(R, null, "\u0627\u0644\u0627\u0633\u0645"),
        React.createElement(E, {
          value: t,
          onChange: (l) => r(l.target.value),
        }),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
        ),
        React.createElement(E, {
          value: i,
          onChange: (l) => d(l.target.value),
        }),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0645\u0644\u0627\u062D\u0638\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
        ),
        React.createElement(E, {
          value: b,
          onChange: (l) => v(l.target.value),
        }),
      ),
      React.createElement(
        K,
        {
          onClick: () => {
            if (t.trim()) {
              if (qe(a, t)) {
                G(
                  "\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0645 \u0645\u0633\u062C\u0644 \u0645\u0633\u0628\u0642\u064B\u0627.",
                );
                return;
              }
              e({
                id: ne(),
                name: t.trim(),
                phone: i.trim(),
                notes: b.trim(),
                transactions: [],
              });
            }
          },
          full: !0,
          disabled: !t.trim(),
        },
        React.createElement(D, { name: "plus", size: 16 }),
        " \u0625\u0636\u0627\u0641\u0629",
      ),
    );
  }
  function ea({
    contact: e,
    label: a,
    icon: t,
    invoices: r = [],
    relatedInvoices: i = [],
    onClose: d,
    onSave: b,
    onDelete: v,
    relatedProjects: o,
    income: l = [],
    onOpenProject: c,
    existing: p = [],
  }) {
    const [m, u] = y(e),
      [w, x] = y(!1),
      [h, $] = y("debit"),
      [B, S] = y(""),
      [T, f] = y(""),
      [O, C] = y(null),
      [q, F] = y(""),
      [U, X] = y(Z()),
      [n, k] = y(""),
      j = ye(null),
      I = ye(null);
    be(() => u(e), [e.id]);
    const M = () => {
        (j.current && clearTimeout(j.current),
          (j.current = null),
          (I.current = null));
      },
      s = () => {
        const _ = I.current;
        (M(), _ && b(_));
      };
    be(
      () => () => {
        (j.current && clearTimeout(j.current), I.current && b(I.current));
      },
      [],
    );
    const g = (_, z = !1) => {
        const J = { ...m, ..._ };
        if ((u(J), z)) {
          (M(), b(J));
          return;
        }
        ((I.current = J),
          j.current && clearTimeout(j.current),
          (j.current = setTimeout(() => {
            const ve = I.current;
            ((I.current = null), (j.current = null), ve && b(ve));
          }, 650)));
      },
      A = () => {
        (s(), d());
      },
      W = () => {
        (M(), v());
      },
      P = we(m),
      L = m.transactions || [],
      Q = a === "\u0645\u0648\u0631\u062F\u0648\u0646" ? Se(m, r) : null,
      ee = qe(p, m.name),
      V = (o || []).reduce(
        (_, z) => {
          const J = Ce(z, l);
          return {
            cost: _.cost + J.cost,
            paid: _.paid + J.paid,
            remaining: _.remaining + J.remaining,
            surplus: _.surplus + J.surplus,
          };
        },
        { cost: 0, paid: 0, remaining: 0, surplus: 0 },
      ),
      ue = V.remaining,
      ze = o != null ? We(m, l) : [],
      Me = ze.reduce((_, z) => _ + Number(z.amount || 0), 0),
      fe = P + ue - V.surplus - Me,
      Re = () => {
        if (!H(B) || Number(B) < 0) {
          G(
            "\u0645\u0628\u0644\u063A \u0627\u0644\u062D\u0631\u0643\u0629 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0648\u062C\u0628\u064B\u0627.",
          );
          return;
        }
        const _ = {
          id: ne(),
          date: Z(),
          type: h,
          amount: Number(B),
          note: T.trim(),
        };
        (g({ transactions: [_, ...L] }, !0), S(""), f(""));
      },
      Xe = (_) => {
        (g({ transactions: L.filter((z) => z.id !== _) }, !0), C(null));
      },
      Ne = () => {
        if (!H(q)) {
          G(
            "\u0623\u062F\u062E\u0644 \u0645\u0628\u0644\u063A \u0633\u062F\u0627\u062F \u0645\u0648\u062C\u0628\u064B\u0627.",
          );
          return;
        }
        const _ = Number(q),
          z = {
            id: ne(),
            date: U || Z(),
            type: "credit",
            amount: _,
            note:
              n.trim() ||
              "\u0633\u062F\u0627\u062F \u0639\u0627\u0645 \u0644\u0644\u0645\u0648\u0631\u062F",
            supplierPayment: !0,
            allocations: At(m, r, _),
          };
        (g({ transactions: [z, ...L] }, !0),
          F(""),
          k(""),
          X(Z()),
          G(
            z.allocations.length
              ? "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0633\u062F\u0627\u062F \u0648\u062A\u0648\u0632\u064A\u0639\u0647 \u0639\u0644\u0649 \u0623\u0642\u062F\u0645 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631."
              : "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0633\u062F\u0627\u062F \u0643\u0631\u0635\u064A\u062F \u0644\u0646\u0627 \u0639\u0646\u062F \u0627\u0644\u0645\u0648\u0631\u062F.",
            "success",
          ));
      };
    return React.createElement(
      ce,
      { title: m.name, onClose: A, wide: !0 },
      React.createElement(
        "div",
        { className: "flex flex-col gap-4" },
        React.createElement(
          "div",
          { className: "grid sm:grid-cols-2 gap-3" },
          React.createElement(
            "div",
            null,
            React.createElement(R, null, "\u0627\u0644\u0627\u0633\u0645"),
            React.createElement(E, {
              value: m.name,
              onChange: (_) => g({ name: _.target.value }),
            }),
            ee &&
              React.createElement(
                "div",
                {
                  className: "text-xs mt-1",
                  style: { color: "var(--danger)" },
                },
                "\u064A\u0648\u062C\u062F \u0627\u0633\u0645 \u0645\u0637\u0627\u0628\u0642 \u0645\u0633\u062C\u0651\u0644 \u0645\u0633\u0628\u0642\u064B\u0627 \u2014 \u062A\u0623\u0643\u062F \u0623\u0646\u0647 \u0644\u064A\u0633 \u062A\u0643\u0631\u0627\u0631\u064B\u0627 \u0644\u0646\u0641\u0633 \u0627\u0644\u062C\u0647\u0629.",
              ),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              R,
              null,
              "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
            ),
            React.createElement(E, {
              value: m.phone,
              onChange: (_) => g({ phone: _.target.value }),
            }),
          ),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0645\u0644\u0627\u062D\u0638\u0627\u062A",
          ),
          React.createElement(E, {
            value: m.notes,
            onChange: (_) => g({ notes: _.target.value }),
          }),
        ),
        (o != null || a === "\u0645\u0648\u0631\u062F\u0648\u0646") &&
          React.createElement(
            "button",
            {
              type: "button",
              onClick: () =>
                Rt(
                  a === "\u0645\u0648\u0631\u062F\u0648\u0646"
                    ? "supplier"
                    : "customer",
                  m,
                  { invoices: r, projects: o || [], income: l },
                ),
              className:
                "w-full rounded-lg border px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2",
              style: {
                borderColor: "var(--accent)",
                color: "var(--accent)",
                background: "var(--card-bg)",
              },
            },
            React.createElement(D, { name: "receipt", size: 16 }),
            " \u0643\u0634\u0641 \u062D\u0633\u0627\u0628",
          ),
        React.createElement(
          "div",
          {
            className: "rounded-xl p-3 flex items-center justify-between",
            style: {
              background:
                P > 0
                  ? "var(--warn-bg)"
                  : P < 0
                    ? "var(--good-bg)"
                    : "var(--divider)",
            },
          },
          React.createElement(
            "span",
            { className: "text-sm", style: { color: "var(--text-body)" } },
            a === "\u0645\u0648\u0631\u062F\u0648\u0646"
              ? "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u064A\u062F\u0648\u064A \u0644\u0644\u0645\u0648\u0631\u062F"
              : "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u064A\u062F\u0648\u064A \u0644\u0644\u0639\u0645\u064A\u0644",
          ),
          React.createElement(
            "span",
            {
              className: "font-bold text-lg",
              style: {
                color:
                  P > 0
                    ? "var(--danger)"
                    : P < 0
                      ? "var(--success)"
                      : "var(--text-strong)",
              },
            },
            P === 0
              ? "\u0644\u0627 \u064A\u0648\u062C\u062F"
              : P > 0
                ? a === "\u0645\u0648\u0631\u062F\u0648\u0646"
                  ? `\u0639\u0644\u064A\u0646\u0627 ${N(P)}`
                  : `\u0639\u0644\u064A\u0647 ${N(P)}`
                : a === "\u0645\u0648\u0631\u062F\u0648\u0646"
                  ? `\u0644\u0646\u0627 ${N(-P)}`
                  : `\u0644\u0647 ${N(-P)}`,
          ),
        ),
        a === "\u0645\u0648\u0631\u062F\u0648\u0646" &&
          Q &&
          React.createElement(
            "div",
            {
              className: "rounded-xl border p-3 flex flex-col gap-3",
              style: { borderColor: "var(--card-border)" },
            },
            React.createElement(
              R,
              null,
              "\u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0645\u0648\u0631\u062F",
            ),
            React.createElement(
              "div",
              { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs" },
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2",
                  style: { background: "var(--divider)" },
                },
                React.createElement(
                  "div",
                  { style: { color: "var(--text-muted)" } },
                  "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0622\u062C\u0644\u0629",
                ),
                React.createElement(
                  "strong",
                  { style: { color: "var(--text-strong)" } },
                  N(Q.totalInvoices),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2",
                  style: { background: "var(--good-bg)" },
                },
                React.createElement(
                  "div",
                  { style: { color: "var(--text-muted)" } },
                  "\u0627\u0644\u0645\u062F\u0641\u0648\u0639",
                ),
                React.createElement(
                  "strong",
                  { style: { color: "var(--success)" } },
                  N(Q.invoicePaid),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2",
                  style: {
                    background: Q.owed ? "var(--warn-bg)" : "var(--good-bg)",
                  },
                },
                React.createElement(
                  "div",
                  { style: { color: "var(--text-muted)" } },
                  "\u0645\u0633\u062A\u062D\u0642 \u0639\u0644\u064A\u0646\u0627",
                ),
                React.createElement(
                  "strong",
                  {
                    style: {
                      color: Q.owed ? "var(--danger)" : "var(--success)",
                    },
                  },
                  N(Q.owed),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2",
                  style: {
                    background: Q.credit ? "var(--good-bg)" : "var(--divider)",
                  },
                },
                React.createElement(
                  "div",
                  { style: { color: "var(--text-muted)" } },
                  "\u0645\u0633\u062A\u062D\u0642 \u0644\u0646\u0627",
                ),
                React.createElement(
                  "strong",
                  { style: { color: "var(--success)" } },
                  N(Q.credit),
                ),
              ),
            ),
            React.createElement(
              "div",
              {
                className: "rounded-lg border p-3 flex flex-col gap-2",
                style: { borderColor: "var(--card-border)" },
              },
              React.createElement(
                "div",
                {
                  className: "text-sm font-medium",
                  style: { color: "var(--text-body)" },
                },
                "\u062A\u0633\u062C\u064A\u0644 \u0633\u062F\u0627\u062F \u0639\u0627\u0645",
              ),
              React.createElement(
                "div",
                { className: "grid grid-cols-2 gap-2" },
                React.createElement(E, {
                  type: "number",
                  placeholder:
                    "\u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062F\u0627\u062F",
                  value: q,
                  onChange: (_) => F(_.target.value),
                }),
                React.createElement(E, {
                  type: "date",
                  value: U,
                  onChange: (_) => X(_.target.value),
                }),
              ),
              React.createElement(E, {
                placeholder:
                  "\u0645\u0644\u0627\u062D\u0638\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
                value: n,
                onChange: (_) => k(_.target.value),
              }),
              React.createElement(
                "div",
                { className: "text-xs", style: { color: "var(--text-muted)" } },
                "\u064A\u0648\u0632\u0651\u0639 \u0627\u0644\u0633\u062F\u0627\u062F \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0639\u0644\u0649 \u0623\u0642\u062F\u0645 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u063A\u064A\u0631 \u0627\u0644\u0645\u0633\u062F\u062F\u0629\u060C \u0648\u0623\u064A \u0632\u064A\u0627\u062F\u0629 \u062A\u0635\u0628\u062D \u0631\u0635\u064A\u062F\u064B\u0627 \u0644\u0646\u0627 \u0639\u0646\u062F \u0627\u0644\u0645\u0648\u0631\u062F.",
              ),
              React.createElement(
                K,
                { onClick: Ne, full: !0, disabled: !q },
                React.createElement(D, { name: "plus", size: 16 }),
                " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0633\u062F\u0627\u062F",
              ),
            ),
            React.createElement(
              "div",
              { className: "flex flex-col gap-1" },
              React.createElement(
                "div",
                {
                  className: "text-xs font-medium",
                  style: { color: "var(--text-muted)" },
                },
                "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0622\u062C\u0644\u0629",
              ),
              Q.rows.length === 0
                ? React.createElement(
                    "div",
                    {
                      className: "text-xs",
                      style: { color: "var(--text-muted)" },
                    },
                    "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u0648\u0627\u062A\u064A\u0631 \u0622\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0631\u062F.",
                  )
                : Q.rows.map((_) =>
                    React.createElement(
                      "div",
                      {
                        key: _.invoice.id,
                        className:
                          "flex items-center justify-between text-xs py-1.5 border-b",
                        style: { borderColor: "var(--divider)" },
                      },
                      React.createElement(
                        "span",
                        null,
                        "#",
                        _.invoice.invoiceNumber || _.invoice.id,
                        " \xB7 ",
                        _.invoice.date,
                      ),
                      React.createElement(
                        "span",
                        {
                          style: {
                            color: _.remaining
                              ? "var(--danger)"
                              : "var(--success)",
                          },
                        },
                        _.remaining
                          ? `\u0645\u062A\u0628\u0642\u064A ${N(_.remaining)}`
                          : "\u0645\u0633\u062F\u062F\u0629",
                      ),
                    ),
                  ),
            ),
          ),
        o != null &&
          React.createElement(
            "div",
            {
              className: "rounded-xl border p-3 flex flex-col gap-2",
              style: { borderColor: "var(--card-border)" },
            },
            React.createElement(
              R,
              null,
              "\u0645\u0634\u0627\u0631\u064A\u0639 \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 (",
              o.length,
              ")",
            ),
            React.createElement(
              "div",
              {
                className: "rounded-lg p-3 flex items-center justify-between",
                style: {
                  background: fe > 0 ? "var(--warn-bg)" : "var(--good-bg)",
                },
              },
              React.createElement(
                "span",
                { className: "text-sm", style: { color: "var(--text-body)" } },
                "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0643\u0644\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642 (\u0627\u0644\u0631\u0635\u064A\u062F + \u0628\u0627\u0642\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u2212 \u0627\u0644\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629)",
              ),
              React.createElement(
                "span",
                {
                  className: "font-bold text-lg",
                  style: { color: fe > 0 ? "var(--danger)" : "var(--success)" },
                },
                fe > 0
                  ? N(fe)
                  : fe < 0
                    ? "\u0631\u0635\u064A\u062F \u0644\u0644\u0639\u0645\u064A\u0644 " +
                      N(-fe)
                    : "\u0644\u0627 \u064A\u0648\u062C\u062F",
              ),
            ),
            React.createElement(
              "div",
              { className: "text-xs", style: { color: "var(--text-muted)" } },
              "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u064A\u062F\u0648\u064A \u0623\u0639\u0644\u0627\u0647 \u0644\u0627 \u064A\u0634\u0645\u0644 \u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639\u060C \u0648\u062A\u064F\u062D\u062A\u0633\u0628 \u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0641\u064A \u0627\u0644\u0645\u0644\u062E\u0635 \u0623\u062F\u0646\u0627\u0647 \u0628\u0634\u0643\u0644 \u0645\u0646\u0641\u0635\u0644.",
            ),
            React.createElement(
              "div",
              { className: "grid grid-cols-3 gap-2 text-xs" },
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2",
                  style: { background: "var(--divider)" },
                },
                React.createElement(
                  "div",
                  { style: { color: "var(--text-muted)" } },
                  "\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
                ),
                React.createElement(
                  "strong",
                  { style: { color: "var(--text-strong)" } },
                  N(V.cost),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2",
                  style: { background: "var(--good-bg)" },
                },
                React.createElement(
                  "div",
                  { style: { color: "var(--text-muted)" } },
                  "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0648\u0627\u0635\u0644",
                ),
                React.createElement(
                  "strong",
                  { style: { color: "var(--success)" } },
                  N(V.paid),
                ),
              ),
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2",
                  style: {
                    background: ue ? "var(--warn-bg)" : "var(--good-bg)",
                  },
                },
                React.createElement(
                  "div",
                  { style: { color: "var(--text-muted)" } },
                  ue
                    ? "\u0627\u0644\u0628\u0627\u0642\u064A \u0627\u0644\u0639\u0627\u0645"
                    : "\u0627\u0644\u062D\u0627\u0644\u0629",
                ),
                React.createElement(
                  "strong",
                  { style: { color: ue ? "var(--danger)" : "var(--success)" } },
                  ue ? N(ue) : "\u062E\u0627\u0644\u0635",
                ),
              ),
            ),
            V.surplus > 0 &&
              React.createElement(
                "div",
                { className: "text-xs", style: { color: "var(--success)" } },
                "\u0632\u064A\u0627\u062F\u0629 \u0645\u062F\u0641\u0648\u0639\u0629 \u0641\u064A \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0643\u062A\u0645\u0644\u0629 (\u0631\u0635\u064A\u062F \u0644\u0644\u0639\u0645\u064A\u0644): ",
                N(V.surplus),
              ),
            ze.length > 0 &&
              React.createElement(
                "div",
                {
                  className: "rounded-lg p-2 text-xs flex flex-col gap-1",
                  style: { background: "var(--good-bg)" },
                },
                React.createElement(
                  "div",
                  {
                    className: "font-medium",
                    style: { color: "var(--success)" },
                  },
                  "\u062F\u0641\u0639\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u062F\u0648\u0646 \u0645\u0634\u0631\u0648\u0639: ",
                  N(Me),
                ),
                ze.map((_) =>
                  React.createElement(
                    "div",
                    {
                      key: _.id,
                      className: "flex items-center justify-between",
                      style: { color: "var(--text-body)" },
                    },
                    React.createElement(
                      "span",
                      null,
                      _.date,
                      _.description ? " \xB7 " + _.description : "",
                    ),
                    React.createElement("span", null, N(_.amount)),
                  ),
                ),
              ),
            o.length === 0
              ? React.createElement(
                  "div",
                  {
                    className: "text-xs",
                    style: { color: "var(--text-muted)" },
                  },
                  "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0639\u062F",
                )
              : React.createElement(
                  "div",
                  {
                    className: "flex flex-col divide-y",
                    style: { borderColor: "var(--divider)" },
                  },
                  o.map((_) => {
                    const z = Ce(_, l),
                      J = z.cost;
                    return React.createElement(
                      "button",
                      {
                        key: _.id,
                        onClick: () => {
                          (c(_.id), d());
                        },
                        className:
                          "flex items-center justify-between py-2 text-right",
                        style: { borderColor: "var(--divider)" },
                      },
                      React.createElement(
                        "div",
                        null,
                        React.createElement(
                          "div",
                          {
                            className: "text-sm",
                            style: { color: "var(--text-body)" },
                          },
                          _.location ||
                            "\u0628\u062F\u0648\u0646 \u0645\u0648\u0642\u0639",
                        ),
                        React.createElement(
                          "div",
                          {
                            className: "text-xs",
                            style: { color: "var(--text-muted)" },
                          },
                          _.dateCreated,
                          " \xB7 ",
                          _.productType,
                        ),
                      ),
                      React.createElement(
                        "div",
                        { className: "flex items-center gap-2" },
                        React.createElement(
                          se,
                          { bg: je(_.status).bg, fg: je(_.status).fg },
                          _.status,
                        ),
                        React.createElement(
                          "span",
                          {
                            className: "text-xs",
                            style: {
                              color: z.remaining
                                ? "var(--danger)"
                                : "var(--success)",
                            },
                          },
                          z.remaining
                            ? `\u0628\u0627\u0642\u064A ${N(z.remaining)}`
                            : z.surplus
                              ? `\u0631\u0635\u064A\u062F ${N(z.surplus)}`
                              : z.settled
                                ? "\u062E\u0627\u0644\u0635"
                                : "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0643\u064A\u0644",
                        ),
                        React.createElement(
                          "span",
                          {
                            className: "text-sm font-medium",
                            style: { color: "var(--text-strong)" },
                          },
                          N(J),
                        ),
                      ),
                    );
                  }),
                ),
          ),
        React.createElement(
          "div",
          {
            className: "rounded-xl border p-3 flex flex-col gap-2",
            style: { borderColor: "var(--card-border)" },
          },
          React.createElement(
            R,
            null,
            a === "\u0645\u0648\u0631\u062F\u0648\u0646"
              ? "\u062D\u0631\u0643\u0629 \u064A\u062F\u0648\u064A\u0629 (\u063A\u064A\u0631 \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0641\u0627\u062A\u0648\u0631\u0629)"
              : "\u062A\u0633\u062C\u064A\u0644 \u062D\u0631\u0643\u0629 \u062C\u062F\u064A\u062F\u0629",
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-2 gap-2" },
            React.createElement(
              me,
              { value: h, onChange: (_) => $(_.target.value) },
              React.createElement(
                "option",
                { value: "debit" },
                a === "\u0645\u0648\u0631\u062F\u0648\u0646"
                  ? "\u0632\u064A\u0627\u062F\u0629 \u0645\u0633\u062A\u062D\u0642 \u0639\u0644\u064A\u0646\u0627"
                  : "\u0632\u064A\u0627\u062F\u0629 \u062F\u064A\u0646 \u0639\u0644\u064A\u0647",
              ),
              React.createElement(
                "option",
                { value: "credit" },
                a === "\u0645\u0648\u0631\u062F\u0648\u0646"
                  ? "\u0631\u0635\u064A\u062F \u0644\u0646\u0627 / \u062A\u0633\u0648\u064A\u0629"
                  : "\u062A\u0633\u062F\u064A\u062F / \u062F\u0641\u0639\u0629 \u0645\u0646\u0647",
              ),
            ),
            React.createElement(E, {
              type: "number",
              placeholder: "\u0627\u0644\u0645\u0628\u0644\u063A",
              value: B,
              onChange: (_) => S(_.target.value),
            }),
          ),
          React.createElement(E, {
            placeholder:
              "\u0645\u0644\u0627\u062D\u0638\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
            value: T,
            onChange: (_) => f(_.target.value),
          }),
          React.createElement(
            K,
            { onClick: Re, full: !0, disabled: !B },
            React.createElement(D, { name: "plus", size: 16 }),
            " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629",
          ),
        ),
        L.length === 0
          ? React.createElement(ae, {
              icon: t,
              title:
                "\u0644\u0627 \u062A\u0648\u062C\u062F \u062D\u0631\u0643\u0627\u062A \u0645\u0633\u062C\u0651\u0644\u0629 \u0628\u0639\u062F",
            })
          : React.createElement(
              "div",
              {
                className: "flex flex-col divide-y",
                style: { borderColor: "var(--divider)" },
              },
              L.map((_) =>
                React.createElement(
                  "div",
                  {
                    key: _.id,
                    className: "flex items-center justify-between py-2.5",
                    style: { borderColor: "var(--divider)" },
                  },
                  React.createElement(
                    "div",
                    { className: "flex items-center gap-2" },
                    React.createElement(D, {
                      name: _.type === "debit" ? "trendUp" : "trendDown",
                      size: 14,
                      color:
                        _.type === "debit" ? "var(--danger)" : "var(--success)",
                    }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "div",
                        {
                          className: "text-sm",
                          style: { color: "var(--text-body)" },
                        },
                        _.note ||
                          (_.type === "debit"
                            ? "\u0632\u064A\u0627\u062F\u0629 \u062F\u064A\u0646"
                            : "\u062A\u0633\u062F\u064A\u062F"),
                      ),
                      React.createElement(
                        "div",
                        {
                          className: "text-xs",
                          style: { color: "var(--text-muted)" },
                        },
                        _.date,
                      ),
                    ),
                  ),
                  React.createElement(
                    "div",
                    { className: "flex items-center gap-3" },
                    React.createElement(
                      "span",
                      {
                        className: "font-medium",
                        style: {
                          color:
                            _.type === "debit"
                              ? "var(--danger)"
                              : "var(--success)",
                        },
                      },
                      _.type === "debit" ? "+" : "\u2212",
                      N(_.amount),
                    ),
                    O === _.id
                      ? React.createElement(ge, {
                          onConfirm: () => Xe(_.id),
                          onCancel: () => C(null),
                        })
                      : React.createElement(
                          "button",
                          {
                            onClick: () => C(_.id),
                            style: { color: "var(--text-muted)" },
                          },
                          React.createElement(D, { name: "trash", size: 13 }),
                        ),
                  ),
                ),
              ),
            ),
        React.createElement(
          "div",
          {
            className: "pt-3 border-t flex flex-col items-end gap-2",
            style: { borderColor: "var(--card-border)" },
          },
          w
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  {
                    className: "text-xs text-right",
                    style: {
                      color:
                        i.length || (o != null && o.length)
                          ? "var(--danger)"
                          : "var(--text-muted)",
                    },
                  },
                  i.length || (o != null && o.length)
                    ? `\u062A\u0646\u0628\u064A\u0647: \u0644\u0647\u0630\u0647 \u0627\u0644\u062C\u0647\u0629 ${(o == null ? void 0 : o.length) || 0} \u0645\u0634\u0631\u0648\u0639\u064B\u0627 \u0648${i.length} \u0641\u0627\u062A\u0648\u0631\u0629. \u0627\u0644\u062D\u0630\u0641 \u0644\u0646 \u064A\u062D\u0630\u0641 \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629.`
                    : "\u062D\u0630\u0641 \u0646\u0647\u0627\u0626\u064A\u064B\u0627\u061F",
                ),
                React.createElement(ge, {
                  label:
                    "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641",
                  onConfirm: W,
                  onCancel: () => x(!1),
                }),
              )
            : React.createElement(
                "button",
                {
                  onClick: () => x(!0),
                  className: "text-xs flex items-center gap-1",
                  style: { color: "var(--danger)" },
                },
                React.createElement(D, { name: "trash", size: 13 }),
                " \u062D\u0630\u0641",
              ),
        ),
      ),
    );
  }
  function ta({ workers: e, attendance: a, upsert: t, remove: r }) {
    const [i, d] = y(Z()),
      b = a.filter((m) => m.date === i),
      v = (m) => {
        var u;
        return (u = b.find((w) => w.workerId === m)) == null
          ? void 0
          : u.status;
      },
      o = (m, u) =>
        t("attendance", {
          id: m.id + "_" + i,
          workerId: m.id,
          workerName: m.name,
          date: i,
          status: u,
        }),
      l = re(i),
      c = a.filter((m) => re(m.date) === l),
      p = e.map((m) => ({
        name: m.name,
        present: c.filter(
          (u) => u.workerId === m.id && u.status === "\u062D\u0627\u0636\u0631",
        ).length,
        half: c.filter(
          (u) =>
            u.workerId === m.id &&
            u.status === "\u0646\u0635\u0641 \u064A\u0648\u0645",
        ).length,
        absent: c.filter(
          (u) => u.workerId === m.id && u.status === "\u063A\u0627\u0626\u0628",
        ).length,
      }));
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          {
            className: "text-xl font-bold",
            style: {
              fontFamily: "'El Messiri', sans-serif",
              color: "var(--text-strong)",
            },
          },
          "\u062D\u0636\u0648\u0631 \u0627\u0644\u0639\u0645\u0627\u0644",
        ),
        React.createElement(
          "p",
          {
            className: "text-sm mt-0.5",
            style: { color: "var(--text-muted)" },
          },
          "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062D\u0636\u0648\u0631 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0644\u062E\u0635 \u0627\u0644\u0634\u0647\u0631\u064A",
        ),
      ),
      React.createElement(
        "div",
        { className: "flex items-center gap-2" },
        React.createElement(
          R,
          null,
          "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
        ),
      ),
      React.createElement(E, {
        type: "date",
        value: i,
        onChange: (m) => d(m.target.value),
        className: "max-w-[200px]",
      }),
      e.length === 0
        ? React.createElement(ae, {
            icon: "users",
            title:
              "\u0644\u0627 \u064A\u0648\u062C\u062F \u0639\u0645\u0627\u0644 \u0645\u0633\u062C\u0651\u0644\u0648\u0646 \u0628\u0639\u062F",
            sub: "\u0623\u0636\u0641 \u0627\u0644\u0639\u0645\u0627\u0644 \u0645\u0646 \u0642\u0633\u0645 \xAB\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0648\u0627\u0644\u062F\u064A\u0648\u0646\xBB \u062B\u0645 \u0639\u062F \u0647\u0646\u0627 \u0644\u062A\u0633\u062C\u064A\u0644 \u062D\u0636\u0648\u0631\u0647\u0645",
          })
        : React.createElement(
            "div",
            {
              className: "rounded-2xl border overflow-hidden",
              style: {
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              },
            },
            React.createElement(
              "div",
              {
                className: "flex flex-col divide-y",
                style: { borderColor: "var(--divider)" },
              },
              e.map((m) => {
                const u = v(m.id);
                return React.createElement(
                  "div",
                  {
                    key: m.id,
                    className:
                      "flex items-center justify-between px-4 py-3 gap-2 flex-wrap",
                    style: { borderColor: "var(--divider)" },
                  },
                  React.createElement(
                    "div",
                    {
                      className:
                        "text-sm font-medium flex items-center gap-1.5",
                      style: { color: "var(--text-strong)" },
                    },
                    React.createElement(D, { name: "user", size: 14 }),
                    " ",
                    m.name,
                  ),
                  React.createElement(
                    "div",
                    { className: "flex gap-1.5" },
                    Pt.map((w) =>
                      React.createElement(
                        "button",
                        {
                          key: w,
                          onClick: () => o(m, w),
                          className:
                            "text-xs px-3 py-1.5 rounded-lg border transition",
                          style:
                            u === w
                              ? {
                                  background: Ue[w].bg,
                                  borderColor: Ue[w].fg,
                                  color: Ue[w].fg,
                                }
                              : {
                                  background: "var(--card-bg)",
                                  borderColor: "var(--card-border)",
                                  color: "var(--text-muted)",
                                },
                        },
                        w,
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),
      e.length > 0 &&
        React.createElement(
          "div",
          {
            className: "rounded-2xl border p-4",
            style: {
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            },
          },
          React.createElement(
            "h3",
            {
              className: "font-semibold text-sm mb-3",
              style: { color: "var(--text-body)" },
            },
            "\u0645\u0644\u062E\u0635 \u0634\u0647\u0631 ",
            l,
          ),
          React.createElement(
            "div",
            {
              className: "flex flex-col divide-y",
              style: { borderColor: "var(--divider)" },
            },
            React.createElement(
              "div",
              {
                className:
                  "flex items-center justify-between py-2 text-xs font-medium",
                style: { color: "var(--text-muted)" },
              },
              React.createElement(
                "span",
                null,
                "\u0627\u0644\u0639\u0627\u0645\u0644",
              ),
              React.createElement(
                "span",
                null,
                "\u062D\u0627\u0636\u0631 / \u0646\u0635\u0641 \u064A\u0648\u0645 / \u063A\u0627\u0626\u0628",
              ),
            ),
            p.map((m) =>
              React.createElement(
                "div",
                {
                  key: m.name,
                  className: "flex items-center justify-between py-2 text-sm",
                  style: {
                    color: "var(--text-body)",
                    borderColor: "var(--divider)",
                  },
                },
                React.createElement("span", null, m.name),
                React.createElement(
                  "span",
                  { className: "flex items-center gap-2" },
                  React.createElement(
                    se,
                    { bg: "var(--good-bg)", fg: "var(--success)" },
                    m.present,
                  ),
                  React.createElement(
                    se,
                    { bg: "var(--warn-bg)", fg: "var(--warning)" },
                    m.half,
                  ),
                  React.createElement(
                    se,
                    { bg: "var(--divider)", fg: "var(--text-muted)" },
                    m.absent,
                  ),
                ),
              ),
            ),
          ),
        ),
    );
  }
  function aa({
    month: e,
    setMonth: a,
    projects: t,
    invoices: r,
    expenses: i,
    income: d,
    attendance: b,
    workers: v,
    customers: o,
    suppliers: l,
    downloadsNs: c,
  }) {
    const p = (s, g) => s.filter((A) => re(A[g || "date"]) === e),
      m = Ie(t, d),
      u = p(m),
      w = p(i),
      x = p(r),
      h = u.reduce((s, g) => s + Number(g.amount || 0), 0),
      $ = w.reduce((s, g) => s + Number(g.amount || 0), 0),
      B = x.reduce((s, g) => s + Number(g.amount || 0), 0),
      S = He(r, l, e),
      T = h - $ - S,
      f = t.filter((s) => s.completedAt && re(s.completedAt) === e),
      O = t.filter((s) => re(s.dateCreated) === e),
      C = Qe.map((s) => ({
        label: s,
        total: w
          .filter((g) => g.type === s)
          .reduce((g, A) => g + Number(A.amount || 0), 0),
      })).filter((s) => s.total > 0),
      q = De.map((s) => ({
        label: s,
        total: x
          .filter((g) => g.type === s)
          .reduce((g, A) => g + Number(A.amount || 0), 0),
      })).filter((s) => s.total > 0),
      F = b.filter((s) => re(s.date) === e),
      U = v
        .map((s) => ({
          name: s.name,
          present: F.filter(
            (g) =>
              g.workerId === s.id && g.status === "\u062D\u0627\u0636\u0631",
          ).length,
          half: F.filter(
            (g) =>
              g.workerId === s.id &&
              g.status === "\u0646\u0635\u0641 \u064A\u0648\u0645",
          ).length,
          absent: F.filter(
            (g) =>
              g.workerId === s.id && g.status === "\u063A\u0627\u0626\u0628",
          ).length,
        }))
        .filter((s) => s.present + s.half + s.absent > 0),
      X = o
        .map((s) => {
          const g = Oe(s, t, d);
          return {
            name: s.name,
            phone: s.phone,
            ledger: g.ledger,
            projectsRemaining: g.projectsRemaining,
            projectsSurplus: g.projectsSurplus,
            directPaid: g.directPaid,
            total: g.total,
          };
        })
        .filter((s) => s.total > 0)
        .sort((s, g) => g.total - s.total),
      n = l
        .map((s) => {
          const g = Se(s, r);
          return {
            name: s.name,
            phone: s.phone,
            total: g.owed,
            credit: g.credit,
          };
        })
        .filter((s) => s.total > 0)
        .sort((s, g) => g.total - s.total),
      k = X.reduce((s, g) => s + g.total, 0),
      j = n.reduce((s, g) => s + g.total, 0),
      I = l.reduce((s, g) => s + Se(g, r).credit, 0);
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between flex-wrap gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            {
              className: "text-xl font-bold",
              style: {
                fontFamily: "'El Messiri', sans-serif",
                color: "var(--text-strong)",
              },
            },
            "\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0634\u0647\u0631\u064A\u0629",
          ),
          React.createElement(
            "p",
            {
              className: "text-sm mt-0.5",
              style: { color: "var(--text-muted)" },
            },
            "\u0645\u0644\u062E\u0635 \u0634\u0627\u0645\u0644 \u0644\u0623\u064A \u0634\u0647\u0631 \u062A\u062E\u062A\u0627\u0631\u0647 \u2014 \u0635\u0627\u0641\u064A \u0627\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629 = \u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A \u2212 \u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641 \u2212 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629 (\u0627\u0644\u0646\u0642\u062F\u064A\u0629 + \u0633\u062F\u0627\u062F \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646)",
          ),
        ),
        React.createElement(
          "div",
          { className: "flex items-center gap-2" },
          React.createElement(E, {
            type: "month",
            value: e,
            onChange: (s) => a(s.target.value),
            className: "max-w-[170px]",
          }),
          React.createElement(
            K,
            {
              onClick: async () => {
                if (!window.XLSX) {
                  G(
                    "\u0645\u064A\u0632\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0647\u0646\u0627 \u062D\u0627\u0644\u064A\u064B\u0627.",
                  );
                  return;
                }
                const s = XLSX.utils.book_new();
                (XLSX.utils.book_append_sheet(
                  s,
                  XLSX.utils.json_to_sheet([
                    {
                      الشهر: e,
                      الواردات: h,
                      المصاريف: $,
                      الفواتير: B,
                      "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0629":
                        S,
                      الصافي: T,
                    },
                  ]),
                  "\u0645\u0644\u062E\u0635",
                ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      u.map((P) => {
                        var L;
                        return {
                          الزبون: P.customerName,
                          المشروع:
                            ((L = t.find((Q) => Q.id === P.projectId)) == null
                              ? void 0
                              : L.customerName) || "",
                          "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":
                            P.projectId || "",
                          المبلغ: P.amount,
                          التاريخ: P.date,
                          الوصف: P.description,
                        };
                      }),
                    ),
                    "\u0627\u0644\u0648\u0627\u0631\u062F\u0627\u062A",
                  ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      w.map((P) => ({
                        النوع: P.type,
                        المبلغ: P.amount,
                        التاريخ: P.date,
                      })),
                    ),
                    "\u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641",
                  ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      x.map((P) => ({
                        النوع: P.type,
                        المورد: P.supplierName,
                        المبلغ: P.amount,
                        التاريخ: P.date,
                      })),
                    ),
                    "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631",
                  ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      f.map((P) => ({
                        الزبون: P.customerName,
                        الموقع: P.location,
                        الحالة: P.status,
                        "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0634\u0631\u0648\u0639":
                          P.dateCreated,
                        "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0643\u0645\u0627\u0644":
                          P.completedAt,
                        الإجمالي: Ye(P),
                      })),
                    ),
                    "\u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0643\u062A\u0645\u0644\u0629",
                  ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      Array.from(
                        new Map(
                          t.flatMap((P) =>
                            $e(P, d)
                              .filter((L) => re(L.date) === e)
                              .map((L) => [
                                L.paymentId || L.id,
                                {
                                  الزبون: P.customerName,
                                  "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639":
                                    P.id,
                                  "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u0641\u0639\u0629":
                                    L.date,
                                  المبلغ: L.amount,
                                  "\u0648\u0635\u0641 \u0627\u0644\u062F\u0641\u0639\u0629":
                                    L.description || "",
                                },
                              ]),
                          ),
                        ).values(),
                      ),
                    ),
                    "\u062F\u0641\u0639\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
                  ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      v.map((P) => {
                        const L = F.filter((Q) => Q.workerId === P.id);
                        return {
                          العامل: P.name,
                          حاضر: L.filter(
                            (Q) => Q.status === "\u062D\u0627\u0636\u0631",
                          ).length,
                          "\u0646\u0635\u0641 \u064A\u0648\u0645": L.filter(
                            (Q) =>
                              Q.status ===
                              "\u0646\u0635\u0641 \u064A\u0648\u0645",
                          ).length,
                          غائب: L.filter(
                            (Q) => Q.status === "\u063A\u0627\u0626\u0628",
                          ).length,
                        };
                      }),
                    ),
                    "\u062D\u0636\u0648\u0631 \u0627\u0644\u0639\u0645\u0627\u0644",
                  ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      X.length
                        ? X.map((P) => ({
                            العميل: P.name,
                            الهاتف: P.phone || "",
                            "\u0631\u0635\u064A\u062F \u064A\u062F\u0648\u064A":
                              P.ledger,
                            "\u0628\u0627\u0642\u064A \u0645\u0634\u0627\u0631\u064A\u0639":
                              P.projectsRemaining,
                            "\u0631\u0635\u064A\u062F \u0641\u0627\u0626\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639":
                              P.projectsSurplus || 0,
                            "\u062F\u0641\u0639\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629":
                              P.directPaid || 0,
                            "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642":
                              P.total,
                          }))
                        : [
                            {
                              "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0633\u062A\u062D\u0642\u0627\u062A":
                                "",
                            },
                          ],
                    ),
                    "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
                  ),
                  XLSX.utils.book_append_sheet(
                    s,
                    XLSX.utils.json_to_sheet(
                      n.length
                        ? n.map((P) => ({
                            المورد: P.name,
                            الهاتف: P.phone || "",
                            "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u0633\u062A\u062D\u0642":
                              P.total,
                          }))
                        : [
                            {
                              "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0633\u062A\u062D\u0642\u0627\u062A":
                                "",
                            },
                          ],
                    ),
                    "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0644\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
                  ));
                const g = XLSX.write(s, { type: "array", bookType: "xlsx" }),
                  A = new Blob([g], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  }),
                  W = `\u062A\u0642\u0631\u064A\u0631-${e}.xlsx`;
                if (c)
                  try {
                    await c.save({ filename: W, data: A });
                  } catch (P) {
                    console.error(P);
                  }
                else Ke(A, W);
              },
            },
            React.createElement(D, { name: "download", size: 16 }),
            " \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062A\u0642\u0631\u064A\u0631",
          ),
          React.createElement(
            he,
            {
              onClick: () =>
                Xt({
                  month: e,
                  projects: t,
                  invoices: r,
                  expenses: i,
                  income: d,
                  customers: o,
                  suppliers: l,
                }),
            },
            React.createElement(D, { name: "receipt", size: 16 }),
            " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u062A\u0642\u0631\u064A\u0631",
          ),
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 lg:grid-cols-4 gap-3" },
        React.createElement(te, {
          icon: "trendUp",
          label:
            "\u0648\u0627\u0631\u062F\u0627\u062A \u0627\u0644\u0634\u0647\u0631",
          value: N(h),
          accent: "var(--success)",
        }),
        React.createElement(te, {
          icon: "trendDown",
          label:
            "\u0645\u0635\u0627\u0631\u064A\u0641 \u0627\u0644\u0634\u0647\u0631",
          value: N($),
          accent: "var(--danger)",
        }),
        React.createElement(te, {
          icon: "receipt",
          label:
            "\u0641\u0648\u0627\u062A\u064A\u0631 \u0627\u0644\u0634\u0647\u0631",
          value: N(B),
          sub:
            "\u0627\u0644\u0645\u062F\u0641\u0648\u0639 \u0641\u0639\u0644\u064A\u064B\u0627: " +
            N(S),
          accent: "var(--warning)",
        }),
        React.createElement(te, {
          icon: T >= 0 ? "trendUp" : "trendDown",
          label:
            "\u0635\u0627\u0641\u064A \u0627\u0644\u062D\u0631\u0643\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629",
          value: N(T),
          accent: T >= 0 ? "var(--success)" : "var(--danger)",
        }),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          {
            className: "text-sm font-semibold mb-3",
            style: { color: "var(--text-body)" },
          },
          "\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u062D\u062A\u0649 \u0627\u0644\u064A\u0648\u0645 \u2014 \u0639\u0645\u0644\u0627\u0621 \u0648\u0645\u0648\u0631\u062F\u0648\u0646",
        ),
        React.createElement(
          "div",
          { className: "grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3" },
          React.createElement(te, {
            icon: "users",
            label:
              "\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0633\u062A\u062D\u0642 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 (\u0644\u0646\u0627)",
            value: N(k),
            sub:
              X.length + " \u0639\u0645\u064A\u0644 \u0645\u062F\u064A\u0646",
            accent: "var(--accent)",
          }),
          React.createElement(te, {
            icon: "briefcase",
            label:
              "\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0633\u062A\u062D\u0642 \u0644\u0644\u0645\u0648\u0631\u062F\u064A\u0646 (\u0639\u0644\u064A\u0646\u0627)",
            value: N(j),
            sub:
              n.length +
              " \u0645\u0648\u0631\u0651\u062F \u0644\u0647 \u0645\u0633\u062A\u062D\u0642\u0627\u062A",
            accent: "var(--complete-fg)",
          }),
          React.createElement(te, {
            icon: "wallet",
            label:
              "\u0625\u062C\u0645\u0627\u0644\u064A \u0645\u0633\u062A\u062D\u0642 \u0644\u0646\u0627 \u0645\u0646 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
            value: N(I),
            sub: "\u062F\u0641\u0639\u0627\u062A \u0632\u0627\u0626\u062F\u0629 \u0623\u0648 \u0623\u0631\u0635\u062F\u0629 \u062F\u0627\u0626\u0646\u0629",
            accent: "var(--success)",
          }),
        ),
        React.createElement(
          "div",
          { className: "grid lg:grid-cols-2 gap-4" },
          React.createElement(
            "div",
            {
              className: "rounded-2xl border p-4",
              style: {
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              },
            },
            React.createElement(
              "h3",
              {
                className: "font-semibold text-sm mb-3",
                style: { color: "var(--text-body)" },
              },
              "\u062A\u0641\u0635\u064A\u0644 \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
            ),
            X.length === 0
              ? React.createElement(ae, {
                  icon: "users",
                  title:
                    "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u062D\u0627\u0644\u064A\u064B\u0627",
                })
              : React.createElement(
                  "div",
                  {
                    className: "flex flex-col divide-y",
                    style: { borderColor: "var(--divider)" },
                  },
                  X.map((s) =>
                    React.createElement(
                      "div",
                      {
                        key: s.name,
                        className:
                          "flex items-center justify-between py-2 text-sm",
                        style: { borderColor: "var(--divider)" },
                      },
                      React.createElement(
                        "div",
                        null,
                        React.createElement(
                          "div",
                          { style: { color: "var(--text-body)" } },
                          s.name,
                        ),
                        s.phone &&
                          React.createElement(
                            "div",
                            {
                              className: "text-xs",
                              style: { color: "var(--text-muted)" },
                            },
                            s.phone,
                          ),
                      ),
                      React.createElement(
                        "span",
                        {
                          className: "font-semibold",
                          style: { color: "var(--danger)" },
                        },
                        N(s.total),
                      ),
                    ),
                  ),
                ),
          ),
          React.createElement(
            "div",
            {
              className: "rounded-2xl border p-4",
              style: {
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              },
            },
            React.createElement(
              "h3",
              {
                className: "font-semibold text-sm mb-3",
                style: { color: "var(--text-body)" },
              },
              "\u062A\u0641\u0635\u064A\u0644 \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646",
            ),
            n.length === 0
              ? React.createElement(ae, {
                  icon: "briefcase",
                  title:
                    "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0644\u0644\u0645\u0648\u0631\u062F\u064A\u0646 \u062D\u0627\u0644\u064A\u064B\u0627",
                })
              : React.createElement(
                  "div",
                  {
                    className: "flex flex-col divide-y",
                    style: { borderColor: "var(--divider)" },
                  },
                  n.map((s) =>
                    React.createElement(
                      "div",
                      {
                        key: s.name,
                        className:
                          "flex items-center justify-between py-2 text-sm",
                        style: { borderColor: "var(--divider)" },
                      },
                      React.createElement(
                        "div",
                        null,
                        React.createElement(
                          "div",
                          { style: { color: "var(--text-body)" } },
                          s.name,
                        ),
                        s.phone &&
                          React.createElement(
                            "div",
                            {
                              className: "text-xs",
                              style: { color: "var(--text-muted)" },
                            },
                            s.phone,
                          ),
                      ),
                      React.createElement(
                        "span",
                        {
                          className: "font-semibold",
                          style: { color: "var(--danger)" },
                        },
                        N(s.total),
                      ),
                    ),
                  ),
                ),
          ),
        ),
        React.createElement(
          "div",
          { className: "text-xs mt-2", style: { color: "var(--text-muted)" } },
          "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u062A\u0634\u0645\u0644 \u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u064A\u062F\u0648\u064A + \u0628\u0627\u0642\u064A \u0643\u0644 \u0645\u0634\u0627\u0631\u064A\u0639\u0647\u0645 \u063A\u064A\u0631 \u0627\u0644\u0645\u0633\u062F\u062F\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644. \u0647\u0630\u0647 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0644\u062D\u0638\u064A\u0629 (\u062D\u062A\u0649 \u0627\u0644\u064A\u0648\u0645) \u0648\u0644\u064A\u0633\u062A \u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631 \u0641\u0642\u0637.",
        ),
      ),
      React.createElement(
        "div",
        { className: "grid lg:grid-cols-2 gap-4" },
        React.createElement(
          "div",
          {
            className: "rounded-2xl border p-4",
            style: {
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            },
          },
          React.createElement(
            "h3",
            {
              className: "font-semibold text-sm mb-3",
              style: { color: "var(--text-body)" },
            },
            "\u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641 \u062D\u0633\u0628 \u0627\u0644\u0646\u0648\u0639",
          ),
          C.length === 0
            ? React.createElement(ae, {
                icon: "wallet",
                title:
                  "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0635\u0627\u0631\u064A\u0641 \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",
              })
            : React.createElement(et, { rows: C }),
        ),
        React.createElement(
          "div",
          {
            className: "rounded-2xl border p-4",
            style: {
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            },
          },
          React.createElement(
            "h3",
            {
              className: "font-semibold text-sm mb-3",
              style: { color: "var(--text-body)" },
            },
            "\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 \u062D\u0633\u0628 \u0627\u0644\u0646\u0648\u0639",
          ),
          q.length === 0
            ? React.createElement(ae, {
                icon: "receipt",
                title:
                  "\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u0648\u0627\u062A\u064A\u0631 \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",
              })
            : React.createElement(et, { rows: q }),
        ),
      ),
      React.createElement(
        "div",
        {
          className: "rounded-2xl border p-4",
          style: {
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          },
        },
        React.createElement(
          "h3",
          {
            className: "font-semibold text-sm mb-3",
            style: { color: "var(--text-body)" },
          },
          "\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0643\u062A\u0645\u0644\u062A \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631 (",
          f.length,
          ")",
        ),
        f.length === 0
          ? React.createElement(ae, {
              icon: "factory",
              title:
                "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0643\u062A\u0645\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",
            })
          : React.createElement(
              "div",
              {
                className: "flex flex-col divide-y",
                style: { borderColor: "var(--divider)" },
              },
              f.map((s) =>
                React.createElement(
                  "div",
                  {
                    key: s.id,
                    className: "flex items-center justify-between py-2.5",
                    style: { borderColor: "var(--divider)" },
                  },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "div",
                      {
                        className: "text-sm",
                        style: { color: "var(--text-body)" },
                      },
                      s.customerName,
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "text-xs",
                        style: { color: "var(--text-muted)" },
                      },
                      s.location,
                    ),
                  ),
                  React.createElement(
                    "span",
                    {
                      className: "font-semibold",
                      style: { color: "var(--text-strong)" },
                    },
                    N(
                      (s.measurements || []).reduce(
                        (g, A) => g + Number(A.totalAmount || 0),
                        0,
                      ),
                    ),
                  ),
                ),
              ),
            ),
        React.createElement(
          "div",
          { className: "text-xs mt-3", style: { color: "var(--text-muted)" } },
          "\u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u062F\u064A\u062F\u0629 \u0628\u062F\u0623\u062A \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631: ",
          O.length,
        ),
      ),
      U.length > 0 &&
        React.createElement(
          "div",
          {
            className: "rounded-2xl border p-4",
            style: {
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            },
          },
          React.createElement(
            "h3",
            {
              className: "font-semibold text-sm mb-3",
              style: { color: "var(--text-body)" },
            },
            "\u0623\u064A\u0627\u0645 \u062D\u0636\u0648\u0631 \u0627\u0644\u0639\u0645\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",
          ),
          React.createElement(
            "div",
            {
              className: "flex flex-col divide-y",
              style: { borderColor: "var(--divider)" },
            },
            U.map((s) =>
              React.createElement(
                "div",
                {
                  key: s.name,
                  className: "flex items-center justify-between py-2 text-sm",
                  style: {
                    color: "var(--text-body)",
                    borderColor: "var(--divider)",
                  },
                },
                React.createElement("span", null, s.name),
                React.createElement(
                  "span",
                  { className: "flex items-center gap-2" },
                  React.createElement(
                    se,
                    { bg: "var(--good-bg)", fg: "var(--success)" },
                    "\u062D\u0627\u0636\u0631 ",
                    s.present,
                  ),
                  React.createElement(
                    se,
                    { bg: "var(--warn-bg)", fg: "var(--warning)" },
                    "\u0646\u0635\u0641 \u064A\u0648\u0645 ",
                    s.half,
                  ),
                  React.createElement(
                    se,
                    { bg: "var(--divider)", fg: "var(--text-muted)" },
                    "\u063A\u0627\u0626\u0628 ",
                    s.absent,
                  ),
                ),
              ),
            ),
          ),
        ),
    );
  }
  function ra({ data: e, upsert: a, remove: t }) {
    const [r, i] = y(!1),
      [d, b] = y(null),
      v = [...e].sort((c, p) => (p.date || "").localeCompare(c.date || "")),
      o = e
        .filter((c) => c.type === "\u0648\u0627\u0635\u0644")
        .reduce((c, p) => c + Number(p.amount || 0), 0),
      l = e
        .filter((c) => c.type === "\u0645\u0635\u0631\u0648\u0641")
        .reduce((c, p) => c + Number(p.amount || 0), 0);
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between flex-wrap gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            {
              className: "text-xl font-bold",
              style: {
                fontFamily: "'El Messiri', sans-serif",
                color: "var(--text-strong)",
              },
            },
            "\u0633\u062C\u0644\u064A \u0627\u0644\u0634\u062E\u0635\u064A",
          ),
          React.createElement(
            "p",
            {
              className: "text-sm mt-0.5",
              style: { color: "var(--text-muted)" },
            },
            "\u0645\u0627 \u0648\u0635\u0644\u0643 \u0645\u0646 \u0645\u0628\u0627\u0644\u063A \u0648\u0645\u0627 \u0635\u0631\u0641\u062A\u0647 \u2014 \u0633\u062C\u0644 \u062E\u0627\u0635 \u0628\u0643",
          ),
        ),
        React.createElement(
          K,
          { onClick: () => i(!0) },
          React.createElement(D, { name: "plus", size: 16 }),
          " \u062A\u0633\u062C\u064A\u0644 \u062D\u0631\u0643\u0629",
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-3 gap-3" },
        React.createElement(te, {
          icon: "trendUp",
          label:
            "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0648\u0627\u0635\u0644",
          value: N(o),
          accent: "var(--success)",
        }),
        React.createElement(te, {
          icon: "trendDown",
          label:
            "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641",
          value: N(l),
          accent: "var(--danger)",
        }),
        React.createElement(te, {
          icon: "wallet",
          label:
            "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0628\u064A\u062F\u064A",
          value: N(o - l),
          accent: "var(--warning)",
        }),
      ),
      v.length === 0
        ? React.createElement(ae, {
            icon: "wallet",
            title:
              "\u0644\u0627 \u062A\u0648\u062C\u062F \u062D\u0631\u0643\u0627\u062A \u0645\u0633\u062C\u0651\u0644\u0629 \u0628\u0639\u062F",
          })
        : React.createElement(
            "div",
            {
              className: "rounded-2xl border overflow-hidden",
              style: {
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              },
            },
            React.createElement(
              "div",
              {
                className: "flex flex-col divide-y",
                style: { borderColor: "var(--divider)" },
              },
              v.map((c) =>
                React.createElement(
                  "div",
                  {
                    key: c.id,
                    className:
                      "flex items-center justify-between px-4 py-3 gap-2",
                    style: { borderColor: "var(--divider)" },
                  },
                  React.createElement(
                    "div",
                    { className: "min-w-0" },
                    React.createElement(
                      "div",
                      {
                        className: "text-sm font-medium",
                        style: { color: "var(--text-body)" },
                      },
                      c.type,
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "text-xs mt-0.5",
                        style: { color: "var(--text-muted)" },
                      },
                      c.date,
                      " ",
                      c.description ? "\xB7 " + c.description : "",
                    ),
                  ),
                  React.createElement(
                    "div",
                    { className: "flex items-center gap-3 shrink-0" },
                    React.createElement(
                      "span",
                      {
                        className: "font-semibold",
                        style: {
                          color:
                            c.type === "\u0648\u0627\u0635\u0644"
                              ? "var(--success)"
                              : "var(--danger)",
                        },
                      },
                      c.type === "\u0648\u0627\u0635\u0644" ? "+" : "\u2212",
                      N(c.amount),
                    ),
                    d === c.id
                      ? React.createElement(ge, {
                          onConfirm: () => {
                            (t("personalLog", c.id), b(null));
                          },
                          onCancel: () => b(null),
                        })
                      : React.createElement(
                          "button",
                          {
                            onClick: () => b(c.id),
                            style: { color: "var(--text-muted)" },
                          },
                          React.createElement(D, { name: "trash", size: 14 }),
                        ),
                  ),
                ),
              ),
            ),
          ),
      r &&
        React.createElement(
          ce,
          {
            title: "\u062A\u0633\u062C\u064A\u0644 \u062D\u0631\u0643\u0629",
            onClose: () => i(!1),
          },
          React.createElement(oa, {
            onAdd: (c) => {
              (a("personalLog", c), i(!1));
            },
          }),
        ),
    );
  }
  function oa({ onAdd: e }) {
    const [a, t] = y("\u0648\u0627\u0635\u0644"),
      [r, i] = y(""),
      [d, b] = y(Z()),
      [v, o] = y("");
    return React.createElement(
      "div",
      { className: "flex flex-col gap-3" },
      React.createElement(
        "div",
        null,
        React.createElement(R, null, "\u0627\u0644\u0646\u0648\u0639"),
        React.createElement(
          me,
          { value: a, onChange: (c) => t(c.target.value) },
          React.createElement(
            "option",
            { value: "\u0648\u0627\u0635\u0644" },
            "\u0648\u0627\u0635\u0644 (\u0645\u0628\u0644\u063A \u0627\u0633\u062A\u0644\u0645\u062A\u0647)",
          ),
          React.createElement(
            "option",
            { value: "\u0645\u0635\u0631\u0648\u0641" },
            "\u0645\u0635\u0631\u0648\u0641 (\u0635\u0631\u0641\u062A\u0647)",
          ),
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(R, null, "\u0627\u0644\u0645\u0628\u0644\u063A"),
          React.createElement(E, {
            type: "number",
            value: r,
            onChange: (c) => i(c.target.value),
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
          ),
          React.createElement(E, {
            type: "date",
            value: d,
            onChange: (c) => b(c.target.value),
          }),
        ),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0648\u0635\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
        ),
        React.createElement(E, {
          value: v,
          onChange: (c) => o(c.target.value),
        }),
      ),
      React.createElement(
        K,
        {
          onClick: () => {
            if (!H(r) || Number(r) < 0) {
              G(
                "\u0627\u0644\u0645\u0628\u0644\u063A \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0648\u062C\u0628\u064B\u0627.",
              );
              return;
            }
            e({
              id: ne(),
              type: a,
              amount: Number(r),
              date: d,
              description: v.trim(),
            });
          },
          full: !0,
          disabled: !r,
        },
        React.createElement(D, { name: "plus", size: 16 }),
        " \u062D\u0641\u0638",
      ),
    );
  }
  function sa({ inventory: e, upsert: a, remove: t }) {
    const [r, i] = y(!1),
      [d, b] = y(null),
      [v, o] = y({}),
      l = ye({}),
      c = (u, w) => {
        ((l.current[u] = w), o((x) => ({ ...x, [u]: w })));
      },
      p = (u) => {
        var h, $, B;
        const w =
          ($ = l.current[u.id]) != null
            ? $
            : String((h = u.quantity) != null ? h : 0);
        if (w.trim() === "" || !pe(w)) {
          (G(
            "\u0623\u062F\u062E\u0644 \u0643\u0645\u064A\u0629 \u0635\u062D\u064A\u062D\u0629 \u063A\u064A\u0631 \u0633\u0627\u0644\u0628\u0629.",
          ),
            c(u.id, String((B = u.quantity) != null ? B : 0)));
          return;
        }
        const x = Number(w);
        (x !== Number(u.quantity) && a("inventory", { ...u, quantity: x }),
          c(u.id, String(x)));
      },
      m = (u, w) => {
        const x = l.current[u.id],
          h =
            x !== void 0 && x.trim() !== "" && pe(x)
              ? Number(x)
              : Number(u.quantity);
        if (!Number.isFinite(h)) return;
        const $ = Math.max(0, h + w);
        (c(u.id, String($)), a("inventory", { ...u, quantity: $ }));
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-5" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between flex-wrap gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            {
              className: "text-xl font-bold",
              style: {
                fontFamily: "'El Messiri', sans-serif",
                color: "var(--text-strong)",
              },
            },
            "\u0627\u0644\u0645\u062E\u0632\u0648\u0646",
          ),
          React.createElement(
            "p",
            {
              className: "text-sm mt-0.5",
              style: { color: "var(--text-muted)" },
            },
            "\u0628\u0636\u0627\u0639\u0629 \u0645\u062E\u0632\u0651\u0646\u0629 \u0641\u064A \u0627\u0644\u0645\u0643\u062A\u0628 \u0648\u0645\u062A\u0627\u0628\u0639\u0629 \u0646\u0642\u0635\u0647\u0627",
          ),
        ),
        React.createElement(
          K,
          { onClick: () => i(!0) },
          React.createElement(D, { name: "plus", size: 16 }),
          " \u0645\u0627\u062F\u0629 \u062C\u062F\u064A\u062F\u0629",
        ),
      ),
      e.length === 0
        ? React.createElement(ae, {
            icon: "package",
            title:
              "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0648\u0627\u062F \u0645\u0633\u062C\u0651\u0644\u0629 \u0641\u064A \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
          })
        : React.createElement(
            "div",
            { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" },
            e.map((u) => {
              var x, h;
              const w = Number(u.quantity) <= Number(u.minThreshold || 0);
              return React.createElement(
                "div",
                {
                  key: u.id,
                  className: "rounded-2xl border p-4 flex flex-col gap-3",
                  style: {
                    borderColor: w
                      ? "var(--warn-border)"
                      : "var(--card-border)",
                    background: w ? "var(--warn-bg)" : "var(--card-bg)",
                  },
                },
                React.createElement(
                  "div",
                  { className: "flex items-start justify-between" },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "div",
                      {
                        className: "font-medium",
                        style: { color: "var(--text-strong)" },
                      },
                      u.name,
                    ),
                    w &&
                      React.createElement(
                        "div",
                        {
                          className: "text-xs flex items-center gap-1 mt-0.5",
                          style: { color: "var(--danger)" },
                        },
                        React.createElement(D, { name: "alert", size: 11 }),
                        " \u0645\u0646\u062E\u0641\u0636",
                      ),
                  ),
                  d === u.id
                    ? React.createElement(ge, {
                        onConfirm: () => {
                          (t("inventory", u.id), b(null));
                        },
                        onCancel: () => b(null),
                      })
                    : React.createElement(
                        "button",
                        {
                          onClick: () => b(u.id),
                          style: { color: "var(--text-muted)" },
                        },
                        React.createElement(D, { name: "trash", size: 14 }),
                      ),
                ),
                React.createElement(
                  "div",
                  { className: "flex items-center justify-between" },
                  React.createElement(
                    "div",
                    { className: "flex items-center gap-2" },
                    React.createElement(
                      "button",
                      {
                        onClick: () => m(u, -1),
                        className:
                          "w-7 h-7 rounded-lg border flex items-center justify-center",
                        style: {
                          borderColor: "var(--card-border)",
                          color: "var(--text-body)",
                        },
                      },
                      "\u2212",
                    ),
                    React.createElement(E, {
                      className: "w-[88px] text-center font-bold",
                      type: "number",
                      min: "0",
                      step: "any",
                      "aria-label": `\u0643\u0645\u064A\u0629 ${u.name}`,
                      value:
                        (h = v[u.id]) != null
                          ? h
                          : String((x = u.quantity) != null ? x : 0),
                      onChange: ($) => c(u.id, $.target.value),
                      onBlur: () => p(u),
                      onKeyDown: ($) => {
                        $.key === "Enter" && (p(u), $.currentTarget.blur());
                      },
                    }),
                    React.createElement(
                      "button",
                      {
                        onClick: () => m(u, 1),
                        className:
                          "w-7 h-7 rounded-lg border flex items-center justify-center",
                        style: {
                          borderColor: "var(--card-border)",
                          color: "var(--text-body)",
                        },
                      },
                      "+",
                    ),
                  ),
                  React.createElement(
                    "span",
                    {
                      className: "text-xs",
                      style: { color: "var(--text-muted)" },
                    },
                    u.unit,
                  ),
                ),
                React.createElement(
                  "div",
                  {
                    className: "text-xs",
                    style: { color: "var(--text-muted)" },
                  },
                  "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649: ",
                  N(u.minThreshold),
                  " ",
                  u.unit,
                ),
              );
            }),
          ),
      r &&
        React.createElement(
          ce,
          {
            title:
              "\u0645\u0627\u062F\u0629 \u062C\u062F\u064A\u062F\u0629 \u0641\u064A \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
            onClose: () => i(!1),
          },
          React.createElement(na, {
            existing: e,
            onAdd: (u) => {
              (a("inventory", u), i(!1));
            },
          }),
        ),
    );
  }
  function na({ onAdd: e, existing: a = [] }) {
    const [t, r] = y(""),
      [i, d] = y(""),
      [b, v] = y("\u0643\u064A\u0633"),
      [o, l] = y(""),
      c = () => {
        if (!t.trim() || !pe(i || 0) || !pe(o || 0)) {
          G(
            "\u0623\u062F\u062E\u0644 \u0643\u0645\u064A\u0627\u062A \u063A\u064A\u0631 \u0633\u0627\u0644\u0628\u0629.",
          );
          return;
        }
        if (qe(a, t)) {
          G(
            "\u0647\u0630\u0647 \u0627\u0644\u0645\u0627\u062F\u0629 \u0645\u0648\u062C\u0648\u062F\u0629 \u0645\u0633\u0628\u0642\u064B\u0627.",
          );
          return;
        }
        e({
          id: ne(),
          name: t.trim(),
          quantity: Number(i || 0),
          unit: b,
          minThreshold: Number(o || 0),
        });
      };
    return React.createElement(
      "div",
      { className: "flex flex-col gap-3" },
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u0627\u0633\u0645 \u0627\u0644\u0645\u0627\u062F\u0629",
        ),
        React.createElement(E, {
          list: "item-suggestions-2",
          value: t,
          onChange: (p) => r(p.target.value),
        }),
        React.createElement(
          "datalist",
          { id: "item-suggestions-2" },
          xt.map((p) => React.createElement("option", { key: p, value: p })),
        ),
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 gap-3" },
        React.createElement(
          "div",
          null,
          React.createElement(
            R,
            null,
            "\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629",
          ),
          React.createElement(E, {
            type: "number",
            value: i,
            onChange: (p) => d(p.target.value),
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(R, null, "\u0627\u0644\u0648\u062D\u062F\u0629"),
          React.createElement(
            me,
            { value: b, onChange: (p) => v(p.target.value) },
            React.createElement("option", null, "\u0643\u064A\u0633"),
            React.createElement("option", null, "\u0644\u062A\u0631"),
            React.createElement("option", null, "\u0645"),
            React.createElement("option", null, "\u0642\u0637\u0639\u0629"),
          ),
        ),
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          R,
          null,
          "\u062D\u062F \u0627\u0644\u062A\u0646\u0628\u064A\u0647 \u0639\u0646\u062F \u0627\u0644\u0646\u0642\u0635",
        ),
        React.createElement(E, {
          type: "number",
          value: o,
          onChange: (p) => l(p.target.value),
        }),
      ),
      React.createElement(
        K,
        { onClick: c, full: !0, disabled: !t.trim() },
        React.createElement(D, { name: "plus", size: 16 }),
        " \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
      ),
    );
  }
  function la() {
    const e = Ft();
    return _e
      ? e.loading
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement(Ae, null),
            React.createElement(
              "div",
              {
                dir: "rtl",
                className:
                  "min-h-screen flex items-center justify-center text-sm",
                style: {
                  background: "var(--bg)",
                  color: "var(--text-muted)",
                  fontFamily: "'Cairo', sans-serif",
                },
              },
              "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0633\u0627\u0628...",
            ),
          )
        : e.session
          ? e.error || !e.organization
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(Ae, null),
                React.createElement(
                  "div",
                  {
                    dir: "rtl",
                    className:
                      "min-h-screen flex items-center justify-center p-4 text-sm",
                    style: {
                      background: "var(--bg)",
                      color: "var(--danger)",
                      fontFamily: "'Cairo', sans-serif",
                    },
                  },
                  "\u062A\u0639\u0630\u0631 \u062A\u062C\u0647\u064A\u0632 \u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0634\u0631\u0643\u0629: ",
                  e.error ||
                    "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0638\u0645\u0629",
                ),
              )
            : React.createElement(
                React.Fragment,
                null,
                React.createElement(Ae, null),
                React.createElement(at, {
                  organizationId:
                    e.organization.organization_id || e.organization.id,
                  organizationCode: e.organization.invite_code,
                  email: e.session.user.email,
                  onSignOut: e.signOut,
                }),
              )
          : React.createElement(
              React.Fragment,
              null,
              React.createElement(Ae, null),
              React.createElement(Dt, { auth: e }),
            )
      : React.createElement(
          React.Fragment,
          null,
          React.createElement(Ae, null),
          React.createElement(at, null),
        );
  }
  const da = ReactDOM.createRoot(document.getElementById("root"));
  da.render(React.createElement(la, null));
})();
