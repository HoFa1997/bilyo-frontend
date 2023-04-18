import { HOST_URI } from "@/utils/constant";
import { IPlanRes } from "@/interface/type";
import { instanseAxios } from "../axios.config";

export const getAllPlansApi = async () => {
  try {
    return (await instanseAxios.get<IPlanRes[]>(`${HOST_URI}/plans`)).data;
  } catch (e) {
    console.error(e);
  }
};
