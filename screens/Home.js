import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import styled from "styled-components/native";
import StyleSheet from "../styles/StyleSheet";
import {
  useLoading,
  useIsDarkMode,
  useHasGridLine,
} from "../context/contextFn";
import MoonShape from "../components/Home/MoonShape";
import Stage from "../components/Home/Stage";
import Days from "../components/Home/Days";
import Ellipse from "../components/Home/Ellipse";
import CenterLine from "../components/Home/CenterLine";

const Container = styled.View`
  flex: 1;
`;
const View = styled.View`
  flex: 1;
  align-items: center;
`;

const Home = () => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();
  const { hasGridLine } = useHasGridLine();

  return (
    <Container
      style={{
        ...StyleSheet.Container,
        justifyContent: loading ? "center" : "",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
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
          {/* {hasGridLine ? (
            <>
              <Ellipse />
              <CenterLine />
            </>
          ) : (
            <></>
          )} */}
        </View>
      )}
    </Container>
  );
};

export default Home;
