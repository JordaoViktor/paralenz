import {Alert, BackHandler} from 'react-native';
import {api} from '../api';
import useSWR from 'swr';

export function useFetch<Data = any>(url: string) {
  const errorAlert = (error: Error) =>
    Alert.alert('Services off. try in some minutes', error.message, [
      {
        text: 'Leave App',
        onPress: () => BackHandler.exitApp(),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const fetcher = () =>
    api
      .get(url)
      .then((res: any) => res.data)
      .catch((err: any) => {
        console.log(err.message);
        err ?? errorAlert(err);
      });

  const {data, error} = useSWR<Data>(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}
