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
  margin-top: 40px;
`;
const MoonPeace = styled.View`
  width: ${WIDTH / 5}px;
  height: ${WIDTH}px;
  position: absolute;
`;
const MoonCenter = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: "rgba(255,255,0,1)";
  position: relative;
  bottom: ${WIDTH / 2 + 40}px;
`;

const MoonShape = ({ illumination, leftMoon }) => {
  const LENGTH = 360;
  let moonPeaceArray = [];
  for (let i = 0; i < LENGTH; i++) {
    moonPeaceArray.push(i);
  }

  return (
    <>
      <MoonPeaceContainer
        style={[
          {
            transform: [{ scale: 0.9 }],
          },
        ]}
      >
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
                "rgba(255,255,255,1)",
                "rgba(255,255,0,1)",
                "rgba(255,255,0,1)",
                "rgba(255,255,255,1)",
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
