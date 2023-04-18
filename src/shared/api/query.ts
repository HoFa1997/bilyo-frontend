import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { validatorApi } from "./uri/authApi";
import {
  getAllCustomerApi,
  getAllPlansApi,
  getCustomerByIdApi,
} from "./uri/customerApi";
import { getAllProductApi, getProductByIdApi } from "./uri/productApi";

export const useValidatorQuery = () => {
  const { push } = useRouter();
  return useQuery({
    queryKey: ["isValidator"],
    queryFn: validatorApi,
    onError(err) {
      push("/login");
    },
  });
};

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["getAllProduct"],
    queryFn: getAllProductApi,
    onError(err) {},
    onSuccess(data) {},
  });
};

export const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ["getProductById", productId],
    queryFn: () => getProductByIdApi(productId),
    onError(err) {},
    onSuccess(data) {},
    enabled: false,
  });
};

export const useGetCustomerById = (id: string) => {
  return useQuery({
    queryKey: ["getCustomerById", id],
    queryFn: () => getCustomerByIdApi(id),
    onError(err) {},
    onSuccess(data) {},
    enabled: false,
  });
};
export const useGetAllPlans = () => {
  return useQuery({
    queryKey: ["getAllPlans"],
    queryFn: getAllPlansApi,
    onError(err) {},
    onSuccess(data) {},
  });
};

export const useGetAllCustomers = () => {
  return useQuery({
    queryKey: ["getAllCustomers"],
    queryFn: getAllCustomerApi,
    onError(err) {},
    onSuccess(data) {},
  });
};
