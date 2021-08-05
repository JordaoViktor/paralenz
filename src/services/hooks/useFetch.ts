import {api} from '../api';
import useSWR from 'swr';

export function useFetch<Data = any>(url: string) {
  const fetcher = () =>
    api
      .get(url)
      .then((res: any) => res.data)
      .catch((err: any) => console.log(err.message));

  const {data, error} = useSWR<Data>(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}
