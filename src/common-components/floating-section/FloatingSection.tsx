import React from "react";
import { Container } from "react-bootstrap";
import DownloadBtn from "../../components/buttons/DownoloadBtn/DownloadBtn";
import CustomButton from "../custom-button/CustomButton";
import { useTrialModalContext } from "../../contexts/TrialModalContext";
import "./FloatingSection.css";

type FloatingSectionButton =
  | {
      type: "download";
      href: string;
      location: string;
      track: string;
      target?: string;
      rel?: string;
      downloadVersion?: string;
    }
  | {
      type: "custom";
      href: string;
      label: React.ReactNode;
      location: string;
      track: string;
      target?: string;
      rel?: string;
      className?: string;
    };

interface FloatingSectionTrialCta {
  enabled?: boolean;
  label: React.ReactNode;
  planId: number;
  location: string;
  track: string;
  event: string;
}

export interface FloatingSectionData {
  id: string;
  title: React.ReactNode;
  text: React.ReactNode;
  rowClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  primaryButton?: FloatingSectionButton;
  trialCta?: FloatingSectionTrialCta;
}

const sectionColorClassNames = {
  light: "",
  dark: "black-section",
  colorful: "colorful-section",
  "light-colorful": "light-colorful-section",
};

interface FloatingSectionProps {
  data: FloatingSectionData;
  color?: "light" | "dark" | "colorful" | "light-colorful";
}

const FloatingSection: React.FC<FloatingSectionProps> = ({
  data,
  color = "dark",
}) => {
  const { openTrialModal } = useTrialModalContext();

  const trackTrialCta = (trialCta: FloatingSectionTrialCta) => {
    if (typeof window === "undefined") return;

    const trackingWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event: trialCta.event,
      location: trialCta.location,
    });
  };

  const rowClassName = [
    "contact_us_row",
    data.rowClassName,
    sectionColorClassNames[color],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={data.id} className="section floating-section">
      <Container>
        <div className={rowClassName}>
          <h2 className={data.titleClassName ?? "section-text__title"}>
            {data.title}
          </h2>
          <div
            className={data.textClassName ?? "section-text__body contact_us"}
          >
            {data.text}
          </div>
          {(data.primaryButton || data.trialCta?.enabled) && (
            <div className="primary-cta">
              {data.primaryButton?.type === "download" && (
                <a
                  href={data.primaryButton.href}
                  target={data.primaryButton.target}
                  rel={data.primaryButton.rel}
                  data-track={data.primaryButton.track}
                  data-location={data.primaryButton.location}
                >
                  <DownloadBtn
                    className="download-btn"
                    version={data.primaryButton.downloadVersion}
                    location={data.primaryButton.location}
                  />
                </a>
              )}
              {data.primaryButton?.type === "custom" && (
                <a
                  href={data.primaryButton.href}
                  target={data.primaryButton.target}
                  rel={data.primaryButton.rel}
                  data-track={data.primaryButton.track}
                  data-location={data.primaryButton.location}
                >
                  <CustomButton
                    className={
                      data.primaryButton.className ?? "download-btn secondary-btn"
                    }
                  >
                    {data.primaryButton.label}
                  </CustomButton>
                </a>
              )}
              {data.trialCta?.enabled ? (
                <button
                  type="button"
                  className="trial-link pricing-support__trial-link"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();
                    if (!data.trialCta) return;
                    trackTrialCta(data.trialCta);
                    openTrialModal(data.trialCta.planId);
                  }}
                  data-track={data.trialCta.track}
                  data-location={data.trialCta.location}
                >
                  {data.trialCta.label}
                </button>
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FloatingSection;
