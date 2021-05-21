import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useColors } from "../context/contextFn";
import MoonShape from "../components/MoonShape";

const Container = styled.View`
  height: 100%;
  padding-top: 80px;
`;

const Moon = () => {
  const { loading } = useLoading();
  const {
    colors: { subColor, bgColor },
  } = useColors();

  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: bgColor,
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      {loading ? (
        <ActivityIndicator size="small" color={subColor} />
      ) : (
        <>
          <MoonShape />
          {/* <DatePick /> */}
          {/* <MoonDetail /> */}
          {/* <ColorRange /> */}
        </>
      )}
    </Container>
  );
};

export default Moon;
