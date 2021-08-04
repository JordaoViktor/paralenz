import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';

import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
