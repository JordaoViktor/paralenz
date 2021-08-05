import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, BB8Animation} from './styles';

export const Splash: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    setTimeout(() => handleNavigateHome(), 4000);
  }, [handleNavigateHome]);

  return (
    <Container>
      <BB8Animation />
    </Container>
  );
};
