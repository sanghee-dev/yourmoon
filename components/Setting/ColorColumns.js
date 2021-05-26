import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColors, useIsDarkMode } from "../../context/contextFn";
import Column from "../Column";
import ColumnText from "../ColumnText";

const ColorBox = styled.View`
  flex-direction: row;
`;
const Color = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;

const ColorColumns = () => {
  const {
    colors,
    colors: { mainColor, subColor },
    setColors,
  } = useColors();
  const { isDarkMode } = useIsDarkMode();

  const colorArr = [
    {
      title: "Main Color",
      value: mainColor,
      onClick: () => setColors((prev) => prev),
    },
    {
      title: "Sub Color",
      value: subColor,
      onClick: () => setColors((prev) => prev),
    },
  ];
  const colorChips = [
    "rgb(255,255,255)",
    "rgb(255,0,0)",
    "rgb(255,0,255)",
    "rgb(255,255,0)",
    "rgb(0,255,0)",
    "rgb(0,0,255)",
    "rgb(0,0,0)",
  ];
  const getCheckColor = (colorChip, value) => {
    if (colorChip === value)
      return value === "rgb(255,255,255)" ||
        value === "rgb(255,255,0)" ||
        value === "rgb(0,255,0)"
        ? "black"
        : "white";
    return "transparent";
  };

  return (
    <>
      {colorArr.map((color, idx) => (
        <Column key={idx}>
          <ColumnText>{color.title}</ColumnText>
          <ColorBox>
            {colorChips.map((colorChip, idx) => (
              <Color
                onPress={() => {
                  if (color.title === "Main Color") {
                    setColors({ ...colors, mainColor: colorChip });
                  } else {
                    setColors({ ...colors, subColor: colorChip });
                  }
                }}
                key={idx}
                style={{
                  backgroundColor: colorChip,
                  borderWidth: 1,
                  borderColor: isDarkMode
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(0,0,0,0.1)",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  size={18}
                  color={getCheckColor(colorChip, color.value)}
                />
              </Color>
            ))}
          </ColorBox>
        </Column>
      ))}
    </>
  );
};

export default ColorColumns;
