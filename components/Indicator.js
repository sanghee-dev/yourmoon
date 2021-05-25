import React from "react";
import { ActivityIndicator } from "react-native";
import { useIsDarkMode } from "../context/contextFn";

const Indicator = () => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <ActivityIndicator size="small" color={isDarkMode ? "white" : "black"} />
  );
};

export default Indicator;
