import { IInvoice, IResponse } from "@/interface/type";
import instanseAxios from "../axios.config";

import { HOST_URI } from "@/utils/constant";

export const getAllInvoice = async () => {
  try {
    return (
      await instanseAxios.get<IInvoice[]>(`${HOST_URI}/dashboard/invoices`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const getInvoiceById = async (id: string) => {
  try {
    return (
      await instanseAxios.get<IInvoice>(`${HOST_URI}/dashboard/invoices/${id}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteInvoiceById = async (id: string) => {
  try {
    return (
      await instanseAxios.delete<IResponse>(
        `${HOST_URI}/dashboard/invoices/${id}`
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const createInvoiceApi = async (invoice: IInvoice) => {
  try {
    return await instanseAxios.post<IResponse>(
      `${HOST_URI}/dashboard/invoices`,
      invoice
    );
  } catch (error) {
    console.error(error);
  }
};
