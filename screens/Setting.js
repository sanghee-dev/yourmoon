import React from "react";
import { StatusBar, Switch } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColors, useIsDarkMode, useHasGridLine } from "../context/contextFn";

const Container = styled.View`
  flex: 1;
  padding-top: 40px;
`;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
`;
const Text = styled.Text`
  font-size: 28px;
  font-weight: 200;
`;
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

const Setting = () => {
  const {
    colors: { mainColor, subColor },
    setColors,
  } = useColors();
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const { hasGridLine, setHasGridLine } = useHasGridLine();

  const toggleArr = [
    {
      title: "DarkMode",
      onValueChange: () => setIsDarkMode((prev) => !prev),
      value: isDarkMode,
    },
    {
      title: "Line",
      onValueChange: () => setHasGridLine((prev) => !prev),
      value: hasGridLine,
    },
  ];
  const colorArr = [
    {
      title: "Main Color",
      onClick: () => setColors((prev) => prev),
      value: mainColor,
    },
    {
      title: "Sub Color",
      onClick: () => setColors((prev) => prev),
      value: subColor,
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

  return (
    <Container
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />

      {toggleArr.map((toggle, idx) => (
        <Column
          key={idx}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: isDarkMode
              ? "rgba(255,255,255,0.2)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ color: isDarkMode ? "white" : "black" }}>
            {toggle.title}
          </Text>
          <Switch
            thumbColor="white"
            ios_backgroundColor="white"
            onValueChange={toggle.onValueChange}
            value={toggle.value}
          />
        </Column>
      ))}

      {colorArr.map((color) => (
        <Column
          style={{
            borderBottomWidth: 1,
            borderBottomColor: isDarkMode
              ? "rgba(255,255,255,0.2)"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ color: isDarkMode ? "white" : "black" }}>
            {color.title}
          </Text>
          <ColorBox>
            {colorChips.map((colorChip, idx) => (
              <Color
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
                  color={
                    colorChip === color.value && colorChip == "rgb(255,255,255)"
                      ? "black"
                      : colorChip === color.value
                      ? "white"
                      : "transparent"
                  }
                />
              </Color>
            ))}
          </ColorBox>
        </Column>
      ))}
    </Container>
  );
};

export default Setting;
