import {
  GetProductsResponse,
  CreateProduct,
  CreateProductResponse,
  IResGetProductById,
} from "@/interface/product";
import { HOST_URI } from "@/utils/constant";
import axios from "axios";

export const getAllProductApi = async () => {
  try {
    return (
      await axios.get<GetProductsResponse>(`${HOST_URI}/dashboard/products`, {
        withCredentials: true,
      })
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const createProductApi = async (product: CreateProduct) => {
  try {
    return await axios.post<CreateProductResponse>(
      `${HOST_URI}/dashboard/products`,
      product,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductByIdApi = async (productId: string) => {
  try {
    return await axios.delete<GetProductsResponse>(
      `${HOST_URI}/dashboard/products/${productId}`,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getProductByIdApi = async (productId: string) => {
  try {
    return (
      await axios.get<IResGetProductById>(
        `${HOST_URI}/dashboard/products/${productId}`,
        {
          withCredentials: true,
        }
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
  product: CreateProduct;
}) => {
  try {
    return (
      await axios.patch<IResGetProductById>(
        `${HOST_URI}/dashboard/products/${productId}`,
        product,
        {
          withCredentials: true,
        }
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};
