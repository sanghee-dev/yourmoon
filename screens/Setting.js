import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { useIsDarkMode } from "../context/contextFn";
import ToggleColumns from "../components/Setting/ToggleColumns";
import ColorColumns from "../components/Setting/ColorColumns";

const Container = styled.View`
  flex: 1;
  padding-top: 40px;
`;
const Text = styled.Text`
  font-size: 32px;
  font-weight: 200;
  text-align: center;
`;

const Setting = () => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      <Text style={{ color: isDarkMode ? "white" : "black" }}>Setting</Text>
      <ToggleColumns />
      <ColorColumns />
    </Container>
  );
};

export default Setting;
