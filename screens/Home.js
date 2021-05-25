import React from "react";
import styled from "styled-components/native";
import { useLoading } from "../context/contextFn";
import Status from "../components/Status";
import Indicator from "../components/Indicator";
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

  return (
    <Container>
      <Status />
      {loading ? (
        <Indicator />
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
