import {
  historicalChangelogData,
  type ChangelogRelease,
  type ChangelogItem,
  type ChangelogItemType,
} from '../data/historical-changelog-data';

const WP_ORG_API_URL = 'https://api.wordpress.org/plugins/info/1.0/regallery.json';

/**
 * Decode common HTML entities from WordPress.org API HTML output
 */
export function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ');
}

/**
 * Parse the raw HTML changelog string returned by WordPress.org API
 * Example markup structure:
 *   <h4>1.20.22</h4>
 *   <h4>Updated: 05.11.2026</h4>
 *   <ul>
 *     <li><strong>Improved:</strong> ...</li>
 *   </ul>
 */
export function parseWpOrgChangelogHtml(html: string): ChangelogRelease[] {
  if (!html) return [];

  const releases: ChangelogRelease[] = [];
  // Split on each version header: <h4>1.xx.xx</h4>
  const blocks = html.split(/(?=<h4>\s*[0-9]+(?:\.[0-9a-zA-Z_-]+)+\s*<\/h4>)/i);

  for (const block of blocks) {
    const vMatch = block.match(/<h4>\s*([0-9]+(?:\.[0-9a-zA-Z_-]+)+)\s*<\/h4>/i);
    if (!vMatch) continue;

    const version = vMatch[1].trim();

    let date = '';
    const dateMatch = block.match(/<h4>\s*Updated:\s*([^<]+)<\/h4>/i);
    if (dateMatch) {
      date = dateMatch[1].trim();
    }

    const items: ChangelogItem[] = [];
    const liMatches = block.matchAll(/<li>([\s\S]*?)<\/li>/gi);

    for (const liMatch of liMatches) {
      const stripped = liMatch[1].replace(/<[^>]+>/g, '').trim();
      const rawText = decodeHtmlEntities(stripped);

      let type: ChangelogItemType = 'other';
      let text = rawText;

      const typeMatch = rawText.match(/^([a-zA-Z\s]+):\s*(.*)/);
      if (typeMatch) {
        const tag = typeMatch[1].trim().toLowerCase();
        if (tag.includes('add') || tag.includes('new')) {
          type = 'added';
        } else if (tag.includes('improv')) {
          type = 'improved';
        } else if (tag.includes('fix')) {
          type = 'fixed';
        } else if (tag.includes('remov')) {
          type = 'removed';
        }
        text = typeMatch[2] ? typeMatch[2].trim() : rawText;
      } else if (rawText.toLowerCase().includes('filmstrip')) {
        type = 'added';
      }

      items.push({ type, text, raw: rawText });
    }

    releases.push({ version, date, items });
  }

  return releases;
}

/**
 * Merges WordPress.org releases with historical releases (1.20.0 down to 1.0.0).
 * All releases after 1.20.0 (e.g. 1.20.1+, 1.21.0+, etc.) are grabbed dynamically
 * from WordPress.org, and merged on top of the historical data.
 */
export function mergeWithHistoricalChangelog(
  apiReleases: ChangelogRelease[],
  historical: ChangelogRelease[] = historicalChangelogData
): ChangelogRelease[] {
  if (!apiReleases || apiReleases.length === 0) {
    return historical;
  }

  // Find index of 1.20.0 in the API releases
  const index1200 = apiReleases.findIndex((r) => r.version === '1.20.0');

  if (index1200 !== -1) {
    // All releases newer than 1.20.0 from API (indices 0 to index1200 - 1)
    const newerReleases = apiReleases.slice(0, index1200);
    return [...newerReleases, ...historical];
  }

  // Fallback: exclude any version already present in historical
  const historicalVersions = new Set(historical.map((r) => r.version));
  const newerReleases = apiReleases.filter(
    (r) => !historicalVersions.has(r.version)
  );

  return [...newerReleases, ...historical];
}

/**
 * Dynamically fetches the latest changelog directly from WordPress.org API
 * and merges it with historical releases.
 */
export async function fetchDynamicChangelog(): Promise<ChangelogRelease[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(WP_ORG_API_URL, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`WordPress.org API returned HTTP ${response.status}`);
    }

    const data = await response.json();
    const changelogHtml = data?.sections?.changelog;

    if (!changelogHtml || typeof changelogHtml !== 'string') {
      throw new Error('Changelog section not found in WordPress.org API response');
    }

    const parsedReleases = parseWpOrgChangelogHtml(changelogHtml);
    if (!parsedReleases || parsedReleases.length === 0) {
      throw new Error('Failed to parse releases from WordPress.org changelog HTML');
    }

    return mergeWithHistoricalChangelog(parsedReleases);
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

