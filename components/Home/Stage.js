import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../styles/StyleSheet";
import { useMoon, useIsDarkMode } from "../../context/contextFn";

const Text = styled.Text``;

const Stage = () => {
  const {
    moon: { illumination, stage },
  } = useMoon();
  const { isDarkMode } = useIsDarkMode();

  const error = 0.5;
  const getStageName = (stage) => {
    let stageName =
      illumination < error
        ? "New"
        : illumination > 100 - error
        ? "Full"
        : stage;
    return stageName[0].toUpperCase() + stageName.slice(1);
  };
  const getMoonName = (illumination) => {
    return illumination < error
      ? "Moon"
      : illumination <= 50 - error
      ? "Crescent"
      : illumination <= 50 + error
      ? "Quarter"
      : illumination <= 100 - error
      ? "Gibbous"
      : "Moon";
  };

  return (
    <Text
      style={{ ...StyleSheet.Title, color: isDarkMode ? "white" : "black" }}
    >
      {getStageName(stage)} {getMoonName(illumination)}
    </Text>
  );
};

export default Stage;
