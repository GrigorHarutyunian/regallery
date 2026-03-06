export default interface SectionDTO {
  data: {
    title: string;
    text: string | any;
    id: string;
    width?: number;
    height?: number;
    alt: string;
    video?: any;
    slides?: any;
    img?: any;
    additionalButtonLink?: string;
    additionalButtonName?: string;
    viewMoreLinks?: any;
    itemsTop?: { title: string; image: string }[];
    itemsBottom?: { title: string; image: string }[];
  };
}
