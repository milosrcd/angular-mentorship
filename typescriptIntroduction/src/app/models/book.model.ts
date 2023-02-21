import { CommonFields } from "./commonFields.model";

export interface Book extends CommonFields {
  dateCreated: Date,
  author: string,
  numberOfStars: number,
  category: string
}
