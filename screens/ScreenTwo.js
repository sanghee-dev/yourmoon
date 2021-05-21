import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useColors } from "../context/contextFn";

const Container = styled.View`
  height: 100%;
`;
const Text = styled.Text`
  font-weight: 100;
  text-align: center;
`;

const ScreenTwo = () => {
  const { loading } = useLoading();
  const {
    colors: { bgColor, fontColor },
  } = useColors();

  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: bgColor,
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      <Text style={{ color: fontColor }}>ScreenTwo</Text>
    </Container>
  );
};

export default ScreenTwo;
