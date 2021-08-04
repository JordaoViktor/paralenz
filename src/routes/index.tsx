import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './stack.routes';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Routes: React.FC = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);

export default Routes;
