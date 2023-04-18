import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ICity, IState } from "@/interface/type";

const apiURI = "https://iran-locations-api.vercel.app/api/v1/states";
const apiCityURI = "https://iran-locations-api.vercel.app/api/v1/cities?state=";

interface IStates extends IState {
  cities: ICity[];
}

export const stateApi = async () => {
  try {
    return await axios.get<IState[]>(apiURI);
  } catch (error) {
    console.error(error);
  }
};

export const cityApi = async (city: string) => {
  try {
    return await axios.get<IStates>(`${apiCityURI}${city}`);
  } catch (error) {
    console.error(error);
  }
};

export const useGetAllState = () => {
  return useQuery({
    queryKey: ["getState"],
    queryFn: stateApi,
    onError(err) {},
    onSuccess(data) {},
  });
};
export const useGetCityByState = () => {
  return useMutation({
    mutationKey: ["getCityByState"],
    mutationFn: (city: string) => cityApi(city),
    onError(err) {},
    onSuccess(data) {},
  });
};
