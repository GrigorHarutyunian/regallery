export default interface SectionDTO {
  data: {
    title: string;
    text: string | any;
    id: string;
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
    additionalButtonName?: string;
    viewMoreLinks?: any;
    itemsTop?: { title: string; image: string }[];
    itemsBottom?: { title: string; image: string }[];
  };
}
