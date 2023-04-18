import { useQuery } from '@tanstack/react-query';
import { getCustomerByIdApi, getAllCustomerApi } from '../uri/customer';

export const useGetCustomerById = (id: string) => {
  return useQuery({
    queryKey: ['getCustomerById', id],
    queryFn: () => getCustomerByIdApi(id),
    onError(err) {},
    onSuccess(data) {},
    enabled: false,
  });
};

export const useGetAllCustomers = () => {
  return useQuery({
    queryKey: ['getAllCustomers'],
    queryFn: getAllCustomerApi,
    onError(err) {},
    onSuccess(data) {},
  });
};
