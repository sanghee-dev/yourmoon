import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
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
