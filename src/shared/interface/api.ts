export interface IRegisterModel {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export interface ILoginModel {
  email: string;
  password: string;
}

export interface IAuthResSuccess {
  message: string;
  data: { email: string };
}

export interface IValidator {
  message: string;
  user: string;
}

export interface ISinout {
  message: string;
  data: { email: string };
}
