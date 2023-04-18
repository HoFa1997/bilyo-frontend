import { useQuery } from '@tanstack/react-query';
import { getAllInvoice, getInvoiceById } from '../uri/invoice';

export const useGetAllInvoice = () => {
  return useQuery({
    queryKey: ['getAllInvoice'],
    queryFn: getAllInvoice,
    onError(err) {},
    onSuccess(data) {},
  });
};

export const useGetInvoiceById = (invoiceId: string) => {
  return useQuery({
    queryKey: ['getInvoiceById', invoiceId],
    queryFn: () => getInvoiceById(invoiceId),
    onError(err) {},
    onSuccess(data) {},
    enabled: false,
  });
};
