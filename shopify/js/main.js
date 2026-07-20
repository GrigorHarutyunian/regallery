import { menuData } from "../data/menu.js";
import { heroData } from "../data/hero.js";
import { problemData } from "../data/problem.js";
import { featuresData } from "../data/features.js";
import { whyData } from "../data/why.js";
import { pricingData } from "../data/pricing.js";
import { faqData } from "../data/faq.js";
import { ctaData } from "../data/cta.js";
import "./footer.js";

function extAttrs(external) {
  return external ? ' target="_blank" rel="noopener noreferrer"' : "";
}

function linkAttrs(href, external) {
  return `href="${href}"${extAttrs(external)}`;
}

function renderNav() {
  const mount = document.getElementById("nav-mount");
  if (!mount) return;

  const desktopLinks = menuData.links
    .map(
      (link) => `
          <a ${linkAttrs(link.href, link.external)} class="hover:text-white transition-colors"
            >${link.label}</a
          >`,
    )
    .join("");

  const mobileLinks = menuData.links
    .map(
      (link) => `
        <a ${linkAttrs(link.href, link.external)}>${link.label}</a>`,
    )
    .join("");

  mount.innerHTML = `
    <nav
      class="sticky top-0 z-50 bg-canvas/80"
      style="backdrop-filter: blur(16px)"
    >
      <div
        class="max-w-7xl mx-auto px-5 flex items-center justify-between gap-3 h-16"
      >
        <a href="./" class="flex items-center gap-1.5 min-w-0 shrink">
          <img
            src="${menuData.logo}"
            alt="AI gallery app for Shopify with image SEO"
            width="36"
            height="36"
            class="w-9 h-9 shrink-0"
          />
          <span class="font-bold text-white text-[15px] tracking-tight truncate"
            >${menuData.brand}
            <span class="nav-brand-tag text-white/70 font-normal">
              ${menuData.brandTag}</span
            ></span
          >
        </a>
        <div
          class="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] text-white/60"
        >
          ${desktopLinks}
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <a
            ${linkAttrs(menuData.cta.href, menuData.cta.external)}
            class="hidden lg:inline-block shimmer-badge text-white text-[13.5px] font-semibold px-4 py-2 rounded-lg"
            >${menuData.cta.label}</a
          >
          <button
            id="mobile-toggle"
            class="lg:hidden text-white/60 p-1"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              class="icon-menu"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect y="4" width="20" height="1.5" rx=".75" />
              <rect y="9.25" width="20" height="1.5" rx=".75" />
              <rect y="14.5" width="20" height="1.5" rx=".75" />
            </svg>
            <svg
              class="icon-close"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        class="border-t border-white/8 bg-canvas px-5 py-4 text-[14px] text-white/70"
      >
        ${mobileLinks}
        <a
          ${linkAttrs(menuData.cta.href, menuData.cta.external)}
          class="shimmer-badge text-white font-semibold px-4 py-2.5 rounded-lg text-center"
          >${menuData.cta.label}</a
        >
      </div>
    </nav>
  `;
}

