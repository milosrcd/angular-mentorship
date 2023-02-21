import { CommonFields } from "./commonFields.model";

export interface Job extends CommonFields {
  workHours: number,
  pricePerHour: number
}
