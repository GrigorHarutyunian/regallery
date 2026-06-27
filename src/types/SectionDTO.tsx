import React from "react";

export interface SecondaryButtonClickHandlers {
  openVideoModal: () => void;
}

export default interface SectionDTO {
  direction?: "left" | "right";
  color?: "light" | "dark" | "colorful" | "light-colorful";
  data: {
    badge?: string;
    title: string | React.ReactNode;
    text: string | any;
    id: string;
    className?: string;
    width?: number;
    height?: number;
    alt: string;
    video?: any;
    poster?: string;
    slides?: any;
    img?: any;
    imgSrcSet?: string;
    imgSizes?: string;
    primaryButton?:
      | false
      | {
          primaryButtonLink?: string;
          primaryButtonName?: string | React.ReactNode;
        };
    secondaryButton?: {
      link?: string;
      target?: string;
      onClick?: (handlers: SecondaryButtonClickHandlers) => void;
      label: string | React.ReactNode;
    };
    viewMoreLinks?: any;
    itemsTop?: { title: string; image: string }[];
    itemsBottom?: { title: string; image: string }[];
    hoverEffects?: {
      value: string;
      label: string;
      previewTitle?: string;
      previewText?: string;
      captionDisplay?: "always" | "hover" | "hidden";
      captionPosition?: "top" | "center" | "bottom";
    }[];
  };
}
