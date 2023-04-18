import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ILoginModel } from "@/interface/api";
import { CreateProduct, ICustomerReq } from "@/interface/product";
import { logoutApi, loginApi } from "./uri/authApi";
import { addCustomerApi, deleteCustomerApi } from "./uri/customerApi";
import {
  createProductApi,
  deleteProductByIdApi,
  updateProductByIdApi,
} from "./uri/productApi";

export const useLogout = () => {
  const { push } = useRouter();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutApi,
    onSuccess() {
      push("/");
    },
  });
};

export const useLogin = () => {
  const { push } = useRouter();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (login: ILoginModel) => loginApi(login),
    onSuccess() {
      push("/dashboard");
    },
  });
};

export const useCreateProduct = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: (product: CreateProduct) => createProductApi(product),
    onSuccess(data) {
      queryClient.refetchQueries({ queryKey: ["getAllProduct"] });
      push("/dashboard/products");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: (id: string) => deleteProductByIdApi(id),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["getAllProduct"] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { back } = useRouter();
  return useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: (data: { productId: string; data: CreateProduct }) =>
      updateProductByIdApi({ productId: data.productId, product: data.data }),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["getAllProduct"] });
      back();
    },
  });
};

export const useAddCustomer = () => {
  return useMutation({
    mutationKey: ["addCustomer"],
    mutationFn: (customer: ICustomerReq) => addCustomerApi(customer),
    onSuccess(data) {},
  });
};

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteCustomer"],
    mutationFn: (id: string) => deleteCustomerApi(id),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["getAllCustomers"] });
    },
  });
};
