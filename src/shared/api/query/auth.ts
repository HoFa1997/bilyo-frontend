import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { validatorApi } from '../uri/auth';

export const useValidatorQuery = () => {
  const { push } = useRouter();
  return useQuery({
    queryKey: ['isValidator'],
    queryFn: validatorApi,
    onError(err) {
      push('/login');
    },
  });
};
