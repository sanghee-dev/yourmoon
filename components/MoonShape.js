import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const SCALE = 0.8;
const RADIUS = WIDTH * SCALE;
const SMALL_RADIUS = WIDTH * SCALE * 0.3;
const MARGIN_TOP = 40;

const MoonContainer = styled.TouchableOpacity`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  border-radius: ${WIDTH / 2}px;
  overflow: hidden;
`;
const MoonPeaceContainer = styled.TouchableOpacity`
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
  width: ${SMALL_RADIUS}px;
  height: ${SMALL_RADIUS}px;
  border-radius: ${SMALL_RADIUS / 2}px;
  background-color: "rgba(255,255,0,1)";
  position: relative;
  top: ${WIDTH / 2 - SMALL_RADIUS / 2}px;
`;
const MoonShadow = styled.View`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  border-radius: ${WIDTH / 2}px;
  position: absolute;
  top: ${MARGIN_TOP - MARGIN_TOP}px;
`;

const MoonShape = ({
  illumination,
  leftMoon,
  setDetail,
  MAIN_COLOR,
  SUB_COLOR,
  BG_COLOR,
}) => {
  const LENGTH = 360;
  let moonPeaceArray = [];
  for (let i = 0; i < LENGTH; i++) {
    moonPeaceArray.push(i);
  }

  return (
    <MoonContainer
      onPress={() => setDetail((prev) => !prev)}
      style={[
        {
          transform: [{ scale: SCALE }],
        },
      ]}
    >
      <MoonPeaceContainer onPress={() => setDetail((prev) => !prev)}>
        {moonPeaceArray.map((peace) => (
          <MoonPeace
            key={peace}
            style={[
              {
                transform: [{ rotate: `${1 * peace}deg` }],
              },
            ]}
          >
            <LinearGradient
              style={{ width: 1, height: WIDTH }}
              colors={[MAIN_COLOR, SUB_COLOR, SUB_COLOR, MAIN_COLOR]}
              locations={[0, 0.4, 0.6, 1]}
            />
          </MoonPeace>
        ))}
        <MoonCenter />
      </MoonPeaceContainer>
      <MoonShadow
        style={[
          { backgroundColor: BG_COLOR },
          {
            left: leftMoon ? illumination * WIDTH : -illumination * WIDTH,
          },
          {
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 20,
            shadowColor: BG_COLOR,
          },
        ]}
      />
    </MoonContainer>
  );
};

export default MoonShape;
