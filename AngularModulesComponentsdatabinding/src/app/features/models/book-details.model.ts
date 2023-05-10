import { Category } from "./category.enum";

export interface BookDetails {
  id: number;
  title: string;
  alt?: string;
  imgSrc: string;
  author: string;
  authorFirstName: string,
  authorLastName: string,
  isbn: number;
  year: Date;
  category: Category;
  description: string;
  deletedAt: Date | null;
}
