export interface LoginForm {
  email: string,
  password: string
}

export interface RegisterForm extends LoginForm {
  confirmPassword: string
  firstName: string,
  lastName: string,
  countries: string
  role: string
}
