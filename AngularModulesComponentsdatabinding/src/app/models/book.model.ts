import { Category } from "./category.enum";

export interface Book {
  title: string;
  imgSrc: string;
  author: string;
  year: number;
  category: Category;
  descritpion: string;
}
