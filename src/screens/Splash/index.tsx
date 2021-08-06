import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/stack.routes';
import {useFetch} from '../../services/hooks/useFetch';
import {Container, BB8Animation} from './styles';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export const Splash: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  const apiLimit = 82;
  const query = `people?ordering=name&page=1&limit=${apiLimit}`;

  const {data} = useFetch(query);

  function handleNavigateHome() {
    navigation.navigate('Home', data);
  }

  useEffect(() => {
    if (data) {
      setTimeout(() => handleNavigateHome(), 4000);
    }
  });

  return (
    <Container>
      <BB8Animation />
    </Container>
  );
};
