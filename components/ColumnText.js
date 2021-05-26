import React from "react";
import styled from "styled-components/native";
import { useIsDarkMode } from "../context/contextFn";

const Text = styled.Text`
  font-size: 28px;
  font-weight: 200;
`;

const ColumnText = ({ children }) => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <Text style={{ color: isDarkMode ? "white" : "black" }}>{children}</Text>
  );
};

export default ColumnText;
