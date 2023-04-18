import { useQuery } from '@tanstack/react-query';
import { getAllPlansApi } from '../uri/homePage';

export const useGetAllPlans = () => {
  return useQuery({
    queryKey: ['getAllPlans'],
    queryFn: getAllPlansApi,
    onError(err) {},
    onSuccess(data) {},
  });
};
