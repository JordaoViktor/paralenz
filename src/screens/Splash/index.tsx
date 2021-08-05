import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/stack.routes';

import {Container, BB8Animation} from './styles';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export const Splash: React.FC = () => {
  const navigation = useNavigation<HomeScreenProp>();

  function handleNavigateHome() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    setTimeout(() => handleNavigateHome(), 4000);
  });

  return (
    <Container>
      <BB8Animation />
    </Container>
  );
};
