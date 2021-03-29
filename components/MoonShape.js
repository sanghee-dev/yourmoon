import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const DIAMETER = 300;
const Container = styled.View``;
const MoonContainer = styled.View`
  width: ${DIAMETER}px;
  height: ${DIAMETER}px;
  border-radius: ${DIAMETER / 2}px;
  background-color: white;
  overflow: hidden;
`;

const MoonShape = () => {
  return (
    <Container>
      <MoonContainer>
        <LinearGradient
          style={{ width: DIAMETER, height: DIAMETER }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            "rgba(0,0,0,0)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,0)",
            "rgba(0,0,0,0)",
          ]}
          locations={[0, 0.4, 0.6, 1]}
        />
      </MoonContainer>
    </Container>
  );
};

export default MoonShape;
