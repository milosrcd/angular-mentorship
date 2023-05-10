import { Countries } from "./countries.interface"

export interface LoginForm {
  email: string,
  password: string
  role: string
}

export interface RegisterForm {
  email: string,
  password: string,
  confirmPassword: string
  firstName: string,
  lastName: string,
  countries?: Countries
}

export interface User {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  countryId: number,
  role: string,
  createdAt: string
}
