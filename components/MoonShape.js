import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const SCALE = 0.8;
const RADIUS = WIDTH * SCALE;
const MARGIN_TOP = 40;

const MoonContainer = styled.View`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  border-radius: ${WIDTH / 2}px;
  overflow: hidden;
`;
const MoonPeaceContainer = styled.View`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  border-radius: ${WIDTH / 2}px;
  align-items: center;
`;
const MoonPeace = styled.View`
  width: ${WIDTH / 5}px;
  height: ${WIDTH}px;
  position: absolute;
`;
const MoonCenter = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: "rgba(255,255,0,1)";
  position: relative;
  bottom: ${WIDTH / 2 + 35}px;
  left: ${WIDTH / 2 - 35}px;
`;
const MoonShadow = styled.View`
  width: ${RADIUS + 2}px;
  height: ${RADIUS + 2}px;
  border-radius: ${RADIUS / 2 + 1}px;
  background-color: black;
  position: absolute;
  top: ${MARGIN_TOP}px;
`;

const MoonShape = ({ illumination, leftMoon }) => {
  console.log(illumination, leftMoon);

  const LENGTH = 360;
  let moonPeaceArray = [];
  for (let i = 0; i < LENGTH; i++) {
    moonPeaceArray.push(i);
  }

  return (
    <MoonContainer>
      <MoonPeaceContainer
        style={[
          {
            transform: [{ scale: SCALE }],
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
              style={{ width: 1, height: WIDTH }}
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
      <MoonShadow
        style={[
          {
            left: leftMoon
              ? illumination * RADIUS + MARGIN_TOP
              : -illumination * RADIUS + MARGIN_TOP,
          },
          {
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 20,
          },
        ]}
      />
    </MoonContainer>
  );
};

export default MoonShape;
