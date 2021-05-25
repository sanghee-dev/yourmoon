import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import StyleSheet from "../styles/StyleSheet";
import { useLoading, useIsDarkMode } from "../context/contextFn";
import Container from "../components/Container";
import Title from "../components/Title";

const ScreenTwo = () => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container>
      <StatusBar barStyle="light-content" hidden={true} />
      <Title text="Screen Two" />
      {loading ? (
        <ActivityIndicator
          size="small"
          color={isDarkMode ? "white" : "black"}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ScreenTwo;
