import React from 'react';
import {Home} from '../screens/Home';
import {CharacterDetail} from '../screens/CharacterDetail';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export const StackRoutes: React.FC = () => (
  <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
    <Screen name="Home" component={Home} />
    <Screen name="CharacterDetail" component={CharacterDetail} />
  </Navigator>
);
