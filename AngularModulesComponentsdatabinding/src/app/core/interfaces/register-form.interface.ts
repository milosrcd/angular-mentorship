export interface LoginForm {
  email: string,
  password: string
  role: string
}

export interface RegisterForm extends LoginForm {
  confirmPassword: string
  firstName: string,
  lastName: string,
  countries: string

}
