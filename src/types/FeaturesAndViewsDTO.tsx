import type { ReactNode } from "react";
export default interface FeaturesAndViewsDTO {
  data: any;
  description?: ReactNode;
  title: ReactNode;
  className?: string;
  gridClassname: string;
  sectionId: string;
  demoLink?: string;
}
