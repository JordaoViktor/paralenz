import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Header = styled.View`
  flex: 1;
  background-color: red;
`;

export default function App() {
  return (
    <Header>
      <Text>hello world !</Text>
      <StatusBar style="auto" />
    </Header>
  );
}
