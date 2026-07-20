export const ARROW_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="40" viewBox="0 0 24 24" width="40" aria-hidden="true">
    <g fill="#292d32">
      <path fill="var(--primary-light)" d="m12 22.75c-5.93 0-10.75-4.82-10.75-10.75s4.82-10.75 10.75-10.75 10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"/>
      <path fill="var(--primary-light)" d="m10.7397 16.2802c-.19 0-.38-.07-.53-.22-.29001-.29-.29001-.77 0-1.06l3-3-3-3.00004c-.29001-.29-.29001-.77 0-1.06.29-.29.77-.29 1.06 0l3.53 3.53004c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"/>
    </g>
  </svg>
`;

export function loadGalleryScripts() {
  if (!document.getElementById("reacg_thumbnails-js-extra")) {
    const config = document.createElement("script");
    config.id = "reacg_thumbnails-js-extra";
    config.textContent = `
      var reacg_global = {
        rest_root: "https://regallery.team/core/wp-json/reacg/v1/",
        rest_nonce: "1c55173374",
        plugin_url: "https://regallery.team/core/wp-content/plugins/regallery",
        text: { load_more: "Load more", no_data: "There is not data." }
      };
    `;
    document.body.appendChild(config);
  }

  if (document.getElementById("reacg_thumbnails-js")) return;

  const script = document.createElement("script");
  script.id = "reacg_thumbnails-js";
  script.src =
    "https://regallery.team/core/wp-content/plugins/regallery/assets/js/wp-gallery.js?ver=1.10.0";
  script.async = true;
  document.body.appendChild(script);
}

export function loadGalleryScriptsOnInteraction(hashTargets = []) {
  const events = [
    "scroll",
    "mousemove",
    "click",
    "keydown",
    "wheel",
    "touchmove",
    "touchend",
  ];
  const loadOnce = () => {
    events.forEach((eventName) =>
      window.removeEventListener(eventName, loadOnce),
    );
    loadGalleryScripts();
  };
  events.forEach((eventName) =>
    window.addEventListener(eventName, loadOnce, { passive: true }),
  );

  if (hashTargets.includes(location.hash)) {
    loadGalleryScripts();
  }
}

export function reloadGallery(galleryRootId) {
  const button = document.getElementById("reacg-loadApp");
  if (!button) return;
  button.setAttribute("data-id", galleryRootId);
  button.click();
}
