import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { useLoading, useIsDarkMode } from "../context/contextFn";
import Container from "../components/Container";
import Title from "../components/Title";

const Detail = () => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container>
      <StatusBar barStyle="light-content" hidden={true} />
      <Title text="Detail" />
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
