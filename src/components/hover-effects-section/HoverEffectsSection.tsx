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
          <span className="hover-effects-gallery__meta-icon" aria-hidden="true">
            <svg viewBox="0 0 128 128" focusable="false">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M0 0 C0.86716141 -0.0049649 1.73432281 -0.00992981 2.62776184 -0.01504517 C5.49428097 -0.02964054 8.36074475 -0.03646443 11.22729492 -0.04199219 C13.22263083 -0.04774581 15.21796673 -0.05350351 17.21330261 -0.05926514 C21.39708717 -0.06976766 25.58085255 -0.07561523 29.76464844 -0.07910156 C35.11786511 -0.08458465 40.47082724 -0.10861196 45.82396412 -0.13707352 C49.94614903 -0.15572423 54.06827291 -0.1609068 58.19049644 -0.16243744 C60.16360554 -0.165459 62.13671369 -0.17347072 64.10978127 -0.18662262 C66.87416418 -0.20373389 69.63792893 -0.20179046 72.40234375 -0.1953125 C73.21245911 -0.20452728 74.02257446 -0.21374207 74.85723877 -0.22323608 C80.10339234 -0.18484951 83.73858061 0.69582053 88.39526367 3.16113281 C92.29259533 7.26358719 93.5122696 10.41594704 93.55639648 15.99633789 C93.56600403 16.97778275 93.57561157 17.9592276 93.58551025 18.97041321 C93.58976013 20.02979599 93.59401001 21.08917877 93.59838867 22.18066406 C93.60408875 23.27199142 93.60978882 24.36331879 93.61566162 25.48771667 C93.62511231 27.79852326 93.63164587 30.10934332 93.63549805 32.42016602 C93.64519679 35.94929629 93.67621739 39.47784254 93.70776367 43.00683594 C93.71429452 45.25227519 93.71954467 47.4977186 93.72338867 49.74316406 C93.73573547 50.79647415 93.74808228 51.84978424 93.76080322 52.93501282 C93.74027029 59.71456736 93.14033803 64.41605845 88.14526367 69.41113281 C84.88155528 71.48803815 82.14688501 72.27839838 78.39526367 73.16113281 C78.72526367 73.49113281 79.05526367 73.82113281 79.39526367 74.16113281 C79.27026367 77.53613281 79.27026367 77.53613281 78.39526367 81.16113281 C74.80897932 83.90707736 71.64222431 84.6721976 67.21166992 85.22363281 C66.03668945 85.38089844 64.86170898 85.53816406 63.65112305 85.70019531 C62.43231445 85.85230469 61.21350586 86.00441406 59.95776367 86.16113281 C57.54113377 86.46369231 55.12568615 86.77588215 52.71166992 87.09863281 C51.64376221 87.23140625 50.57585449 87.36417969 49.47558594 87.50097656 C43.65689719 88.74800314 39.89301686 91.2825373 35.86401367 95.57519531 C35.05319336 96.41824219 34.24237305 97.26128906 33.40698242 98.12988281 C31.72859906 99.904845 30.05413 101.68351648 28.38354492 103.46582031 C27.57272461 104.30628906 26.7619043 105.14675781 25.92651367 106.01269531 C24.83693359 107.17019287 24.83693359 107.17019287 23.7253418 108.35107422 C20.83859317 110.59356733 19.04834626 111.17255621 15.39526367 111.16113281 C13.04467773 109.7265625 13.04467773 109.7265625 11.39526367 107.16113281 C11.04602771 104.34095854 10.92677159 101.92393018 11.00463867 99.11425781 C11.01029846 98.34305603 11.01595825 97.57185425 11.02178955 96.77728271 C11.04412778 94.32126002 11.09431605 91.86671226 11.14526367 89.41113281 C11.16533213 87.74318518 11.1835823 86.07521461 11.19995117 84.40722656 C11.24398375 80.32462958 11.31299084 76.243131 11.39526367 72.16113281 C10.82606201 72.17684326 10.25686035 72.19255371 9.67041016 72.20874023 C7.05796493 72.2716172 4.44567957 72.31028813 1.83276367 72.34863281 C0.93750977 72.37376953 0.04225586 72.39890625 -0.88012695 72.42480469 C-6.60173496 72.4876795 -10.56233605 71.92886491 -15.60473633 69.16113281 C-19.50206798 65.05867844 -20.72174226 61.90631859 -20.76586914 56.32592773 C-20.78028046 54.85376045 -20.78028046 54.85376045 -20.79498291 53.35185242 C-20.79923279 52.29246964 -20.80348267 51.23308685 -20.80786133 50.14160156 C-20.8135614 49.0502742 -20.81926147 47.95894684 -20.82513428 46.83454895 C-20.83458496 44.52374237 -20.84111853 42.21292231 -20.8449707 39.90209961 C-20.85466945 36.37296933 -20.88569005 32.84442309 -20.91723633 29.31542969 C-20.92376717 27.06999044 -20.92901733 24.82454702 -20.93286133 22.57910156 C-20.94520813 21.52579147 -20.95755493 20.47248138 -20.97027588 19.38725281 C-20.95364392 13.89571909 -20.76665806 9.87137439 -17.60473633 5.16113281 C-12.09191983 -0.06897515 -7.32519089 0.01003265 0 0 Z M-11.28265572 9.4966011 C-13.53781082 12.33589634 -13.73452597 14.97313419 -13.76586914 18.46142578 C-13.77547668 19.32597382 -13.78508423 20.19052185 -13.79498291 21.08126831 C-13.79923279 22.01254547 -13.80348267 22.94382263 -13.80786133 23.90332031 C-13.8135614 24.86384308 -13.81926147 25.82436584 -13.82513428 26.81399536 C-13.83458091 28.84652607 -13.84111692 30.87907208 -13.8449707 32.91162109 C-13.85467715 36.01719939 -13.88570419 39.12211607 -13.91723633 42.22753906 C-13.9237665 44.20279555 -13.92901692 46.17805677 -13.93286133 48.15332031 C-13.94520813 49.08054901 -13.95755493 50.00777771 -13.97027588 50.96310425 C-13.95174473 56.34043222 -13.60533056 60.16053858 -9.60473633 64.16113281 C-8.04300888 64.24798884 -6.47744289 64.26815501 -4.91333008 64.25878906 C-3.9690918 64.25556641 -3.02485352 64.25234375 -2.05200195 64.24902344 C-0.56216797 64.23645508 -0.56216797 64.23645508 0.95776367 64.22363281 C1.95485352 64.21912109 2.95194336 64.21460938 3.97924805 64.20996094 C6.45131216 64.19813288 8.92325885 64.1816513 11.39526367 64.16113281 C11.41508301 63.23252441 11.43490234 62.30391602 11.45532227 61.34716797 C11.53334981 57.90662761 11.62003829 54.4665339 11.71264648 51.02636719 C11.75096365 49.53654392 11.78581175 48.04662727 11.81713867 46.55664062 C11.86273097 44.41665233 11.92073241 42.27730845 11.98120117 40.13769531 C12.01262207 38.84943848 12.04404297 37.56118164 12.07641602 36.23388672 C12.39526367 33.16113281 12.39526367 33.16113281 14.39526367 31.16113281 C19.01683026 30.41232202 21.73445887 31.07197682 25.49682617 33.66113281 C27.01764264 34.81079664 28.52478303 35.97870003 30.02026367 37.16113281 C30.82987549 37.77964111 31.6394873 38.39814941 32.47363281 39.03540039 C34.20990384 40.36407273 35.94061883 41.70003098 37.66625977 43.04248047 C40.48463596 45.23051667 43.32161639 47.39216096 46.16479492 49.54785156 C50.55699776 52.87847446 54.93974754 56.22104462 59.31494141 59.57397461 C60.00144775 60.09773682 60.6879541 60.62149902 61.39526367 61.16113281 C62.06170898 61.71599365 62.7281543 62.27085449 63.41479492 62.8425293 C65.6324409 64.3190463 66.76692353 64.54631916 69.39916992 64.55957031 C70.51001953 64.56537109 70.51001953 64.56537109 71.64331055 64.57128906 C72.78896484 64.55388672 72.78896484 64.55388672 73.95776367 64.53613281 C74.72540039 64.54773438 75.49303711 64.55933594 76.28393555 64.57128906 C80.56456653 64.57982654 80.56456653 64.57982654 84.36010742 62.82519531 C86.20909958 59.8528532 86.52577659 57.26863587 86.55639648 53.86083984 C86.56600403 52.99629181 86.57561157 52.13174377 86.58551025 51.24099731 C86.58976013 50.30972015 86.59401001 49.37844299 86.59838867 48.41894531 C86.60408875 47.45842255 86.60978882 46.49789978 86.61566162 45.50827026 C86.62510825 43.47573955 86.63164426 41.44319354 86.63549805 39.41064453 C86.6452045 36.30506624 86.67623153 33.20014956 86.70776367 30.09472656 C86.71429384 28.11947007 86.71954426 26.14420885 86.72338867 24.16894531 C86.74190887 22.77810226 86.74190887 22.77810226 86.76080322 21.35916138 C86.74227208 15.98183341 86.3958579 12.16172705 82.39526367 8.16113281 C79.55046399 8.04992835 76.7297171 8.00373383 73.8840332 8 C72.99137756 7.9950351 72.09872192 7.99007019 71.17901611 7.98495483 C68.21202843 7.97029307 65.2450942 7.96352455 62.27807617 7.95800781 C60.22402951 7.95225965 58.16998288 7.94650188 56.11593628 7.94073486 C51.80328114 7.93021343 47.4906447 7.92437825 43.17797852 7.92089844 C37.64380373 7.91541141 32.1098747 7.89138367 26.57577705 7.86292648 C22.33107779 7.84432985 18.08643807 7.83909609 13.84170151 7.83756256 C11.80109183 7.83452875 9.76048338 7.82647586 7.71991348 7.81337738 C4.86817834 7.796379 2.01704803 7.79818189 -0.8347168 7.8046875 C-1.68262787 7.79547272 -2.53053894 7.78625793 -3.40414429 7.77676392 C-7.63353198 7.67364108 -7.63353198 7.67364108 -11.28265572 9.4966011 Z M18.39526367 38.16113281 C18.39526367 59.28113281 18.39526367 80.40113281 18.39526367 102.16113281 C23.55333162 97.73993171 28.30975308 93.31193051 32.9440918 88.39746094 C39.73794399 81.40720303 46.80795405 80.39277091 56.20776367 79.09863281 C58.48625281 78.78256385 60.76368868 78.4587719 63.03979492 78.12597656 C64.04373291 77.98796631 65.0476709 77.84995605 66.08203125 77.70776367 C67.2270813 77.4371814 67.2270813 77.4371814 68.39526367 77.16113281 C68.89026367 76.17113281 68.89026367 76.17113281 69.39526367 75.16113281 C68.8100293 74.81824219 68.22479492 74.47535156 67.62182617 74.12207031 C59.63406587 69.25265487 52.39767772 63.5914942 45.05541992 57.81347656 C40.62775767 54.33030832 36.15180902 50.91643876 31.64526367 47.53613281 C31.00242432 47.05184814 30.35958496 46.56756348 29.69726562 46.06860352 C29.08713623 45.61187256 28.47700684 45.1551416 27.84838867 44.68457031 C27.3240625 44.29188965 26.79973633 43.89920898 26.25952148 43.49462891 C23.6833204 41.65188266 21.0307133 39.91809923 18.39526367 38.16113281 Z "
                fill="#000000"
                transform="translate(27.604736328125,11.8388671875)"
              />
            </svg>
          </span>
          <span className="hover-effects-gallery__meta-label">
            <i>Hover to see animation</i>
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
                  <DownloadBtn className={"download-btn"} location={data.id} />
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
