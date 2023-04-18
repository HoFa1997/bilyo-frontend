export interface CreateProductResponse {
  createUser: {
    user: string;
    name: string;
    description: string;
    categories: string[];
    price: number;
    createdAt: string;
    updatedAt: string;
    _id: string;
    __v: number;
  };
  message: string;
}

export interface CreateProduct {
  name: string;
  description: string;
  categories: string[];
  price: number;
  qty: number;
}

export interface Product {
  _id: string;
  user: string;
  name: string;
  description: string;
  categories: string[];
  price: number;
  qty: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetProductsResponse {
  getProducts: Product[];
  message: string;
}

export interface IResGetProductById {
  getProduct: Product;
  message: string;
}

export interface ICustomerReq {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zip_code: string;
  country: string;
  date_of_birth: Date;
  gender: string;
}
export interface IListCustomerRes {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zip_code: string;
  country: string;
  date_of_birth: string;
  gender: string;
  account_balance: number;
  user: string;
  __v: number;
}

export interface IPlanRes {
  title:string
  price:number
  options: string[]
}

export interface IApiRes {
  message: string;
}
