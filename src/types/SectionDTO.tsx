import React from "react";

export default interface SectionDTO {
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
    additionalButtonLink?: string;
    additionalButtonName?: string | React.ReactNode;
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
