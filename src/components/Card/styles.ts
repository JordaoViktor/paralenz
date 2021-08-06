import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import BabyYoda from '../../assets/animations/yoda-the-baby.json';

export const Container = styled(RectButton)`
  height: 100px;
  background-color: ${({theme}) => theme.colors.secondary_dark};
  margin: 10px;
  margin-top: 50px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const CardAlignment = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  margin-top: 5px;
  width: 80%;
`;

export const CardField = styled.Text`
  margin-right: 35px;
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
export const BabyYodaAnimation = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  resizeMode: 'contain',
  source: BabyYoda,
})`
  justify-content: center;
  align-items: center;
  height: 50px;
`;
