import React from "react";
import { useMoon, useIsDarkMode } from "../../context/contextFn";
import Title from "../Title";

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
    <Title>
      {getStageName(stage)} {getMoonName(illumination)}
    </Title>
  );
};

export default Stage;
