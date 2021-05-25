import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { useLoading, useIsDarkMode } from "../context/contextFn";
import Container from "../components/Container";
import Title from "../components/Title";
import ToggleColumns from "../components/Setting/ToggleColumns";
import ColorColumns from "../components/Setting/ColorColumns";

const Setting = () => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container>
      <StatusBar barStyle="light-content" hidden={true} />
      <Title text="Setting" />
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
