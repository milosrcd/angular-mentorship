import { Category } from "./category.enum";

export interface BookDetails {
  id: number;
  title: string;
  imgSrc: string;
  author: string;
  year: number;
  category: Category;
  description: string;
}
