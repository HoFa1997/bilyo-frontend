// CUSTOMER API

import {
  ICustomerReq,
  IApiRes,
  IListCustomerRes,
  IPlanRes,
} from "@/interface/product";
import { HOST_URI } from "@/utils/constant";
import axios from "axios";

export const addCustomerApi = async (customer: ICustomerReq) => {
  try {
    return (
      await axios.post<IApiRes>(`${HOST_URI}/dashboard/customers`, customer, {
        withCredentials: true,
      })
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllCustomerApi = async () => {
  try {
    return (
      await axios.get<IListCustomerRes[]>(`${HOST_URI}/dashboard/customers`, {
        withCredentials: true,
      })
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const getCustomerByIdApi = async (id: string) => {
  try {
    return (
      await axios.get<IListCustomerRes>(
        `${HOST_URI}/dashboard/customers/${id}`,
        {
          withCredentials: true,
        }
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};
export const getAllPlansApi = async () => {
  try {
    return (await axios.get<IPlanRes[]>(`${HOST_URI}/plans`)).data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteCustomerApi = async (customerId: string) => {
  try {
    return (
      await axios.delete<IListCustomerRes[]>(
        `${HOST_URI}/dashboard/customers/${customerId}`,
        {
          withCredentials: true,
        }
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};
