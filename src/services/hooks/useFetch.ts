import {api} from '../api';
import useSWR from 'swr';

export function useFetch<Data = any>(url: string) {
  const fetcher = () =>
    api
      .get(url)
      .then((response: any) => response.data)
      .catch((error: any) => console.log(error.message));

  const {data, error} = useSWR<Data>(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}
