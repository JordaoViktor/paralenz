import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import {CharacterInformation} from './src/context/CharacterInformation';

import Routes from './src/routes';

export default function App() {
  return (
    <CharacterInformation>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
    </CharacterInformation>
  );
}
