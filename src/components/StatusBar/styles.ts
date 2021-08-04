import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: black;
  width: 100%;
  height: ${Platform.OS === 'android' ? 0 : getStatusBarHeight() + 20}px;
`;
