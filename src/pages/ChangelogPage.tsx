import React, { useState, useMemo, useEffect } from "react";
import "./ChangelogPage.css";
import {
  historicalChangelogData,
  type ChangelogRelease,
  type ChangelogItemType,
} from "../data/historical-changelog-data";
import { fetchDynamicChangelog } from "../utils/changelog-parser";

const PAGE_SIZE = 15;

const ChangelogPage: React.FC = () => {
  const [releases, setReleases] = useState<ChangelogRelease[]>(
    historicalChangelogData,
  );
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<ChangelogItemType | "all">(
    "all",
  );
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [copiedVersion, setCopiedVersion] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Changelog - Re Gallery WordPress Plugin";
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Grab dynamic changelog on opening page
    fetchDynamicChangelog()
      .then((liveReleases) => {
        if (liveReleases && liveReleases.length > 0) {
          setReleases(liveReleases);
        }
      })
      .catch((err) => {
        console.warn("Could not dynamically fetch WordPress.org changelog; using bundled data.", err);
      });

    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, []);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, selectedType]);

  const latestRelease = releases[0];

  const filteredReleases = useMemo(() => {
    const query = search.trim().toLowerCase();

    return releases
      .map((release) => {
        const matchesVersion = Boolean(
          query &&
            (release.version.toLowerCase().includes(query) ||
              `v${release.version}`.toLowerCase().includes(query))
        );

        const matchingItems = release.items.filter((item) => {
          const matchesType =
            selectedType === "all" || item.type === selectedType;
          if (!matchesType) return false;

          if (!query) return true;

          if (matchesVersion) return true;

          return (
            item.text.toLowerCase().includes(query) ||
            Boolean(item.raw && item.raw.toLowerCase().includes(query))
          );
        });

        if (matchingItems.length === 0) {
          return null;
        }

        return {
          ...release,
          items: matchingItems,
        };
      })
      .filter((r): r is ChangelogRelease => r !== null);
  }, [releases, search, selectedType]);

  const displayedReleases = useMemo(() => {
    if (search.trim()) {
      return filteredReleases;
    }
    return filteredReleases.slice(0, visibleCount);
  }, [filteredReleases, visibleCount, search]);

  const handleCopyLink = (version: string) => {
    const url = `${window.location.origin}/changelog#v${version}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedVersion(version);
      setTimeout(() => setCopiedVersion(null), 2000);
    });
  };

  const getTagClass = (type: ChangelogItemType) => {
    switch (type) {
      case "added":
        return "changelog-item__tag--added";
      case "improved":
        return "changelog-item__tag--improved";
      case "fixed":
        return "changelog-item__tag--fixed";
      case "removed":
        return "changelog-item__tag--removed";
      default:
        return "changelog-item__tag--other";
    }
  };

  const getTagLabel = (type: ChangelogItemType) => {
    switch (type) {
      case "added":
        return "Added";
      case "improved":
        return "Improved";
      case "fixed":
        return "Fixed";
      case "removed":
        return "Removed";
      default:
        return "Note";
    }
  };

  return (
    <div className="changelog-page">
      {/* Header */}
      <header className="changelog-header">
        <span className="changelog-header__badge">Changelog & Releases</span>
        <h1 className="changelog-header__title">What’s New in Re Gallery</h1>
        <p className="changelog-header__description">
          Stay up to date with new features, improvements, and fixes across
          every release of the Re Gallery WordPress plugin.
        </p>

        <div className="changelog-header__meta">
          <span className="changelog-meta-pill">
            Latest: <strong>v{latestRelease?.version}</strong> ({latestRelease?.date})
          </span>
          <span className="changelog-meta-pill">
            Total Releases: <strong>{releases.length}</strong>
          </span>
        </div>
      </header>

      {/* Controls: Search and Filters */}
      <section className="changelog-controls" aria-label="Changelog filters">
        <div className="changelog-search-box">
          <input
            type="text"
            className="changelog-search-input"
            placeholder="Search changes (e.g. Gutenberg, Lightbox, Category, SEO, WooCommerce...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="changelog-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="changelog-filters">
          <button
            className={`changelog-filter-btn ${
              selectedType === "all" ? "active" : ""
            }`}
            onClick={() => setSelectedType("all")}
          >
            All Changes
          </button>
          <button
            className={`changelog-filter-btn filter-added ${
              selectedType === "added" ? "active" : ""
            }`}
            onClick={() => setSelectedType("added")}
          >
            Added
          </button>
          <button
            className={`changelog-filter-btn filter-improved ${
              selectedType === "improved" ? "active" : ""
            }`}
            onClick={() => setSelectedType("improved")}
          >
            Improved
          </button>
          <button
            className={`changelog-filter-btn filter-fixed ${
              selectedType === "fixed" ? "active" : ""
            }`}
            onClick={() => setSelectedType("fixed")}
          >
            Fixed
          </button>
          <button
            className={`changelog-filter-btn filter-removed ${
              selectedType === "removed" ? "active" : ""
            }`}
            onClick={() => setSelectedType("removed")}
          >
            Removed
          </button>
        </div>
      </section>

      {/* Releases Timeline */}
      {displayedReleases.length === 0 ? (
        <div className="changelog-empty">
          <h3>No matching changes found</h3>
          <p>Try searching for a different keyword or reset your filter.</p>
          {(search || selectedType !== "all") && (
            <button
              className="changelog-filter-btn active"
              style={{ marginTop: "12px", cursor: "pointer" }}
              onClick={() => {
                setSearch("");
                setSelectedType("all");
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="changelog-timeline">
          {displayedReleases.map((release, idx) => (
            <article
              key={release.version}
              id={`v${release.version}`}
              className="changelog-card"
            >
              <div className="changelog-card__header">
                <div className="changelog-card__version-group">
                  <h2 className="changelog-card__version">
                    <a
                      href={`/changelog#v${release.version}`}
                      className="changelog-card__version-anchor"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopyLink(release.version);
                      }}
                      title="Click to copy link"
                    >
                      v{release.version}
                    </a>
                  </h2>
                  {idx === 0 && !search && selectedType === "all" && (
                    <span className="changelog-card__latest-badge">Latest</span>
                  )}
                  {copiedVersion === release.version && (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#059669",
                        fontWeight: 500,
                      }}
                    >
                      ✓ Link copied
                    </span>
                  )}
                </div>

                {release.date && (
                  <span className="changelog-card__date">
                    Released: {release.date}
                  </span>
                )}
              </div>

              <ul className="changelog-card__items">
                {release.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="changelog-item">
                    <span
                      className={`changelog-item__tag ${getTagClass(
                        item.type,
                      )}`}
                      onClick={() => setSelectedType(item.type)}
                      title={`Filter by ${getTagLabel(item.type)}`}
                      style={{ cursor: "pointer" }}
                    >
                      {getTagLabel(item.type)}
                    </span>
                    <span className="changelog-item__text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {!search && visibleCount < filteredReleases.length && (
        <div className="changelog-load-more">
          <button
            className="changelog-load-more__btn"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          >
            Load Older Releases ({filteredReleases.length - visibleCount} more)
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="changelog-cta">
        <h2 className="changelog-cta__title">Ready to build beautiful galleries?</h2>
        <p className="changelog-cta__description">
          Install the free Re Gallery plugin on WordPress.org or upgrade to Pro
          for advanced layouts, AI SEO, and priority support.
        </p>
        <div className="changelog-cta__actions">
          <a
            href="https://wordpress.org/plugins/regallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="changelog-cta__btn-primary"
          >
            Download Free Plugin
          </a>
          <a href="/pricing" className="changelog-cta__btn-secondary">
            View Pricing & Plans
          </a>
        </div>
      </section>
    </div>
  );
};

export default ChangelogPage;
