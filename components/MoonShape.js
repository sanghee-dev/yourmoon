import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const DIAMETER = 300;
const MoonContainer = styled.View`
  width: ${DIAMETER}px;
  height: ${DIAMETER}px;
  border-radius: ${DIAMETER / 2}px;
  background-color: white;
  overflow: hidden;
`;
const MoonShadow = styled.View`
  width: ${DIAMETER}px;
  height: ${DIAMETER}px;
  border-radius: ${DIAMETER / 2}px;
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
`;

const MoonShape = ({ illumination, leftMoon }) => {
  return (
    <MoonContainer>
      <MoonShadow
        style={{
          left: leftMoon ? illumination * 3 : -illumination * 3,
        }}
      />
    </MoonContainer>
  );
};

export default MoonShape;
