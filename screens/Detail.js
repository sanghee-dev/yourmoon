import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useIsDarkMode } from "../context/contextFn";

const Container = styled.View`
  flex: 1;
  padding-top: 40px;
`;
const Text = styled.Text`
  font-size: 32px;
  font-weight: 200;
  text-align: center;
`;

const Detail = () => {
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
      <Text style={{ color: isDarkMode ? "white" : "black" }}>Detail</Text>
    </Container>
  );
};

export default Detail;
