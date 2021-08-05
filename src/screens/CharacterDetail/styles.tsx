import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary_dark};
`;

export const Header = styled.View`
  width: 100%;
  height: 500px;
  background-color: ${({theme}) => theme.colors.background_primary};
`;
