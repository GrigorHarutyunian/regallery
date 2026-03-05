import { useEffect, useRef, useState } from "react";
import "./Demo.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataResponsiveTemplate } from "./responsiveTemplate-data";
import { arrow_icon } from "../../assets/icons/arrow-icon";

type ViewportMode = "desktop" | "tablet" | "mobile";

const getMaxAllowedMode = (): ViewportMode => {
  if (typeof window === "undefined") return "desktop";

  if (window.innerWidth <= 660) return "mobile";
  if (window.innerWidth <= 1060) return "tablet";

  return "desktop";
};

const modePriority: Record<ViewportMode, number> = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

const ResponsiveTemplate: React.FC = () => {
  const sectionRef = useRef<HTMLOptionElement | null>(null);
  const [maxAllowedMode, setMaxAllowedMode] = useState<ViewportMode>(() =>
    getMaxAllowedMode()
  );
  const [viewportMode, setViewportMode] = useState<ViewportMode>(() =>
    getMaxAllowedMode()
  );

  const isDesktopDisabled = maxAllowedMode !== "desktop";
  const isTabletDisabled = maxAllowedMode === "mobile";

  useEffect(() => {
    const button = document.getElementById("reacg-loadApp");

    if (!button) return;

    dataResponsiveTemplate.forEach((val) => {
      button.setAttribute("data-id", "reacg-root" + val.idView);
      button.click();
    });
  }, [viewportMode]);

  useEffect(() => {
    const handleResize = () => {
      const nextMaxAllowedMode = getMaxAllowedMode();

      setMaxAllowedMode(nextMaxAllowedMode);
      setViewportMode((prevMode) =>
        modePriority[prevMode] > modePriority[nextMaxAllowedMode]
          ? nextMaxAllowedMode
          : prevMode
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} id="responsive_template" className="black-section">
      <Container>
        <Row>
          <div className="demo_columns_content">
            <h2 className="section-text__title-centered">Responsive Gallery</h2>
            <div className="demo_description responsive_description">
              <p>
                <span>Re Gallery is fully optimized for mobile, tablets, and 4K retina screens, delivering fast, high-quality galleries on every device while boosting SEO and user engagement.</span>
                <a
                  href={"https://regallery.team/core/reacg/demo"}
                  target="_blank"
                  title="View more"
                  aria-label="View more"
                >
                  {arrow_icon}
                </a>
              </p>
            </div>
            <div className="responsive_viewport_controls">
              <button
                type="button"
                aria-label="Desktop preview"
                disabled={isDesktopDisabled}
                className={`responsive_viewport_button${
                  viewportMode === "desktop" ? " demo_selectedButton" : ""
                }`}
                onClick={() => setViewportMode("desktop")}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6v2h3a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h3v-2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2v8h14V7Z" />
                </svg>
                <span>Desktop</span>
              </button>
              <button
                type="button"
                aria-label="Tablet preview"
                disabled={isTabletDisabled}
                className={`responsive_viewport_button${
                  viewportMode === "tablet" ? " demo_selectedButton" : ""
                }`}
                onClick={() => setViewportMode("tablet")}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 2v16h10V4Zm5 13.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                </svg>
                <span>Tablet</span>
              </button>
              <button
                type="button"
                aria-label="Mobile preview"
                className={`responsive_viewport_button${
                  viewportMode === "mobile" ? " demo_selectedButton" : ""
                }`}
                onClick={() => setViewportMode("mobile")}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 2v16h8V4Zm4 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                </svg>
                <span>Mobile</span>
              </button>
            </div>
            <div
              className={`demo_live_container responsive_live_container viewport-${viewportMode}`}
            >
              {dataResponsiveTemplate.map((val) => (
                <div
                  key={val.idView}
                  id={`reacg-root${val.idView}`}
                  className={`reacg-gallery reacg-preview`}
                  data-options-section="0"
                  data-gallery-id={`${val.idView}`}
                ></div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ResponsiveTemplate;
