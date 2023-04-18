import { HOST_URI } from "@/utils/constant";
import { ICustomer, IResponse } from "@/interface/type";
import instanseAxios from "../axios.config";

export type IUpdateCustomer = {
  id: string;
  customer: ICustomer;
};

export const addCustomerApi = async (customer: ICustomer) => {
  try {
    return (
      await instanseAxios.post<IResponse>(
        `${HOST_URI}/dashboard/customers`,
        customer
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllCustomerApi = async () => {
  try {
    return (
      await instanseAxios.get<ICustomer[]>(`${HOST_URI}/dashboard/customers`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const getCustomerByIdApi = async (id: string) => {
  try {
    return (
      await instanseAxios.get<ICustomer>(
        `${HOST_URI}/dashboard/customers/${id}`
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCustomerApi = async (customerId: string) => {
  try {
    return (
      await instanseAxios.delete<IResponse>(
        `${HOST_URI}/dashboard/customers/${customerId}`
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};
export const updateCustomerByIdApi = async ({
  id,
  customer,
}: IUpdateCustomer) => {
  try {
    return (
      await instanseAxios.patch<IResponse>(
        `${HOST_URI}/dashboard/customers/${id}`,
        customer
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};
