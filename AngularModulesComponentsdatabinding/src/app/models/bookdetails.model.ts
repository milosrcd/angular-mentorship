import { Category } from "./category.enum";

export interface BookDetails {
  title: string;
  imgSrc: string;
  author: string;
  year: number;
  category: Category;
  description: string;
}
