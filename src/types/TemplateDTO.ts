export interface TemplateDTO {
  id: number;
  title: string;
  paid: boolean;
  preview_url: string;
  youtube_link: string;
  thumbnail: string;
  /** Gallery layout name (Grid, Mosaic, ...). Missing for templates that are not tied to a layout. */
  type?: string;
  categories: string[];
}
