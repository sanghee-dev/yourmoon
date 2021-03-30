import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 1;

const MoonPeaceContainer = styled.View`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  align-items: center;
`;
const MoonPeace = styled.View`
  width: ${WIDTH / 5}px;
  height: ${WIDTH}px;
  position: absolute;
`;
const MoonCenter = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: white;
  position: relative;
  bottom: ${WIDTH / 2 + 45}px;
`;

const MoonShape = ({ illumination, leftMoon }) => {
  const LENGTH = 360;
  let moonPeaceArray = [];
  for (let i = 0; i < LENGTH; i++) {
    moonPeaceArray.push(i);
  }

  return (
    <>
      <MoonPeaceContainer>
        {moonPeaceArray.map((peace) => (
          <MoonPeace
            style={[
              {
                transform: [{ rotate: `${1 * peace}deg` }],
              },
            ]}
          >
            <LinearGradient
              style={{ width: RADIUS, height: WIDTH }}
              colors={[
                "rgba(255,255,255,0)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,0)",
              ]}
              locations={[0, 0.4, 0.6, 1]}
            />
          </MoonPeace>
        ))}
      </MoonPeaceContainer>
      <MoonCenter />
    </>
  );
};

export default MoonShape;