function renderHero() {
  const mount = document.getElementById("hero-mount");
  if (!mount) return;

  const { image, beforeCard, afterCard, trustBadges } = heroData;
  const { before, grad, after } = heroData.headline;

  const beforeFields = beforeCard.fields
    .map(
      (field) => `
              <div>
                <div class="text-white/65 text-[11px] mb-1">${field.label}</div>
                <div
                  class="bg-white/5 border border-white/8 rounded-lg h-9 flex items-center px-3"
                >
                  <span class="text-white/20 text-[13px] italic"
                    >${beforeCard.emptyPlaceholder}</span
                  >
                </div>
              </div>`,
    )
    .join("");

  const afterFields = afterCard.fields
    .map(
      (field) => `
              <div>
                <div class="flex items-center gap-1.5 mb-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1l1 2.5L9.5 5 7 6 6 8.5 5 6 2.5 5 5 3.5z"
                      fill="#F59E0B"
                    />
                  </svg>
                  <span class="text-white/70 text-[11px]">${field.label}</span>
                </div>
                <div
                  class="bg-green-DEFAULT/8 border border-green-DEFAULT/20 rounded-lg px-3 py-2"
                >
                  <span class="text-white/80 text-[13px]"${field.id ? ` id="${field.id}"` : ""}
                    >${field.value}</span
                  >
                </div>
              </div>`,
    )
    .join("");

  const badgesHtml = trustBadges
    .map((badge, index) => {
      const icon =
        index === 0
          ? `<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="${badge.iconPaths[0]}"
                stroke="currentColor"
                stroke-width="1.3"
              />
              <path
                d="${badge.iconPaths[1]}"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`
          : `<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="${badge.iconPaths[0]}"
                stroke="currentColor"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>`;

      const divider =
        index > 0 ? `<div class="w-px h-3 bg-white/15"></div>` : "";

      return `${divider}
          <div class="flex items-center gap-2">
            ${icon}
            ${badge.label}
          </div>`;
    })
    .join("");

  mount.innerHTML = `
      <div class="hero-glow absolute inset-0 pointer-events-none"></div>
      <div
        class="relative max-w-7xl mx-auto px-5 pt-24 pb-16 md:pt-32 md:pb-20"
      >
        <div class="flex justify-center mb-6">
          <div
            class="inline-flex items-center gap-2 bg-violet-dim/60 border border-violet-DEFAULT/30 rounded-full px-4 py-1.5 text-[13px] text-violet-DEFAULT font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1l1.5 3.5L12 6 8.5 7.5 7 11 5.5 7.5 2 6l3.5-1.5z"
                fill="var(--primary-light)"
              />
            </svg>
            ${heroData.eyebrow}
          </div>
        </div>

        <h1
          class="text-center font-black text-white leading-[1.05] tracking-tight mb-6"
          style="font-size: clamp(40px, 7vw, 76px)"
        >
          ${before}
          <span class="grad-text">${grad}</span>${after}
        </h1>

        <p
          class="text-center text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ${heroData.subtitle}
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            ${linkAttrs(heroData.primaryCta.href, heroData.primaryCta.external)}
            class="shimmer-badge text-white font-bold text-[15px] px-8 py-3.5 rounded-xl w-full sm:w-auto text-center"
          >
            ${heroData.primaryCta.label}
          </a>
          <a
            href="${heroData.secondaryCta.href}"
            class="bg-white/8 hover:bg-white/12 border border-white/12 text-white font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-colors w-full sm:w-auto text-center"
          >
            ${heroData.secondaryCta.label}
          </a>
        </div>

        <div class="grid md:grid-cols-2 gap-[var(--card-gap)]">
          <div
            class="bg-canvas-card border border-canvas-border rounded-2xl p-5 opacity-70"
          >
            <div class="flex items-center gap-2 mb-4">
              <div class="w-2 h-2 rounded-full bg-red-400"></div>
              <span
                class="text-white/70 text-xs font-medium uppercase tracking-widest"
                >${beforeCard.label}</span
              >
            </div>
            <div
              class="bg-canvas rounded-xl overflow-hidden mb-4"
              style="aspect-ratio: 16/9"
            >
              <img
                src="${image.src}"
                srcset="${image.srcset}"
                sizes="${image.sizes}"
                alt="${beforeCard.imageAlt}"
                width="${image.width}"
                height="${image.height}"
                class="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div class="space-y-2.5">
              ${beforeFields}
            </div>
            <div
              class="mt-4 flex items-center gap-2 text-red-400/80 text-[12px]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M7 4v3M7 9.5v.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              ${beforeCard.footerWarning}
            </div>
          </div>

          <div
            class="bg-canvas-card border border-violet-DEFAULT/30 rounded-2xl p-5 relative"
            style="box-shadow: 0 0 40px rgb(var(--primary-rgb) / 0.12)"
          >
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <div
                class="shimmer-badge text-white text-[11px] font-bold px-3 py-1 rounded-full"
              >
                ${afterCard.badge}
              </div>
            </div>
            <div class="flex items-center gap-2 mb-4 mt-1">
              <div class="w-2 h-2 rounded-full bg-green-400"></div>
              <span
                class="text-white/60 text-xs font-medium uppercase tracking-widest"
                >${afterCard.label}</span
              >
            </div>
            <div
              class="bg-canvas rounded-xl overflow-hidden mb-4"
              style="aspect-ratio: 16/9"
            >
              <img
                src="${image.src}"
                srcset="${image.srcset}"
                sizes="${image.sizes}"
                alt="${afterCard.imageAlt}"
                width="${image.width}"
                height="${image.height}"
                class="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div class="space-y-2.5">
              ${afterFields}
            </div>
            <div
              class="mt-4 flex items-center gap-2 text-green-DEFAULT text-[12px] font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M4.5 7l2 2 3-3"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              ${afterCard.footerSuccess}
            </div>
          </div>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/35 text-[13px]"
        >
          ${badgesHtml}
        </div>
      </div>
  `;
}

