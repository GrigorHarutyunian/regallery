import { footerData } from "../data/footer.js";
import { initComingSoonModal } from "./coming-soon-modal.js";

function extAttrs(external) {
  return external ? ' target="_blank" rel="noopener noreferrer"' : "";
}

function resolvePath(path, base) {
  if (!path || /^(https?:|mailto:)/i.test(path)) return path;
  if (path.startsWith("#")) return `${base}${path}`;
  if (path.startsWith("./")) return `${base}${path.slice(2)}`;
  return `${base}${path}`;
}

function linkAttrs(href, external, base) {
  return `href="${resolvePath(href, base)}"${extAttrs(external)}`;
}

function renderSocialSvg(social) {
  if (social.paths) {
    const paths = social.paths
      .map((d) => `<path fill="currentColor" d="${d}" />`)
      .join("");
    const circle = social.circle
      ? `<circle cx="${social.circle.cx}" cy="${social.circle.cy}" r="${social.circle.r}" fill="currentColor" />`
      : "";
    return `
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  ${paths}
                  ${circle}
                </svg>`;
  }

  return `
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="${social.path}"
                  />
                </svg>`;
}

export function renderFooter() {
  const mount = document.getElementById("footer-mount");
  if (!mount) return;

  const base = mount.dataset.base || "./";

  const socials = footerData.socials
    .map(
      (social) => `
              <a
                ${linkAttrs(social.url, true, base)}
                class="footer-social-icon"
                title="${social.title}"
                aria-label="${social.title}"
              >
                ${renderSocialSvg(social)}
              </a>`,
    )
    .join("");

  const columns = footerData.columns
    .map((col) => {
      const links = col.links
        .map(
          (link) => `
              <li>
                <a
                  ${linkAttrs(link.href, link.external, base)}
                  class="hover:text-white/70 transition-colors"
                  >${link.label}</a
                >
              </li>`,
        )
        .join("");

      return `
          <div>
            <div
              class="text-white/50 text-[11.5px] font-semibold uppercase tracking-widest mb-4"
            >
              ${col.title}
            </div>
            <ul class="space-y-3 text-[13.5px] text-white/65">
              ${links}
            </ul>
          </div>`;
    })
    .join("");

  const legal = footerData.legalLinks
    .map(
      (link) => `
            <a
              href="${resolvePath(link.href, base)}"
              class="hover:text-white transition-colors"
              >${link.label}</a
            >`,
    )
    .join("");

  mount.innerHTML = `
    <footer class="bg-canvas border-t border-canvas-border py-14">
      <div class="max-w-7xl mx-auto px-5">
        <div class="grid md:grid-cols-4 gap-10 mb-12">
          <div class="md:col-span-2">
            <a href="${resolvePath("./", base)}" class="flex items-center gap-1.5 mb-4">
              <img
                src="${resolvePath(footerData.logo, base)}"
                alt="AI gallery app for Shopify with image SEO"
                width="36"
                height="36"
                class="w-9 h-9"
              />
              <span class="font-bold text-white text-[15px]">${footerData.brand}</span>
            </a>
            <p
              class="text-white/70 text-[13.5px] leading-relaxed mb-5 max-w-xs"
            >
              ${footerData.blurb}
            </p>
            <div class="flex gap-4 mb-5">
              <a
                ${linkAttrs(footerData.shopifyApp.href, true, base)}
                class="text-white/65 hover:text-white/90 transition-colors text-[13px]"
                >${footerData.shopifyApp.label}</a
              >
            </div>
            <div
              class="footer-social-icons flex flex-wrap items-center gap-3.5"
              aria-label="Social media"
            >
              ${socials}
            </div>
          </div>
          ${columns}
        </div>
        <div
          class="border-t border-canvas-border pt-7 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div class="text-white/65 text-[12.5px]">
            ${footerData.copyright}
          </div>
          <div class="flex gap-6 text-white/65 text-[12.5px]">
            ${legal}
          </div>
        </div>
      </div>
    </footer>
  `;
}

renderFooter();
const footerMount = document.getElementById("footer-mount");
const base = footerMount ? (footerMount.dataset.base || "./") : "./";
initComingSoonModal(base);
