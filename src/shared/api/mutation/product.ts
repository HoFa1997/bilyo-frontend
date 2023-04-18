import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import {
  createProductApi,
  deleteProductByIdApi,
  updateProductByIdApi,
} from "../uri/product";
import { IProduct } from "@/interface/type";

const productURL = "/dashboard/products";

export const useCreateProduct = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: (product: IProduct) => createProductApi(product),
    onSuccess(data) {
      queryClient.refetchQueries({ queryKey: ["getAllProduct"] });
      push(productURL);
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
  const { push } = useRouter();
  return useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: (data: { productId: string; data: IProduct }) =>
      updateProductByIdApi({ productId: data.productId, product: data.data }),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["getAllProduct"] });
      push(productURL);
    },
  });
};
