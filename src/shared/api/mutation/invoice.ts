import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IInvoice } from "@/interface/type";
import { createInvoiceApi, deleteInvoiceById } from "../uri/invoice";

export const useAddInvoice = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addInvoice"],
    mutationFn: (invoice: IInvoice) => createInvoiceApi(invoice),
    onSuccess(data) {
      queryClient.refetchQueries({ queryKey: ["getAllInvoice"] });
      push("/dashboard/invoices");
    },
  });
};

export const useDeleteInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteInvoice"],
    mutationFn: (id: string) => deleteInvoiceById(id),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["getAllInvoice"] });
    },
  });
};
