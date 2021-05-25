import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import { useLoading, useIsDarkMode } from "../context/contextFn";
import Container from "../components/Container";
import MoonShape from "../components/Home/MoonShape";
import Stage from "../components/Home/Stage";
import Days from "../components/Home/Days";

const View = styled.View`
  flex: 1;
  align-items: center;
`;

const Home = () => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container>
      <StatusBar barStyle="light-content" hidden={true} />
      {loading ? (
        <ActivityIndicator
          size="small"
          color={isDarkMode ? "white" : "black"}
        />
      ) : (
        <View>
          <Stage />
          <MoonShape />
          <Days />
        </View>
      )}
    </Container>
  );
};

export default Home;
