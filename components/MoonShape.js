import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const DIAMETER = 300;
const MoonContainer = styled.View`
  width: ${DIAMETER}px;
  height: ${DIAMETER}px;
  border-radius: ${DIAMETER / 2}px;
`;

const MoonShape = ({ illumination, leftMoon }) => {
  console.log(illumination);

  return (
    <>
      <MoonContainer
        style={[
          Platform.OS === "ios"
            ? {
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                shadowColor: "white",
              }
            : { elevation: 3 },
        ]}
      >
        <LinearGradient
          style={{
            width: DIAMETER,
            height: DIAMETER,
            borderRadius: DIAMETER / 2,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={
            leftMoon
              ? [
                  "rgba(255,255,255,1)",
                  "rgba(255,255,255,1)",
                  "rgba(255,255,255,0)",
                  "rgba(255,255,255,0)",
                ]
              : [
                  "rgba(255,255,255,0)",
                  "rgba(255,255,255,0)",
                  "rgba(255,255,255,1)",
                  "rgba(255,255,255,1)",
                ]
          }
          locations={[
            0,
            illumination - 0.05 < 0 ? 0 : illumination - 0.05,
            illumination + 0.05 > 1 ? 1 : illumination + 0.05,
            1,
          ]}
        />
      </MoonContainer>
    </>
  );
};

export default MoonShape;
