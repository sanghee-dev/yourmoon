import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useMoon, useIsLeft, useColors } from "../context/contextFn";

const { width: WIDTH } = Dimensions.get("window");
const SCALE = 0.8;
const SMALL_RADIUS = WIDTH * SCALE * 0.3;
const MARGIN_TOP = 40;
const PIECES = 160;

const Container = styled.TouchableOpacity`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  border-radius: ${WIDTH / 2}px;
  overflow: hidden;
  position: absolute;
  top: 20px;
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

const MoonShape = () => {
  const {
    moon: { illumination },
  } = useMoon();
  const { isLeft } = useIsLeft();
  const {
    colors: { mainColor, subColor, bgColor },
  } = useColors();

  let moonPeaceArray = [];
  for (let i = 0; i < PIECES; i++) {
    moonPeaceArray.push(i);
  }

  return (
    <Container
      onPress={() => {}}
      onLongPress={() => {}}
      style={[
        {
          transform: [{ scale: SCALE }],
        },
      ]}
    >
      <MoonPeaceContainer>
        {moonPeaceArray.map((idx) => (
          <MoonPeace
            key={idx}
            style={[
              {
                transform: [{ rotate: `${(360 / PIECES) * idx}deg` }],
              },
            ]}
          >
            <LinearGradient
              style={{ width: 1, height: WIDTH }}
              colors={[subColor, mainColor, mainColor, subColor]}
              locations={[0, 0.4, 0.6, 1]}
            />
          </MoonPeace>
        ))}
        <MoonCenter style={{ backgroundColor: mainColor }} />
      </MoonPeaceContainer>
      <MoonShadow
        style={[
          { backgroundColor: bgColor },
          {
            left: isLeft
              ? (Math.round(illumination * 10) / 1000) * WIDTH
              : (-Math.round(illumination * 10) / 1000) * WIDTH,
          },
          {
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 20,
            shadowColor: bgColor,
          },
        ]}
      />
    </Container>
  );
};

export default MoonShape;