function renderProblem() {
  const mount = document.getElementById("problem-mount");
  if (!mount) return;

  const toneClass = {
    red: "bg-red-50",
    amber: "bg-amber-50",
    violet: "bg-violet-soft",
  };

  const cards = problemData.cards
    .map(
      (card) => `
          <div
            class="bg-paper border border-gray-100 rounded-2xl p-7 card-lift"
          >
            <div
              class="w-11 h-11 rounded-xl ${toneClass[card.iconTone]} flex items-center justify-center mb-5"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                ${card.iconSvg}
              </svg>
            </div>
            <h3 class="text-ink font-bold text-[17px] mb-2">
              ${card.title}
            </h3>
            <p class="text-ink-soft text-[14.5px] leading-relaxed">
              ${card.text}
            </p>
          </div>`,
    )
    .join("");

  mount.innerHTML = `
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-14">
          <p
            class="text-[12px] font-semibold uppercase tracking-widest text-violet-DEFAULT mb-3"
          >
            ${problemData.eyebrow}
          </p>
          <h2
            class="text-ink font-black text-[clamp(28px,4vw,44px)] tracking-tight leading-tight mb-4"
          >
            ${problemData.title}
          </h2>
          <p class="text-ink-soft text-lg max-w-xl mx-auto">
            ${problemData.subtitle}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-[var(--card-gap)]">
          ${cards}
        </div>
      </div>
  `;
}

function renderFeatures() {
  const mount = document.getElementById("features-mount");
  if (!mount) return;

  const { highlightCard, sideCards } = featuresData;

  const checklist = highlightCard.checklist
    .map(
      (item) => `
              <div class="flex items-center gap-3">
                <div
                  class="w-5 h-5 rounded-full bg-green-DEFAULT/15 border border-green-DEFAULT/30 flex items-center justify-center flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5 3.5-4"
                      stroke="#22C55E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span class="text-white/70 text-[14px]"
                  >${item}</span
                >
              </div>`,
    )
    .join("");

  const sides = sideCards
    .map(
      (card) => `
            <div
              class="bg-canvas-card border border-canvas-border rounded-2xl p-6 flex gap-5 items-start"
            >
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style="${card.iconStyle}"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  ${card.iconSvg}
                </svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-[16px] mb-1.5">
                  ${card.title}
                </h3>
                <p class="text-white/45 text-[13.5px] leading-relaxed">
                  ${card.text}
                </p>
              </div>
            </div>`,
    )
    .join("");

  mount.innerHTML = `
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-16">
          <p
            class="text-[12px] font-semibold uppercase tracking-widest text-amber-DEFAULT mb-3 grad-text-amber"
          >
            ${featuresData.eyebrow}
          </p>
          <h2
            class="text-white font-black text-[clamp(28px,4vw,48px)] tracking-tight leading-tight mb-4"
          >
            ${featuresData.title}
          </h2>
          <p class="text-white/50 text-lg max-w-xl mx-auto">
            ${featuresData.subtitle}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-[var(--card-gap)] mb-10">
          <div
            class="bg-canvas-card border border-canvas-border rounded-2xl p-8 relative overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style="
                width: 100%;
                height: 100%;
                background: radial-gradient(
                  circle at top right,
                  rgb(var(--primary-rgb) / 0.12),
                  transparent
                );
              "
            ></div>
            <div
              class="inline-flex items-center gap-2 bg-violet-dim/60 border border-violet-DEFAULT/20 rounded-full px-3 py-1 text-[12px] text-violet-DEFAULT font-medium mb-6"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1l1 2.5L9.5 5 7 6 6 8.5 5 6 2.5 5 5 3.5z"
                  fill="var(--primary-light)"
                />
              </svg>
              ${highlightCard.badge}
            </div>
            <h3 class="text-white font-bold text-2xl mb-3">
              ${highlightCard.title}
            </h3>
            <p class="text-white/50 text-[15px] mb-8 leading-relaxed">
              ${highlightCard.text}
            </p>
            <div class="space-y-3">
              ${checklist}
            </div>
          </div>

          <div class="flex flex-col gap-[var(--card-gap)]">
            ${sides}
          </div>
        </div>
      </div>
  `;
}

