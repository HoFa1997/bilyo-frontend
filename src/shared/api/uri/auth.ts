import { HOST_URI } from "@/utils/constant";
import { IAuthResponse, ILogin, IRegister, IResponse } from "@/interface/type";
import instanseAxios from "../axios.config";

export const registerApi = async (register: IRegister) => {
  try {
    return (
      await instanseAxios.post<IAuthResponse>(
        `${HOST_URI}/auth/getOtp`,
        register
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export const loginApi = async (login: ILogin) => {
  try {
    return (
      await instanseAxios.post<IAuthResponse>(`${HOST_URI}/auth/checkOtp`, login)
    ).data;
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
