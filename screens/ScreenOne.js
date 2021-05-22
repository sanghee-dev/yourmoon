import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useIsDarkMode } from "../context/contextFn";

const Container = styled.View`
  height: 100%;
`;
const Text = styled.Text`
  font-weight: 200;
  text-align: center;
`;

const ScreenOne = () => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      <Text style={{ color: isDarkMode ? "white" : "black" }}>ScreenOne</Text>
    </Container>
  );
};

export default ScreenOne;
