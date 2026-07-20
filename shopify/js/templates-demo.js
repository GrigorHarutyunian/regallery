import { templatesDemo } from "../data/templates-demo.js";
import {
  ARROW_ICON,
  loadGalleryScripts,
  loadGalleryScriptsOnInteraction,
} from "./gallery-scripts.js";

function selectTemplate(section, idView) {
  section.querySelectorAll(".templates_button").forEach((button) => {
    const selected = Number(button.dataset.idView) === idView;
    button.classList.toggle("demo_selectedButton", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  });

  section.querySelectorAll(".reacg-gallery").forEach((gallery) => {
    const isActive = Number(gallery.dataset.galleryId) === idView;
    gallery.classList.toggle("active", isActive);
    gallery.classList.toggle("hidden", !isActive);
  });

  loadGalleryScripts();
}

function renderTemplates() {
  const mount = document.getElementById("template-library-mount");
  if (!mount) return;

  const defaultId = templatesDemo[0].idView;

  mount.innerHTML = `
    <div class="demo_columns_content">
      <div class="demo_section_header">
        <p class="demo_section_eyebrow">Templates</p>
        <h2 class="demo_section_title">Template library</h2>
        <p class="demo_section_desc">
          Explore ready-made Shopify gallery layouts built with Re&nbsp;Gallery&apos;s
          55+ pre-built templates.
          <a
            href="https://regallery.team/core/demo/"
            target="_blank"
            rel="noopener noreferrer"
            title="View more gallery templates"
            aria-label="View more gallery templates"
          >${ARROW_ICON}</a>
        </p>
      </div>
      <div class="templates_buttons_rows">
        ${templatesDemo
          .map(
            (item, index) => `
          <button
            type="button"
            class="templates_button${index === 0 ? " demo_selectedButton" : ""}"
            data-id-view="${item.idView}"
            aria-label="Select template"
            aria-pressed="${index === 0 ? "true" : "false"}"
          >
            <span class="templates_button_dot"></span>
          </button>
        `,
          )
          .join("")}
      </div>
      <div class="demo_live_container">
        ${templatesDemo
          .map(
            (item, index) => `
          <div
            id="reacg-root${item.idView}"
            class="reacg-gallery reacg-preview ${index === 0 ? "active" : "hidden"}"
            data-options-section="0"
            data-plugin-version="1.10.0"
            data-gallery-timestamp=""
            data-options-timestamp=""
            data-gallery-id="${item.idView}"
          ></div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;

  const section = document.getElementById("template_library");
  mount.querySelectorAll(".templates_button").forEach((button) => {
    button.addEventListener("click", () => {
      selectTemplate(section, Number(button.dataset.idView));
    });
  });

  loadGalleryScriptsOnInteraction(["#template_library"]);
  selectTemplate(section, defaultId);
}

renderTemplates();
