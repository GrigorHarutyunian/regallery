const PLUGIN_VERSION = "1.20.17";
const TEMPLATES_API_URL = `https://regallery.team/core/wp-json/reacgcore/v3/templates?version=${PLUGIN_VERSION}`;
const CACHE_KEY = "reacg_templates_count_v3";
const COUNT_STEP = 5;

// Templates that exist but are not returned by the endpoint (the Album
// template).
const EXTRA_TEMPLATES_COUNT = 1;

// Shown until the endpoint responds (or if it is unreachable).
const FALLBACK_COUNT = 65;

const formatCountByStep = (count) =>
  `${Math.floor(count / COUNT_STEP) * COUNT_STEP}+`;

function readCache() {
  try {
    const cached = Number(sessionStorage.getItem(CACHE_KEY));
    return Number.isFinite(cached) && cached > 0 ? cached : null;
  } catch {
    return null;
  }
}

function writeCache(count) {
  try {
    sessionStorage.setItem(CACHE_KEY, String(count));
  } catch {
    // Storage may be unavailable (private mode, quota); ignore.
  }
}

let countPromise = null;

/** Resolves to the number of templates reported by the endpoint. */
export function fetchTemplatesCount() {
  if (!countPromise) {
    countPromise = fetch(TEMPLATES_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Templates request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("Templates response is empty");
        }
        const count = data.length + EXTRA_TEMPLATES_COUNT;
        writeCache(count);
        return count;
      })
      .catch((error) => {
        console.error("Failed to load templates count:", error);
        return readCache() ?? FALLBACK_COUNT;
      });
  }
  return countPromise;
}

/**
 * Inline placeholder for the formatted template count ("65+"). Renderers
 * can embed it in HTML strings; applyTemplatesCount() fills it in.
 */
export function templatesCountHtml() {
  return `<span data-templates-count>${formatCountByStep(readCache() ?? FALLBACK_COUNT)}</span>`;
}

/** Updates every [data-templates-count] element under root with the live count. */
export async function applyTemplatesCount(root = document) {
  const count = await fetchTemplatesCount();
  const text = formatCountByStep(count);
  root.querySelectorAll("[data-templates-count]").forEach((element) => {
    element.textContent = text;
  });
}
