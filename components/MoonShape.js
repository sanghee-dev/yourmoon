import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const DIAMETER = 300;
const MoonContainer = styled.View`
  width: ${DIAMETER}px;
  height: ${DIAMETER}px;
  border-radius: ${DIAMETER / 2}px;
  overflow: hidden;
`;

const MoonShape = () => {
  return (
    <MoonContainer>
      <LinearGradient
        style={{ width: DIAMETER, height: DIAMETER }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          "rgba(255,255,255,1)",
          "rgba(255,255,255,1)",
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0)",
        ]}
        locations={[0, 0.4, 0.6, 1]}
      />
    </MoonContainer>
  );
};

export default MoonShape;
