import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-weight: 100;
  font-size: 40px;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const MoonName = ({ stage, fontColor }) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return <Text style={{ color: fontColor }}>{capitalize(stage)} Moon</Text>;
};

export default MoonName;
