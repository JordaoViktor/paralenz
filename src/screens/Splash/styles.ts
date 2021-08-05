import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import BB8Robot from '../../assets/animations/BB8-splash-screen.json';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
  align-items: center;
  justify-content: center;
`;

export const BB8Animation = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  resizeMode: 'contain',
  source: BB8Robot,
})`
  justify-content: center;
  align-items: center;
  height: 400px;
`;
