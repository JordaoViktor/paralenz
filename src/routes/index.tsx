import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './stack.routes';
import {enableScreens} from 'react-native-screens';
import {CharacterInformation} from '../context/CharacterInformation';

enableScreens();

const Routes: React.FC = () => (
  <CharacterInformation>
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  </CharacterInformation>
);

export default Routes;
