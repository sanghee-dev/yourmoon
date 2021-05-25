import React from "react";
import styled from "styled-components/native";
import { useIsDarkMode } from "../context/contextFn";

const Text = styled.Text`
  font-size: 32;
  font-weight: 200;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = ({ text }) => {
  const { isDarkMode } = useIsDarkMode();

  return <Text style={{ color: isDarkMode ? "white" : "black" }}>{text}</Text>;
};

export default Title;
