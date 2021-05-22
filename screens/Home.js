import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useColors } from "../context/contextFn";
import MoonShape from "../components/MoonShape";
import Ellipse from "../components/Ellipse";
import CenterLine from "../components/CenterLine";
import Days from "../components/Days";
import Swipe from "../components/Swipe";

const Container = styled.View`
  flex: 1;
`;
const View = styled.View`
  flex: 1;
  align-items: center;
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
        <View>
          <Days />
          <MoonShape />
          <Ellipse />
          <CenterLine />
          <Swipe />
        </View>
      )}
    </Container>
  );
};

export default Home;