function renderWhy() {
  const mount = document.getElementById("why-mount");
  if (!mount) return;

  const items = whyData.items
    .map((item) => {
      const paths = Array.isArray(item.iconPath)
        ? item.iconPath
        : [item.iconPath];
      const pathHtml = paths.map((d) => `<path d="${d}" />`).join("");

      return `
          <div
            class="bg-canvas-card border border-canvas-border rounded-2xl p-7 card-lift"
          >
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style="
                background: rgb(var(--primary-rgb) / 0.12);
                border: 1px solid rgb(var(--primary-rgb) / 0.2);
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="var(--primary-light)"
              >
                ${pathHtml}
              </svg>
            </div>
            <h3 class="text-white font-bold text-[17px] mb-2">
              ${item.title}
            </h3>
            <p class="text-white/45 text-[14px] leading-relaxed">
              ${item.text}
            </p>
          </div>`;
    })
    .join("");

  mount.innerHTML = `
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-14">
          <p
            class="text-[12px] font-semibold uppercase tracking-widest text-violet-DEFAULT mb-3"
          >
            ${whyData.eyebrow}
          </p>
          <h2
            class="text-white font-black text-[clamp(28px,4vw,44px)] tracking-tight leading-tight mb-4"
          >
            ${whyData.title}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-[var(--card-gap)]">
          ${items}
        </div>
      </div>
  `;
}

function renderPricing() {
  const mount = document.getElementById("pricing-mount");
  if (!mount) return;

  const plans = pricingData.plans
    .map((plan) => {
      const features = plan.features
        .map(
          (f) => `
                <li class="pricing-card__features__list">${f}</li>`,
        )
        .join("");

      return `
          <div class="grid-item pricing-card${plan.popular ? " pricing-card__popular" : ""}">
            ${plan.popular ? `<div class="pricing-card__popular-badge">Most Popular</div>` : ""}
            <div class="pricing-card__header text-start">
              <div class="pricing-card__subtitle">${plan.name}</div>
              <p class="section-text__desc pricing__text">${plan.tagline}</p>
              <div class="pricing-card__title">
                <span class="currency">$</span><span id="${plan.priceId}">${plan.defaultAmount}</span
                ><span class="pricing-card__period" data-period>${plan.defaultPeriod}</span>
              </div>
              <div class="plan-type" data-billing-label>
                ${plan.defaultBillingLabel}
              </div>
              <div class="pricing-card__save" data-save>
                ${plan.defaultSave}
              </div>
            </div>
            <div class="pricing-card__ai-generations">
              <div>
                <div class="pricing-card__ai-generations-label">
                  AI Generations
                </div>
                <div class="pricing-card__ai-generations-value">
                  ${plan.aiGenerations}
                </div>
              </div>
            </div>
            <a
              ${linkAttrs(pricingData.appUrl, true)}
              class="pricing-card__btn pricing-card__btn--outlined"
              >${plan.ctaLabel}</a
            >
            <a
              ${linkAttrs(pricingData.appUrl, true)}
              class="pricing-card__trial-link"
              >${pricingData.trialLabel}</a
            >
            <div class="pricing-card__divider"></div>
            <div class="pricing-card__features-wrapper">
              <ul class="pricing-card__features">
                ${features}
              </ul>
            </div>
          </div>`;
    })
    .join("");

  mount.innerHTML = `
      <div class="section-text_cards">
        <h2 class="section-text__title-centered">${pricingData.title}</h2>
        <div class="section-text__description-centered">
          <p>
            ${pricingData.description}
          </p>
        </div>

        <div class="pricing__billing-toggle-row">
          <div class="pricing__billing-toggle" aria-label="Billing period">
            <button
              type="button"
              id="togMonthly"
              class="pricing__billing-toggle-btn"
            >
              Monthly
            </button>
            <button
              type="button"
              id="togYearly"
              class="pricing__billing-toggle-btn is-active"
            >
              Yearly
            </button>
          </div>
          <span id="billingSaveNote" class="pricing__billing-toggle-note">
            <span class="pricing__billing-toggle-note-accent"
              >${pricingData.saveNoteAccent}</span
            >
          </span>
        </div>

        <div class="grid grid__3 pricing__cards">
          ${plans}
        </div>

        <p class="pricing__footnote">
          ${pricingData.footnote}
        </p>
      </div>
  `;
}

function renderFaq() {
  const mount = document.getElementById("faq-mount");
  if (!mount) return;

  const items = faqData.items
    .map(
      (item) => `
          <div class="grid-item">
            <div class="grid-item__header">
              <svg height="55" width="55" viewBox="0 0 24 24">
                <path
                  d="${faqData.iconPath}"
                />
              </svg>
              <h3 class="section-text__title-small">
                ${item.question}
              </h3>
            </div>
            <div class="section-text__desc">
              ${item.answer}
            </div>
          </div>`,
    )
    .join("");

  mount.innerHTML = `
      <div class="max-w-7xl mx-auto px-5">
        <h2 class="section-text__title-centered">
          ${faqData.title}
        </h2>
        <div class="grid grid__2">
          ${items}
        </div>
      </div>
  `;
}

