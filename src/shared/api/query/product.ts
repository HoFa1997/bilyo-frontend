import { useQuery } from '@tanstack/react-query';
import { getAllProductApi, getProductByIdApi } from '../uri/product';

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ['getAllProduct'],
    queryFn: getAllProductApi,
    onError(err) {},
    onSuccess(data) {},
  });
};

export const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ['getProductById', productId],
    queryFn: () => getProductByIdApi(productId),
    onError(err) {},
    onSuccess(data) {},
    enabled: false,
  });
};
