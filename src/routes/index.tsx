import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './stack.routes';
import {enableScreens} from 'react-native-screens';
import {CharacterInformationContext} from '../context/CharacterInformation';
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import darkTheme from '../styles/darkTheme';
enableScreens();

const Routes: React.FC = () => {
  const {globalTheme} = useContext(CharacterInformationContext);

  return (
    <ThemeProvider theme={globalTheme ? darkTheme : theme}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
