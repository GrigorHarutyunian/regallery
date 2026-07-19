import { menuData } from "../data/menu.js";
import { footerData } from "../data/footer.js";
import { sectionsData } from "../data/sections.js";
import { galleryLayoutsData } from "../data/gallery-layouts.js";

const qs = (selector, root = document) => root.querySelector(selector);

function renderMenu() {
  const nav = qs('[data-bind="menu"]');
  const brand = qs('[data-bind="brand"]');
  const cta = qs('[data-bind="header-cta"]');

  if (brand) brand.textContent = menuData.brand;

  if (nav) {
    nav.innerHTML = menuData.links
      .map((link) => `<a href="${link.href}">${link.label}</a>`)
      .join("");
  }

  if (cta && menuData.cta) {
    cta.innerHTML = `<a class="btn btn-primary" href="${menuData.cta.href}">${menuData.cta.label}</a>`;
  }
}

function renderHero() {
  const root = qs('[data-section="hero"]');
  if (!root) return;

  const { title, subtitle, primaryCta, secondaryCta } = sectionsData.hero;

  root.innerHTML = `
    <div class="container">
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="${primaryCta.href}">${primaryCta.label}</a>
        <a class="btn btn-secondary" href="${secondaryCta.href}">${secondaryCta.label}</a>
      </div>
    </div>
  `;
}

function renderFeatures() {
  const root = qs('[data-section="features"]');
  if (!root) return;

  const { title, subtitle, items } = sectionsData.features;

  root.innerHTML = `
    <div class="container">
      <header class="section-header">
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </header>
      <div class="gallery-layouts-grid">
        ${items
          .map(
            (item) => `
          <article class="layout-card">
            <div class="layout-card__body">
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderGalleryLayouts() {
  const titleEl = qs('[data-bind="gallery-layouts-title"]');
  const subtitleEl = qs('[data-bind="gallery-layouts-subtitle"]');
  const grid = qs('[data-bind="gallery-layouts-grid"]');

  if (titleEl) titleEl.textContent = galleryLayoutsData.title;
  if (subtitleEl) subtitleEl.textContent = galleryLayoutsData.subtitle;

  if (!grid) return;

  grid.innerHTML = galleryLayoutsData.items
    .map((item) => {
      const media = item.image
        ? `<img src="${item.image}" alt="${item.title}" loading="lazy" />`
        : "";

      return `
        <article class="layout-card">
          <a href="${item.href || "#"}">
            <div class="layout-card__media">${media}</div>
            <div class="layout-card__body">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </a>
        </article>
      `;
    })
    .join("");
}

function renderPricing() {
  const root = qs('[data-section="pricing"]');
  if (!root) return;

  const { title, subtitle } = sectionsData.pricing;

  root.innerHTML = `
    <div class="container">
      <header class="section-header">
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </header>
    </div>
  `;
}

function renderFaq() {
  const root = qs('[data-section="faq"]');
  if (!root) return;

  const { title, items } = sectionsData.faq;

  root.innerHTML = `
    <div class="container">
      <header class="section-header">
        <h2>${title}</h2>
      </header>
      <div class="faq-list">
        ${items
          .map(
            (item) => `
          <details>
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
          </details>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderFooter() {
  const root = qs('[data-bind="footer"]');
  if (!root) return;

  root.innerHTML = `
    <div class="container footer-inner">
      <p>${footerData.copyright}</p>
      <nav class="footer-links" aria-label="Footer">
        ${footerData.links
          .map((link) => `<a href="${link.href}">${link.label}</a>`)
          .join("")}
      </nav>
    </div>
  `;
}

function init() {
  renderMenu();
  renderHero();
  renderFeatures();
  renderGalleryLayouts();
  renderPricing();
  renderFaq();
  renderFooter();
}

init();
