import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  color: white;
  font-weight: 100;
  font-size: 40px;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const MoonName = ({ stage }) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return <Text>{capitalize(stage)} Moon</Text>;
};

export default MoonName;
