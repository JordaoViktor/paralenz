import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1b1b1f;
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
  height: 250px;
  background-color: red;
`;
