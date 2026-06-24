import type { ReactNode } from "react";
export default interface FeaturesAndViewsDTO {
  data: any;
  description?: ReactNode;
  title: ReactNode;
  gridClassname: string;
  sectionId: string;
  demoLink?: string;
}
