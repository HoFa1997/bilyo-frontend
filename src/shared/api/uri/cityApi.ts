import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiURI = "https://iran-locations-api.vercel.app/api/v1/states";
const apiCityURI = "https://iran-locations-api.vercel.app/api/v1/cities?state=";

export interface IProvince {
  name: string;
  center: string;
  latitude: string;
  longitude: string;
  id: number;
}

interface ICity {
  name: string;
  latitude: string;
  longitude: string;
  id: number;
}

interface Provinces extends IProvince {
  cities: ICity[];
}

export const stateApi = async () => {
  try {
    return await axios.get<IProvince[]>(apiURI);
  } catch (error) {
    console.error(error);
  }
};

export const cityApi = async (city: string) => {
  try {
    return await axios.get<Provinces>(`${apiCityURI}${city}`);
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
