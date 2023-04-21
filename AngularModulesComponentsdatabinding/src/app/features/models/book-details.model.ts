import { Category } from "./category.enum";

export interface BookDetails {
  id: number;
  title: string;
  alt?: string;
  imgSrc: string;
  author: string;
  isbn: number;
  year: number;
  category: Category;
  description: string;
  deletedAt: Date | null;
}
