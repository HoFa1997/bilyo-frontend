import { HOST_URI } from "@/utils/constant";
import { instanseAxios } from "../axios.config";
import { ILogin, IRegister, IResponse } from "@/interface/type";

export const registerApi = async (register: IRegister) => {
  try {
    return (
      await instanseAxios.post<IResponse>(`${HOST_URI}/auth/register`, register)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const loginApi = async (login: ILogin) => {
  try {
    return await instanseAxios.post<IResponse>(`${HOST_URI}/auth/login`, login);
  } catch (error) {
    console.error(error);
  }
};

export const validatorApi = async () => {
  try {
    return await instanseAxios.get<IResponse>(`${HOST_URI}/auth/isvalid`);
  } catch (error) {
    console.error(error);
  }
};

export const logoutApi = async () => {
  try {
    return (await instanseAxios.get<IResponse>(`${HOST_URI}/auth/logout`)).data;
  } catch (error) {
    console.error(error);
  }
};
