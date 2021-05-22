import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useColors, useIsDarkMode } from "../context/contextFn";

const Container = styled.View`
  height: 100%;
`;
const Text = styled.Text`
  font-weight: 100;
  text-align: center;
`;

const Detail = () => {
  const { loading } = useLoading();
  const {
    colors: { fontColor },
  } = useColors();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      <Text style={{ color: fontColor }}>Detail</Text>
    </Container>
  );
};

export default Detail;
