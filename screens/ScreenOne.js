import React from "react";
import styled from "styled-components/native";
import { useLoading, useColors } from "../context/contextFn";

const Container = styled.View`
  height: 100%;
`;
const Text = styled.Text`
  font-weight: 100;
  text-align: center;
`;

const ScreenOne = () => {
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
      <Text style={{ color: fontColor }}>ScreenOne</Text>
    </Container>
  );
};

export default ScreenOne;
