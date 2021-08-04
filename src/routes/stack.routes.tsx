import React from 'react';
import {Home} from '../screens/Home';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export const StackRoutes: React.FC = () => (
  <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
    <Screen name="Home" component={Home} />
  </Navigator>
);
