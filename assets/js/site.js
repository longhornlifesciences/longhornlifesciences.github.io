// Mobile nav toggle + progressive-enhancement submit for the Formspree
// contact form. Without JS the form still posts to Formspree directly.
(() => {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (nav && toggle) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", () =>
      setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.querySelectorAll(".site-nav__menu a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false)));
  }

  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const status = form.querySelector("[data-form-status]");
  const button = form.querySelector("button[type=submit]");
  const show = (state, text) => {
    status.dataset.state = state;
    status.textContent = text;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    show("pending", "Sending…");
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      show("ok", "Thanks, your message has been sent.");
    } catch {
      show("error", `Sorry, that didn't go through. Please email ${form.dataset.fallbackEmail}.`);
    } finally {
      button.disabled = false;
    }
  });
})();
