import {api} from '../api';
import useSWR from 'swr';

type SWRResponse<T> =
  | {
      isLoading: true;
      data: undefined;
      error: undefined;
    }
  | {
      isLoading: false;
      data: T;
      error: undefined;
    }
  | {
      isLoading: false;
      data: undefined;
      error: Error;
    };

export function useFetch<Data = any>(url: string): SWRResponse<Data> {
  const fetcher = () =>
    api
      .get(url)
      .then((response: any) => response.data)
      .catch((error: any) => console.log(error.message));

  const {data, error} = useSWR<Data>(url, fetcher);

  if (!data && !error) {
    return {isLoading: true, data: undefined, error: undefined};
  }
  if (data) {
    return {isLoading: false, data, error: undefined};
  }

  return {
    data: undefined,
    error: new Error(error),
    isLoading: false,
  };
}
