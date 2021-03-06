import React from "react";
import styled from "styled-components/native";
import { useIsDarkMode } from "../context/contextFn";

const Text = styled.Text`
  font-size: 32px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = ({ children }) => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <Text style={{ color: isDarkMode ? "white" : "black" }}>{children}</Text>
  );
};

export default Title;
