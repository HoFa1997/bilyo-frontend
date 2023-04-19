export interface IProduct {
  _id: string;
  name: string;
  description: string;
  categories: string[];
  price: number;
  qty: number;
  createdAt: string;
  updatedAt: string;
}

type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
export type ICreateProduct = Optional<
  IProduct,
  "_id" | "createdAt" | "updatedAt"
>;

export interface IResponse {
  id: string;
  message: string;
}

export interface IAuthResponse {
  token: string;
  message: string;
}

export interface ICustomer {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  state: string;
  city: string;
  zip_code: string;
  date_of_birth: string;
  account_balance: number;
  __v: number;
}

export interface IInvoice {
  _id: string;
  customer: {
    first_name: string;
    last_name: string;
    phone_number: string;
    id: string;
  };
  lineItems: IInvoiceLineItem[];
  status: string;
  totalAmount: number;
  invoiceNumber: string;
  date: string;
  dueDate: string;
}

export interface IInvoiceLineItem {
  product: {
    name: string;
    description: string;
    price: number;
  };
  quantity: number;
  totalPrice: number;
  _id: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IPlanRes {
  title: string;
  price: number;
  options: string[];
}

export interface IState {
  name: string;
  center: string;
  latitude: string;
  longitude: string;
  id: number;
}

export interface ICity {
  name: string;
  latitude: string;
  longitude: string;
  id: number;
}
