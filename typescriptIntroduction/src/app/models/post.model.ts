import { CommonFields } from "./commonFields.model";

export interface Post extends CommonFields{
  dateCreated: Date;
  numberOfLikes: number;
}
