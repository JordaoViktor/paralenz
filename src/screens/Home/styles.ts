import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const ScrollViewWrapper = styled.ScrollView.attrs({
  scrollEventThrottle: 16,
  contentContainerStyle: {
    paddingTop: 40,
    paddingBottom: 300,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  width: 100%;
  height: 280px;
  background-color: ${({theme}) => theme.colors.shape_dark};
`;

export const HeaderImageWrapper = styled.View`
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
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;
