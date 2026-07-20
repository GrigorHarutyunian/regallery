import { galleryLayoutsDemo } from "../data/gallery-layouts-demo.js";
import {
  ARROW_ICON,
  loadGalleryScripts,
  loadGalleryScriptsOnInteraction,
} from "./gallery-scripts.js";

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

  loadGalleryScriptsOnInteraction(["#layouts"]);
}

renderGalleryLayouts();
