import React, { useContext, useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import WindowWidthContext from "../../contexts/WindowWidthContext";
import DownloadBtn from "../buttons/DownoloadBtn/DownloadBtn";
import SectionDTO from "../../types/SectionDTO";
import { HoverEffect, hoverEffectOptions } from "../../types/HoverEffect";
import "../../common-components/common-section/Section.css";
import "./HoverEffectsSection.css";

type HoverEffectConfig = NonNullable<
  SectionDTO["data"]["hoverEffects"]
>[number];

const hiddenCaptionEffects: HoverEffect[] = [
  HoverEffect.OVERLAY_ZOOM_ICON,
  HoverEffect.OVERLAY_CART_ICON,
  HoverEffect.OVERLAY_PLUS_ICON,
  HoverEffect.OVERLAY_FULLSCREEN_ICON,
];

const hoverOnlyCaptionEffects: HoverEffect[] = [HoverEffect.OVERLAY];

const getDefaultCaptionDisplay = (
  effect: HoverEffect,
): "always" | "hover" | "hidden" => {
  if (hiddenCaptionEffects.includes(effect)) return "hidden";
  if (hoverOnlyCaptionEffects.includes(effect)) return "hover";

  return "always";
};

const getDefaultCaptionPosition = (
  effect: HoverEffect,
): "top" | "center" | "bottom" => {
  if (
    effect === HoverEffect.OVERLAY ||
    effect === HoverEffect.CIRCLE ||
    hiddenCaptionEffects.includes(effect)
  ) {
    return "center";
  }

  if (
    effect === HoverEffect.ZOOM_IN ||
    effect === HoverEffect.ROTATE ||
    effect === HoverEffect.FLASH
  ) {
    return "top";
  }

  return "bottom";
};

const HoverEffectsSection: React.FC<SectionDTO> = ({ data }) => {
  const windowWidth = useContext(WindowWidthContext);
  const version = windowWidth.version;

  const availableHoverEffects = useMemo<HoverEffectConfig[]>(
    () =>
      data.hoverEffects?.length
        ? data.hoverEffects
        : hoverEffectOptions.map((effect) => ({
            ...effect,
            previewTitle: effect.label,
            previewText:
              "Preview how this hover effect displays the gallery title and caption.",
            captionDisplay: getDefaultCaptionDisplay(effect.value),
            captionPosition: getDefaultCaptionPosition(effect.value),
          })),
    [data.hoverEffects],
  );

  const defaultHoverEffect = useMemo<HoverEffect>(() => {
    const slideEffect = availableHoverEffects.find(
      (effect) => effect.value === HoverEffect.SLIDE,
    );

    return (
      (slideEffect?.value as HoverEffect) ??
      (availableHoverEffects[0]?.value as HoverEffect) ??
      HoverEffect.SLIDE
    );
  }, [availableHoverEffects]);

  const [selectedHoverEffect, setSelectedHoverEffect] =
    useState<HoverEffect>(defaultHoverEffect);

  useEffect(() => {
    setSelectedHoverEffect(defaultHoverEffect);
  }, [defaultHoverEffect]);

  const responsiveSizes = data.imgSrcSet
    ? (data.imgSizes ?? "(max-width: 768px) 100vw, 50vw")
    : undefined;

  const activeHoverEffect = useMemo(
    () =>
      availableHoverEffects.find(
        (effect) => effect.value === selectedHoverEffect,
      ) ?? availableHoverEffects[0],
    [availableHoverEffects, selectedHoverEffect],
  );

  const captionDisplay =
    activeHoverEffect?.captionDisplay ??
    getDefaultCaptionDisplay(selectedHoverEffect);
  const captionPosition =
    activeHoverEffect?.captionPosition ??
    getDefaultCaptionPosition(selectedHoverEffect);
  const shouldShowCaption = captionDisplay !== "hidden";

  const captionClassName = [
    "hover-effects-gallery__caption",
    `hover-effects-gallery__caption--${captionPosition}`,
    captionDisplay === "hover" && "hover-effects-gallery__caption--hover",
    captionDisplay === "always" && "hover-effects-gallery__caption--always",
  ]
    .filter(Boolean)
    .join(" ");

  const renderImage = () => {
    if (!data.img) return null;

    return (
      <div className="hover-effects-gallery">
        <div
          className={`hover-effects-gallery__image-wrapper hover-effects-gallery__image-wrapper_${selectedHoverEffect}`}
        >
          <img
            src={data.img}
            srcSet={data.imgSrcSet}
            sizes={responsiveSizes}
            alt={data.alt}
            loading="lazy"
            decoding="async"
          />

          {shouldShowCaption && (
            <div className={captionClassName}>
              <span className="hover-effects-gallery__badge">
                {activeHoverEffect?.label ?? "Hover effect"}
              </span>
              <h3 className="hover-effects-gallery__caption-title">
                {activeHoverEffect?.previewTitle ?? "Creative Focus"}
              </h3>
              <p className="hover-effects-gallery__caption-text">
                {activeHoverEffect?.previewText ??
                  "Preview how the selected hover effect displays gallery captions."}
              </p>
            </div>
          )}
        </div>

        <div className="hover-effects-gallery__meta" aria-live="polite">
          <span className="hover-effects-gallery__meta-label">
            Hover to see animation
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id={data.id} className="supportandInfo hover-effects-section">
      <Container>
        <motion.div className="support__row info">
          <motion.div className="section-text">
            <h2 className="section-text__title">{data.title}</h2>
            <p className="section-text__body">{data.text}</p>

            <div className="hover-effects-section__control">
              <label
                className="hover-effects-section__label"
                htmlFor={`${data.id}-hover-effect`}
              >
                Select hover effect
              </label>
              <select
                id={`${data.id}-hover-effect`}
                className="hover-effects-section__select"
                value={selectedHoverEffect}
                onChange={(event) =>
                  setSelectedHoverEffect(event.target.value as HoverEffect)
                }
              >
                {availableHoverEffects.map((effect) => (
                  <option key={effect.value} value={effect.value}>
                    {effect.label}
                  </option>
                ))}
              </select>
            </div>

            {version === "mobile" && (
              <motion.div
                className="section-image hover-effects-section__image"
                style={data.img ? { maxWidth: "unset" } : undefined}
              >
                {renderImage()}
              </motion.div>
            )}

            <div className="buttons-container">
              <div className="primary-cta">
                <a href="#pricing">
                  <DownloadBtn className={"download-btn"} />
                </a>
                <div className="primary-btn__free-link">
                  <a
                    href="https://wordpress.org/plugins/regallery/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Try the free version
                  </a>
                </div>
              </div>
              {data.additionalButtonLink && (
                <a
                  className="download-btn secondary-btn"
                  href={data.additionalButtonLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {data.additionalButtonName}
                </a>
              )}
            </div>
          </motion.div>

          {version !== "mobile" && (
            <motion.div
              style={{ maxWidth: "50%" }}
              className="section-image hover-effects-section__image"
            >
              {renderImage()}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default HoverEffectsSection;
