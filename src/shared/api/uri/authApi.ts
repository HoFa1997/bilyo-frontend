import {
  IRegisterModel,
  IAuthResSuccess,
  ILoginModel,
  IValidator,
  ISinout,
} from "@/interface/api";
import { HOST_URI } from "@/utils/constant";
import instanse from "axios";

const axios = instanse.create({
  withCredentials: true,
});

export const registerApi = async (register: IRegisterModel) => {
  try {
    return (
      await axios.post<IAuthResSuccess>(`${HOST_URI}/auth/register`, register)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const loginApi = async (login: ILoginModel) => {
  try {
    return await axios.post<IAuthResSuccess>(`${HOST_URI}/auth/login`, login);
  } catch (error) {
    console.error(error);
  }
};

export const validatorApi = async () => {
  try {
    return await axios.get<IValidator>(`${HOST_URI}/auth/isvalid`);
  } catch (error) {
    console.error(error);
  }
};

export const logoutApi = async () => {
  try {
    return (await axios.get<ISinout>(`${HOST_URI}/auth/logout`)).data;
  } catch (error) {
    console.error(error);
  }
};
