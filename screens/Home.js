import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useColors, useIsDarkMode } from "../context/contextFn";
import MoonShape from "../components/Home/MoonShape";
import Ellipse from "../components/Home/Ellipse";
import CenterLine from "../components/Home/CenterLine";
import Days from "../components/Home/Days";
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
    colors: { subColor },
  } = useColors();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: isDarkMode ? "white" : "black",
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
