import { galleryLayoutsDemo } from "../data/gallery-layouts-demo.js";

const ARROW_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="40" viewBox="0 0 24 24" width="40" aria-hidden="true">
    <g fill="#292d32">
      <path fill="var(--primary-light)" d="m12 22.75c-5.93 0-10.75-4.82-10.75-10.75s4.82-10.75 10.75-10.75 10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"/>
      <path fill="var(--primary-light)" d="m10.7397 16.2802c-.19 0-.38-.07-.53-.22-.29001-.29-.29001-.77 0-1.06l3-3-3-3.00004c-.29001-.29-.29001-.77 0-1.06.29-.29.77-.29 1.06 0l3.53 3.53004c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"/>
    </g>
  </svg>
`;

function loadGalleryScripts() {
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

function selectLayout(idView) {
  const section = document.getElementById("layouts");
  if (!section) return;

  const layout = galleryLayoutsDemo.find((item) => item.idView === idView);
  if (!layout) return;

  section.querySelectorAll(".demo_button").forEach((button) => {
    button.classList.toggle(
      "demo_selectedButton",
      Number(button.dataset.idView) === idView,
    );
  });

  const description = section.querySelector("[data-layout-description]");
  const demoLink = section.querySelector("[data-layout-demo-link]");
  if (description) description.textContent = layout.description;
  if (demoLink) demoLink.href = layout.demoPath;

  section.querySelectorAll(".reacg-gallery").forEach((gallery) => {
    const isActive = Number(gallery.dataset.galleryId) === idView;
    gallery.classList.toggle("active", isActive);
    gallery.classList.toggle("hidden", !isActive);
  });

  loadGalleryScripts();
}

function renderGalleryLayouts() {
  const mount = document.getElementById("layouts-mount");
  if (!mount) return;

  const defaultLayout = galleryLayoutsDemo[0];

  mount.innerHTML = `
    <div class="demo_columns_content">
      <h2 class="section-text__title-centered">Gallery layouts</h2>
      <div class="demo_buttons_rows">
        ${galleryLayoutsDemo
          .map(
            (layout, index) => `
          <button
            type="button"
            class="demo_button${index === 0 ? " demo_selectedButton" : ""}"
            data-id-view="${layout.idView}"
            aria-pressed="${index === 0 ? "true" : "false"}"
          >
            <svg height="70" width="70" viewBox="0 0 24 24">${layout.path}</svg>
            <span>${layout.title}</span>
          </button>
        `,
          )
          .join("")}
      </div>
      <div class="demo_description">
        <p>
          <span data-layout-description>${defaultLayout.description}</span>
          <a
            href="${defaultLayout.demoPath}"
            target="_blank"
            rel="noopener noreferrer"
            title="View more"
            aria-label="View more"
            data-layout-demo-link
          >${ARROW_ICON}</a>
        </p>
      </div>
      <div class="demo_live_container">
        ${galleryLayoutsDemo
          .map(
            (layout, index) => `
          <div
            id="reacg-root${layout.idView}"
            class="reacg-gallery reacg-preview ${index === 0 ? "active" : "hidden"}"
            data-options-section="0"
            data-plugin-version="1.10.0"
            data-gallery-timestamp=""
            data-options-timestamp=""
            data-gallery-id="${layout.idView}"
          ></div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;

  mount.querySelectorAll(".demo_button").forEach((button) => {
    button.addEventListener("click", () => {
      const idView = Number(button.dataset.idView);
      selectLayout(idView);
      mount.querySelectorAll(".demo_button").forEach((btn) => {
        btn.setAttribute(
          "aria-pressed",
          btn.dataset.idView === String(idView) ? "true" : "false",
        );
      });
    });
  });

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

  if (location.hash === "#layouts") {
    loadGalleryScripts();
  }
}

renderGalleryLayouts();
