export function initComingSoonModal(base = "./") {
  let modalRoot = document.getElementById("coming-soon-modal");
  
  if (!modalRoot) {
    // Inject CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${base}css/coming-soon-modal.css`;
    document.head.appendChild(link);

    modalRoot = document.createElement("div");
    modalRoot.id = "coming-soon-modal";
    modalRoot.className = "coming-soon-modal";
    modalRoot.hidden = true;
    modalRoot.setAttribute("aria-hidden", "true");
    modalRoot.innerHTML = `
      <div class="coming-soon-modal__backdrop" data-coming-soon-close></div>
      <div class="coming-soon-modal__content rounded-2xl bg-canvas-card border border-canvas-border p-8 text-center max-w-sm w-full mx-5 relative z-10" role="dialog" aria-modal="true" aria-label="Coming soon">
        <button type="button" class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors" aria-label="Close modal" data-coming-soon-close>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
        <div class="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center border border-violet-DEFAULT/30 bg-violet-dim/60 text-violet-DEFAULT">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <h3 class="text-white font-bold text-2xl mb-3">Coming Soon</h3>
        <p class="text-white/60 text-[15px] leading-relaxed mb-8">
          Our Shopify app is currently in closed beta and will be available to everyone very soon. Stay tuned!
        </p>
        <button type="button" class="shimmer-badge text-white font-bold text-[15px] px-8 py-3 rounded-xl w-full" data-coming-soon-close>
          Got it
        </button>
      </div>
    `;
    document.body.appendChild(modalRoot);

    modalRoot.querySelectorAll("[data-coming-soon-close]").forEach((el) => {
      el.addEventListener("click", closeComingSoonModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modalRoot.hidden) {
        closeComingSoonModal();
      }
    });
  }

  // Intercept all "Install for Free" links using event delegation
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="https://apps.shopify.com/re-gallery"]');
    if (link) {
      e.preventDefault();
      openComingSoonModal();
    }
  });
}

export function openComingSoonModal() {
  const modalRoot = document.getElementById("coming-soon-modal");
  if (!modalRoot) return;
  modalRoot.hidden = false;
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

export function closeComingSoonModal() {
  const modalRoot = document.getElementById("coming-soon-modal");
  if (!modalRoot) return;
  modalRoot.hidden = true;
  modalRoot.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
