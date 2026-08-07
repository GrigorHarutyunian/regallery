const PLAY_ICON = `
  <svg class="hero-watch-intro__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
    />
  </svg>
`;

let modalRoot = null;
let iframe = null;

function getEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

function ensureModal() {
  if (modalRoot) return modalRoot;

  modalRoot = document.createElement("div");
  modalRoot.id = "video-modal";
  modalRoot.className = "video-modal";
  modalRoot.hidden = true;
  modalRoot.setAttribute("aria-hidden", "true");
  modalRoot.innerHTML = `
    <div class="video-modal__backdrop" data-video-modal-close></div>
    <div
      class="video-modal__content"
      role="dialog"
      aria-modal="true"
      aria-label="Watch intro video"
    >
      <button
        type="button"
        class="video-modal__close"
        aria-label="Close video"
        data-video-modal-close
      >
        <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
          />
        </svg>
      </button>
      <div class="video-modal__frame-wrap">
        <iframe
          id="video-modal-iframe"
          title="Re Gallery intro video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modalRoot);
  iframe = modalRoot.querySelector("#video-modal-iframe");

  modalRoot.querySelectorAll("[data-video-modal-close]").forEach((el) => {
    el.addEventListener("click", closeVideoModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalRoot && !modalRoot.hidden) {
      closeVideoModal();
    }
  });

  return modalRoot;
}

export function openVideoModal(videoId) {
  const modal = ensureModal();
  if (iframe) {
    iframe.src = getEmbedUrl(videoId);
  }
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

export function closeVideoModal() {
  if (!modalRoot) return;
  modalRoot.hidden = true;
  modalRoot.setAttribute("aria-hidden", "true");
  if (iframe) iframe.src = "";
  document.body.style.overflow = "";
}

export function getWatchIntroIcon() {
  return PLAY_ICON;
}
