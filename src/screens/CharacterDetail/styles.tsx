import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import BabyYoda from '../../assets/animations/yoda-the-baby.json';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary_dark};
`;

export const Header = styled.View`
  width: 100%;
  height: 500px;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -20px;
`;
export const BadgeWrapper = styled.View`
  margin-top: -15px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Badge = styled.View`
  background-color: ${({theme}) => theme.colors.shape_light};
  width: 90%;
  height: 70px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const BadgeText = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
`;

export const Footer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 70px;
`;

export const FooterWrapper = styled.View``;

export const FooterFieldWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const FooterFieldText = styled.Text`
  font-size: ${RFValue(25)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.shape_light};
`;

export const FooterFieldCharacterDetail = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.shape_dark};
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
