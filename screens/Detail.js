import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import StyleSheet from "../styles/StyleSheet";
import { useLoading, useIsDarkMode } from "../context/contextFn";

const Container = styled.View`
  flex: 1;
`;
const Title = styled.Text``;

const Detail = () => {
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
        Detail
      </Title>
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

export default Detail;
