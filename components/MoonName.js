import React from "react";
import styled from "styled-components/native";
import { useMoon, useColors } from "../context/contextFn";

const Text = styled.Text`
  font-weight: 100;
  font-size: 40px;
  text-align: center;
`;

const MoonName = () => {
  const {
    moon: { stage },
  } = useMoon();
  const { colors } = useColors();

  const capitalize = (str) => str?.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Text style={{ color: colors.fontColor }}>{capitalize(stage)} Moon</Text>
  );
};

export default MoonName;
