import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native';
import {CharactersListDTO} from '../../services/dtos/CharactersListDTO';
import LottieView from 'lottie-react-native';
import BabyYoda from '../../assets/animations/yoda-the-baby.json';
import {BorderlessButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape_dark};
`;

export const CharactersListWrapper = styled(
  FlatList as new () => FlatList<CharactersListDTO>,
).attrs({})``;

export const Header = styled.View`
  width: 100%;
  height: 280px;
  background-color: ${({theme}) => theme.colors.shape_dark};
`;

export const HeaderImageWrapper = styled(BorderlessButton)`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.Image`
  width: 90%;
  height: 150px;
`;

export const HeaderTitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.shape_light};
  text-transform: uppercase;
  font-weight: bold;
`;

export const LoadingWrapper = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 130px;
  align-items: center;
`;

export const BabyYodaAnimation = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  resizeMode: 'contain',
  source: BabyYoda,
})`
  justify-content: center;
  align-items: center;
  height: 250px;
`;
