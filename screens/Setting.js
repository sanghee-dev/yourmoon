import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import StyleSheet from "../styles/StyleSheet";
import { useLoading, useIsDarkMode } from "../context/contextFn";
import ToggleColumns from "../components/Setting/ToggleColumns";
import ColorColumns from "../components/Setting/ColorColumns";

const Container = styled.View`
  flex: 1;
`;
const Title = styled.Text``;

const Setting = () => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container
      style={{
        ...StyleSheet.Container,
        justifyContent: loading ? "center" : "",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      <Title
        style={{ ...StyleSheet.Title, color: isDarkMode ? "white" : "black" }}
      >
        Setting
      </Title>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={isDarkMode ? "white" : "black"}
        />
      ) : (
        <>
          <ToggleColumns />
          <ColorColumns />
        </>
      )}
    </Container>
  );
};

export default Setting;
