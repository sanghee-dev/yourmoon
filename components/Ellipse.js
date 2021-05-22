import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 0;
  height: 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 80px;
`;
const Oval = styled.View`
  width: ${WIDTH / 2}px;
  height: ${WIDTH / 2}px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1000;
  transform: scale(1.8, 0.3);
`;

const Ellipse = () => {
  return (
    <Container>
      <Oval />
    </Container>
  );
};

export default Ellipse;