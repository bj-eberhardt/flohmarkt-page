(() => {
  const c = window.FLOHMARKT_CONFIG;
  const text = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  ["title","subtitle","intro","admission","date","time","location","address","organizer"].forEach(k => text(k,c[k]));
  text("emailText", c.contactEmail);
  const email = document.getElementById("emailLink");
  email.href = `mailto:${c.contactEmail}?subject=${encodeURIComponent("Frage zum Kinderflohmarkt")}`;
  document.title = `${c.title} · ${c.date}`;
})();
