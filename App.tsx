import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';

import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}
