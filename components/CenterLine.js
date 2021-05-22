import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Line = styled.View`
  position: absolute;
  top: ${-WIDTH}px;
  height: ${HEIGHT}px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-style: dotted;
  transform: scale(0.8, 1.5);
`;

const CenterLine = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default CenterLine;
