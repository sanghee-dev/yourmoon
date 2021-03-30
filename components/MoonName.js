import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-weight: 100;
  font-size: 40px;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const MoonName = ({ stage, FONT_COLOR }) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return <Text style={{ color: FONT_COLOR }}>{capitalize(stage)} Moon</Text>;
};

export default MoonName;
