import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import {
  IUpdateCustomer,
  addCustomerApi,
  deleteCustomerApi,
  updateCustomerByIdApi,
} from "../uri/customer";
import { ICustomer } from "@/interface/type";

const customerURL = "/dashboard/customers";

export const useAddCustomer = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  return useMutation({
    mutationKey: ["addCustomer"],
    mutationFn: (customer: ICustomer) => addCustomerApi(customer),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["getAllCustomers"] });
      push(customerURL);
    },
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

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  return useMutation({
    mutationKey: ["updateCustomer"],
    mutationFn: (data: IUpdateCustomer) =>
      updateCustomerByIdApi({ id: data.id, customer: data.customer }),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["getAllCustomer"] });
      push(customerURL);
    },
  });
};
