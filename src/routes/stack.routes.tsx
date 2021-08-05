import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {Home} from '../screens/Home';
import {CharacterDetail} from '../screens/CharacterDetail';
import {Splash} from '../screens/Splash';

import {CharactersDTO} from '../services/dtos/CharactersDTO';

const {Navigator, Screen} = createNativeStackNavigator();

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  CharacterDetail: CharactersDTO;
};

export const StackRoutes: React.FC = () => (
  <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
    <Screen name="Splash" component={Splash} />
    <Screen name="Home" component={Home} />
    <Screen name="CharacterDetail" component={CharacterDetail} />
  </Navigator>
);
