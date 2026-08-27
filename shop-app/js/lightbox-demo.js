import { lightboxDemo } from "../data/lightbox-demo.js";
import {
  loadGalleryScripts,
  loadGalleryScriptsOnInteraction,
} from "./gallery-scripts.js";

function renderLightbox() {
  const mount = document.getElementById("lightbox-showcase-mount");
  if (!mount) return;

  mount.innerHTML = `
    <div class="demo_columns_content">
      <div class="demo_section_header">
        <p class="demo_section_eyebrow">Media</p>
        <h2 class="demo_section_title">Lightbox</h2>
        <p class="demo_section_desc">
          A lightbox that actually works the way you'd expect.
          Full-screen, fast, mobile-ready — with AI captions and video
          support included. Zero configuration needed.
        </p>
      </div>
      <div class="demo_live_container">
        ${lightboxDemo
          .map(
            (item) => `
          <div
            id="reacg-root${item.idView}"
            class="reacg-gallery reacg-preview"
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

  loadGalleryScriptsOnInteraction(["#lightbox_showcase"]);
}

renderLightbox();
