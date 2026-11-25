/* Tiny SVG chart helpers for the data stories. No dependencies.
   Every chart: thin marks, recessive grid, hover tooltip, and a table view. */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  // UI words follow the page language (<html lang="en|pt-BR|es">)
  const UI = {
    en: { show: "Show the numbers", value: "Value", range: ["Low", "Middle", "High"] },
    pt: { show: "Ver os números", value: "Valor", range: ["Mínimo", "Meio", "Máximo"] },
    es: { show: "Ver los números", value: "Valor", range: ["Mínimo", "Medio", "Máximo"] },
  }[(document.documentElement.lang || "en").slice(0, 2)] || null;
  const W8 = UI || { show: "Show the numbers", value: "Value", range: ["Low", "Middle", "High"] };
  const tip = document.createElement("div");
  tip.className = "tip";
  tip.setAttribute("role", "status");
  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(tip));

  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function text(parent, x, y, s, attrs = {}) {
    const t = el("text", Object.assign({ x, y }, attrs), parent);
    t.textContent = s;
    return t;
  }
  function showTip(html, ev) {
    tip.innerHTML = html;
    tip.style.opacity = 1;
    const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
    let x = ev.clientX + pad, y = ev.clientY + pad;
    if (x + w > innerWidth - 8) x = ev.clientX - w - pad;
    if (y + h > innerHeight - 8) y = ev.clientY - h - pad;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }
  function hideTip() { tip.style.opacity = 0; }
  function bindTip(node, html) {
    node.addEventListener("mousemove", (e) => showTip(html, e));
    node.addEventListener("mouseleave", hideTip);
    node.setAttribute("tabindex", "0");
    node.addEventListener("focus", () => {
      const r = node.getBoundingClientRect();
      showTip(html, { clientX: r.right, clientY: r.top });
    });
    node.addEventListener("blur", hideTip);
  }
  function niceMax(v) {
    if (v <= 0) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    for (const m of [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) if (m * p >= v) return m * p;
    return 10 * p;
  }
  // rounded data-end, square at the baseline
  function barPath(x, y, w, h, r, horizontal) {
    r = Math.min(r, w / 2, Math.abs(h));
    if (h <= 0) return "";
    if (!horizontal) return `M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z`;
    // horizontal: x..x+h is length, y..y+w thickness
    return `M${x},${y}H${x + h - r}Q${x + h},${y} ${x + h},${y + r}V${y + w - r}Q${x + h},${y + w} ${x + h - r},${y + w}H${x}Z`;
  }
  function mount(host, draw) {
    const box = document.createElement("div");
    box.className = "chart";
    host.appendChild(box);
    let last = 0;
    const render = () => {
      const w = Math.round(box.clientWidth);
      if (!w || w === last) return;
      last = w;
      box.innerHTML = "";
      draw(box, w);
    };
    new ResizeObserver(render).observe(box);
    render();
  }
  function table(host, head, rows) {
    const d = document.createElement("details");
    d.className = "tbl";
    d.innerHTML = "<summary>" + W8.show + "</summary>";
    const t = document.createElement("table");
    t.innerHTML = "<thead><tr>" + head.map((h, i) => `<th${i ? ' class="n"' : ""}>${h}</th>`).join("") + "</tr></thead><tbody>" +
      rows.map((r) => "<tr>" + r.map((c, i) => `<td${i ? ' class="n"' : ""}>${c}</td>`).join("") + "</tr>").join("") + "</tbody>";
    d.appendChild(t);
    host.appendChild(d);
  }

  /* Vertical bars, one or two series. opts: {cats, series:[{name,color,values,colors?}], fmt, labels:'all'|'last'|'none', height} */
  function vbars(host, o) {
    mount(host, (box, W) => {
      const H = o.height || 240, m = { t: 22, r: 8, b: 30, l: 8 };
      const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": o.aria || "" }, box);
      const all = o.series.flatMap((s) => s.values);
      const max = niceMax(Math.max(...all) * 1.08);
      const iw = W - m.l - m.r, ih = H - m.t - m.b;
      const band = iw / o.cats.length, k = o.series.length;
      const bw = Math.min(56, (band * 0.62) / k);
      for (let g = 0; g <= 4; g++) {
        const y = m.t + ih - (ih * g) / 4;
        el("line", { x1: m.l, x2: W - m.r, y1: y, y2: y, class: g ? "grid" : "axis" }, svg);
      }
      o.cats.forEach((c, i) => {
        const cx = m.l + band * i + band / 2;
        text(svg, cx, H - 10, c, { "text-anchor": "middle" });
        o.series.forEach((s, j) => {
          const v = s.values[i];
          const h = (v / max) * ih;
          const x = cx - (k * bw + (k - 1) * 2) / 2 + j * (bw + 2);
          const color = (s.colors && s.colors[i]) || s.color;
          el("path", { d: barPath(x, m.t + ih - h, bw, h, 4), fill: color }, svg);
          const show = o.labels === "all" || (o.labels === "last" && i === o.cats.length - 1) || (o.labelIdx || []).includes(i);
          if (show) text(svg, x + bw / 2, m.t + ih - h - 6, o.fmt(v), { "text-anchor": "middle", class: "val" });
          const hit = el("rect", { x: cx - band / 2, y: m.t, width: band, height: ih, class: "hit" }, svg);
          if (j === 0) bindTip(hit, `<b>${c}</b><br>` + o.series.map((s2) => `<i style="background:${(s2.colors && s2.colors[i]) || s2.color}"></i>${s2.name}: <b>${o.fmt(s2.values[i])}</b>`).join("<br>"));
        });
      });
    });
    table(host, ["", ...o.series.map((s) => s.name)], o.cats.map((c, i) => [c, ...o.series.map((s) => o.fmt(s.values[i]))]));
  }

  /* Horizontal ranked bars. opts: {rows:[{label,value,color,note?}], fmt, unit} */
  function hbars(host, o) {
    mount(host, (box, W) => {
      const row = 30, m = { t: 6, r: 64, b: 6, l: Math.min(130, W * 0.32) };
      const H = m.t + m.b + row * o.rows.length;
      const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": o.aria || "" }, box);
      const max = Math.max(...o.rows.map((r) => r.value));
      const iw = W - m.l - m.r;
      el("line", { x1: m.l, x2: m.l, y1: m.t, y2: H - m.b, class: "axis" }, svg);
      o.rows.forEach((r, i) => {
        const y = m.t + row * i, bh = 14, w = Math.max(1.5, (r.value / max) * iw);
        text(svg, m.l - 10, y + row / 2 + 4, r.label, { "text-anchor": "end", class: r.strong ? "val" : "" });
        el("path", { d: barPath(m.l, y + (row - bh) / 2, bh, w, 4, true), fill: r.color }, svg);
        text(svg, m.l + w + 6, y + row / 2 + 4, o.fmt(r.value), { class: "val" });
        const hit = el("rect", { x: 0, y, width: W, height: row, class: "hit" }, svg);
        bindTip(hit, `<b>${r.label}</b><br>${o.fmt(r.value)}${r.note ? "<br>" + r.note : ""}`);
      });
    });
    table(host, ["", o.unit || W8.value], o.rows.map((r) => [r.label, o.fmt(r.value)]));
  }

  /* Lines over categories. opts: {cats, series:[{name,color,values}], fmt, height} */
  function lines(host, o) {
    mount(host, (box, W) => {
      const H = o.height || 240, m = { t: 14, r: 96, b: 30, l: 40 };
      const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": o.aria || "" }, box);
      const max = niceMax(Math.max(...o.series.flatMap((s) => s.values)) * 1.05);
      const iw = W - m.l - m.r, ih = H - m.t - m.b, n = o.cats.length;
      const X = (i) => m.l + (iw * i) / (n - 1), Y = (v) => m.t + ih - (v / max) * ih;
      for (let g = 0; g <= 4; g++) {
        const v = (max * g) / 4, y = Y(v);
        el("line", { x1: m.l, x2: W - m.r, y1: y, y2: y, class: g ? "grid" : "axis" }, svg);
        text(svg, m.l - 6, y + 4, o.tick ? o.tick(v) : Math.round(v), { "text-anchor": "end" });
      }
      const step = n > 8 && W < 560 ? 2 : 1;
      o.cats.forEach((c, i) => { if (i % step === 0) text(svg, X(i), H - 10, c, { "text-anchor": "middle" }); });
      o.series.forEach((s) => {
        el("path", { d: s.values.map((v, i) => (i ? "L" : "M") + X(i) + "," + Y(v)).join(""), fill: "none", stroke: s.color, "stroke-width": 2, "stroke-linejoin": "round" }, svg);
        const lv = s.values[n - 1];
        text(svg, X(n - 1) + 8, Y(lv) + 4 + (s.dy || 0), s.name, { class: "val" });
      });
      const cross = el("line", { y1: m.t, y2: m.t + ih, stroke: "#5a616c", "stroke-width": 1, opacity: 0 }, svg);
      const dots = o.series.map((s) => el("circle", { r: 4.5, fill: s.color, stroke: "#07080a", "stroke-width": 2, opacity: 0 }, svg));
      const hit = el("rect", { x: m.l, y: m.t, width: iw, height: ih, class: "hit" }, svg);
      const move = (e) => {
        const r = svg.getBoundingClientRect();
        const px = ((e.clientX - r.left) / r.width) * W;
        const i = Math.max(0, Math.min(n - 1, Math.round(((px - m.l) / iw) * (n - 1))));
        cross.setAttribute("x1", X(i)); cross.setAttribute("x2", X(i)); cross.setAttribute("opacity", 1);
        dots.forEach((d, j) => { d.setAttribute("cx", X(i)); d.setAttribute("cy", Y(o.series[j].values[i])); d.setAttribute("opacity", 1); });
        showTip(`<b>${o.cats[i]}</b><br>` + o.series.map((s) => `<i style="background:${s.color}"></i>${s.name}: <b>${o.fmt(s.values[i])}</b>`).join("<br>"), e);
      };
      hit.addEventListener("mousemove", move);
      hit.addEventListener("mouseleave", () => { hideTip(); cross.setAttribute("opacity", 0); dots.forEach((d) => d.setAttribute("opacity", 0)); });
    });
    table(host, ["", ...o.series.map((s) => s.name)], o.cats.map((c, i) => [c, ...o.series.map((s) => o.fmt(s.values[i]))]));
  }

  /* Ranges (low–high with a middle dot), e.g. P10–P90 with median, or a CI with its estimate.
     opts: {rows:[{label,lo,mid,hi,color}], fmt, log, zero, min, max, head} */
  function ranges(host, o) {
    mount(host, (box, W) => {
      const row = 46, m = { t: 8, r: 20, b: 28, l: Math.min(170, W * 0.36) };
      const H = m.t + m.b + row * o.rows.length;
      const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": o.aria || "" }, box);
      const iw = W - m.l - m.r;
      const lo = o.min ?? Math.min(...o.rows.map((r) => r.lo)), hi = o.max ?? Math.max(...o.rows.map((r) => r.hi));
      const f = o.log ? Math.log10 : (v) => v;
      const X = (v) => m.l + ((f(v) - f(lo)) / (f(hi) - f(lo))) * iw;
      (o.ticks || []).forEach((t) => {
        el("line", { x1: X(t), x2: X(t), y1: m.t, y2: H - m.b, class: t === 0 ? "axis" : "grid" }, svg);
        text(svg, X(t), H - 8, o.tick ? o.tick(t) : t, { "text-anchor": "middle" });
      });
      o.rows.forEach((r, i) => {
        const y = m.t + row * i + row / 2;
        const lab = text(svg, m.l - 12, y + 4, r.label, { "text-anchor": "end", class: "val" });
        if (r.sub) text(svg, m.l - 12, y + 19, r.sub, { "text-anchor": "end", "font-size": 11 });
        el("line", { x1: X(r.lo), x2: X(r.hi), y1: y, y2: y, stroke: r.color, "stroke-width": 2, "stroke-linecap": "round" }, svg);
        if (o.caps !== false) [r.lo, r.hi].forEach((v) => el("line", { x1: X(v), x2: X(v), y1: y - 6, y2: y + 6, stroke: r.color, "stroke-width": 2 }, svg));
        el("circle", { cx: X(r.mid), cy: y, r: 5.5, fill: r.color, stroke: "#07080a", "stroke-width": 2 }, svg);
        const hit = el("rect", { x: 0, y: y - row / 2, width: W, height: row, class: "hit" }, svg);
        bindTip(hit, `<b>${r.label}</b><br>${o.head ? o.head[0] : W8.range[0]}: <b>${o.fmt(r.lo)}</b><br>${o.head ? o.head[1] : W8.range[1]}: <b>${o.fmt(r.mid)}</b><br>${o.head ? o.head[2] : W8.range[2]}: <b>${o.fmt(r.hi)}</b>${r.note ? "<br>" + r.note : ""}`);
      });
    });
    const h = o.head || W8.range;
    table(host, ["", h[0], h[1], h[2]], o.rows.map((r) => [r.label, o.fmt(r.lo), o.fmt(r.mid), o.fmt(r.hi)]));
  }

  window.Story = { vbars, hbars, lines, ranges };
})();
