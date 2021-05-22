import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useColors } from "../context/contextFn";
import MoonShape from "../components/MoonShape";
import Ellipse from "../components/Ellipse";
import CenterLine from "../components/CenterLine";

const Container = styled.View`
  flex: 1;

  padding-top: 80px;
`;

const Home = () => {
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
          <Ellipse />
          <CenterLine />
        </>
      )}
    </Container>
  );
};

export default Home;
