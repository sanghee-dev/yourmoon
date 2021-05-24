import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useColors, useIsDarkMode } from "../context/contextFn";
import MoonShape from "../components/Home/MoonShape";
import Stage from "../components/Home/Stage";
import Ellipse from "../components/Home/Ellipse";
import Days from "../components/Home/Days";

const Container = styled.View`
  flex: 1;
  padding-top: 40px;
`;
const View = styled.View`
  flex: 1;
  align-items: center;
`;

const Home = () => {
  const { loading } = useLoading();
  const {
    colors: { subColor },
  } = useColors();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      {loading ? (
        <ActivityIndicator size="small" color={subColor} />
      ) : (
        <View>
          <Stage />
          <MoonShape />
          <Days />
          <Ellipse />
        </View>
      )}
    </Container>
  );
};

export default Home;