function renderCta() {
  const mount = document.getElementById("cta-mount");
  if (!mount) return;

  const chips = ctaData.trustChips
    .map(
      (chip, i) =>
        (i > 0
          ? `<span class="w-1 h-1 rounded-full bg-white/20"></span>`
          : "") + `<span>${chip}</span>`,
    )
    .join("");

  mount.innerHTML = `
      <div class="max-w-7xl mx-auto px-5">
        <div
          class="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          style="
            background: linear-gradient(
              135deg,
              #1a1040 0%,
              var(--primary-dim) 50%,
              #1a1040 100%
            );
          "
        >
          <div
            class="absolute inset-0 pointer-events-none"
            style="
              background: radial-gradient(
                ellipse 600px 400px at 50% 0%,
                rgb(var(--primary-rgb) / 0.3),
                transparent
              );
            "
          ></div>
          <div class="relative">
            <div
              class="inline-flex items-center gap-2 bg-violet-dim/60 border border-violet-DEFAULT/30 rounded-full px-4 py-1.5 text-[13px] text-violet-DEFAULT font-medium mb-6"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1l1 2.5L9.5 5 7 6 6 8.5 5 6 2.5 5 5 3.5z"
                  fill="var(--primary-light)"
                />
              </svg>
              ${ctaData.eyebrow}
            </div>
            <h2
              class="text-white font-black text-[clamp(30px,5vw,56px)] tracking-tight leading-tight mb-5"
            >
              ${ctaData.title}
            </h2>
            <p
              class="text-white/55 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              ${ctaData.subtitle}
            </p>
            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                ${linkAttrs(ctaData.primaryCta.href, ctaData.primaryCta.external)}
                class="shimmer-badge text-white font-bold text-[16px] px-10 py-4 rounded-xl w-full sm:w-auto text-center"
              >
                ${ctaData.primaryCta.label}
              </a>
              <a
                href="${ctaData.secondaryCta.href}"
                class="bg-white/8 hover:bg-white/14 border border-white/15 text-white font-semibold text-[15px] px-8 py-4 rounded-xl transition-colors w-full sm:w-auto text-center"
              >
                ${ctaData.secondaryCta.label}
              </a>
            </div>
            <div
              class="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/30 text-[13px]"
            >
              ${chips}
            </div>
          </div>
        </div>
      </div>
  `;
}

function initMobileNav() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileToggle || !mobileMenu) return;

  const setMobileMenuOpen = (open) => {
    mobileMenu.classList.toggle("open", open);
    mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
    mobileToggle.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu",
    );
  };

  mobileToggle.addEventListener("click", () => {
    setMobileMenuOpen(!mobileMenu.classList.contains("open"));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setMobileMenuOpen(false);
    }
  });
}

function setToggle(mode) {
  const btnM = document.getElementById("togMonthly");
  const btnY = document.getElementById("togYearly");
  const saveNote = document.getElementById("billingSaveNote");
  const data = pricingData.prices[mode];
  if (!data || !btnM || !btnY) return;

  btnM.classList.toggle("is-active", mode === "monthly");
  btnY.classList.toggle("is-active", mode === "yearly");
  if (saveNote) {
    saveNote.classList.toggle("is-disabled", mode === "monthly");
  }
  ["p1", "p2", "p3"].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = data.amounts[i];
  });
  document.querySelectorAll("[data-period]").forEach((el) => {
    el.textContent = data.period;
  });
  document.querySelectorAll("[data-billing-label]").forEach((el, i) => {
    el.textContent = data.labels[i];
  });
  document.querySelectorAll("[data-save]").forEach((el, i) => {
    const saveText = data.saves[i];
    el.textContent = saveText;
    el.classList.toggle("is-hidden", !saveText);
  });
}

function initPricingToggle() {
  const btnM = document.getElementById("togMonthly");
  const btnY = document.getElementById("togYearly");
  if (!btnM || !btnY) return;

  btnM.addEventListener("click", () => setToggle("monthly"));
  btnY.addEventListener("click", () => setToggle("yearly"));
}

function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function init() {
  renderNav();
  renderHero();
  renderProblem();
  renderFeatures();
  renderWhy();
  renderPricing();
  renderFaq();
  renderCta();

  initMobileNav();
  initPricingToggle();
  initSmoothScroll();
}

init();
