export interface IProduct {
  name: string;
  description: string;
  categories: string[];
  price: number;
  qty: number;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IResponse {
  id: string;
  message: string;
}

export interface ICustomer {
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
  id: string;
}

export interface IInvoice {
  customer: {
    id?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  };
  lineItems: IInvoiceLineItem[];
  status?: string;
  totalAmount?: number;
  invoiceNumber?: string;
  date?: string;
  dueDate?: string;
  id?: string;
}

export interface IInvoiceLineItem {
  product: {
    name: string;
    description: string;
    price: number;
  };
  quantity: number;
  totalPrice?: number;
  id?: string;
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
