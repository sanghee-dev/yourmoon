import React from "react";
import styled from "styled-components/native";
import { useMoon, useIsDarkMode } from "../../context/contextFn";

const Text = styled.Text`
  font-weight: 200;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const Stage = () => {
  const {
    moon: { illumination, stage },
  } = useMoon();
  const { isDarkMode } = useIsDarkMode();

  const getName = (illumination) => {
    const error = 2;
    return illumination <= error
      ? "Moon"
      : illumination <= 50 - error
      ? "Crescent"
      : illumination <= 50 + error
      ? "Quarter"
      : illumination <= 100 - error
      ? "Gibbous"
      : "Moon";
  };
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  return (
    <Text style={{ color: isDarkMode ? "white" : "black" }}>
      {capitalize(stage)} {getName(illumination)}
    </Text>
  );
};

export default Stage;
