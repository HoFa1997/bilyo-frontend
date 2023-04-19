import { HOST_URI } from "@/utils/constant";
import instanseAxios from "../axios.config";
import { ICreateProduct, IProduct, IResponse } from "@/interface/type";

export const getAllProductApi = async () => {
  try {
    return (
      await instanseAxios.get<IProduct[]>(`${HOST_URI}/dashboard/products`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const createProductApi = async (product: ICreateProduct) => {
  try {
    return await instanseAxios.post<IResponse>(
      `${HOST_URI}/dashboard/products`,
      product
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductByIdApi = async (productId: string) => {
  try {
    return await instanseAxios.delete<IResponse>(
      `${HOST_URI}/dashboard/products/${productId}`
    );
  } catch (error) {
    console.error(error);
  }
};

export const getProductByIdApi = async (productId: string) => {
  try {
    return (
      await instanseAxios.get<IProduct>(
        `${HOST_URI}/dashboard/products/${productId}`
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProductByIdApi = async ({
  productId,
  product,
}: {
  productId: string;
  product: ICreateProduct;
}) => {
  try {
    return (
      await instanseAxios.patch<IResponse>(
        `${HOST_URI}/dashboard/products/${productId}`,
        product
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};
