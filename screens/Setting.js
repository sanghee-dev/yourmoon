import React from "react";

import { StatusBar, Switch } from "react-native";
import styled from "styled-components/native";
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
const Color = styled.View`
  width: 20px;
  height: 20px;
`;

const Setting = () => {
  const {
    colors: { mainColor, subColor },
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
    "rgb(255,255,255)",
    "rgb(0,255,0)",
    "rgb(0,0,255)",
    "rgb(255,0,0)",
    "rgb(0,255,0)",
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
            trackColor={{ false: "white", true: "gray" }}
            thumbColor="white"
            ios_backgroundColor="white"
            onValueChange={toggle.onValueChange}
            value={toggle.value}
          />
        </Column>
      ))}
      <Column
        style={{
          borderBottomWidth: 1,
          borderBottomColor: isDarkMode
            ? "rgba(255,255,255,0.2)"
            : "rgba(0,0,0,0.1)",
        }}
      >
        <Text style={{ color: isDarkMode ? "white" : "black" }}>
          Main Color
        </Text>
        <>
          {colorArr.map((color, idx) => (
            <Color
              key={idx}
              style={{
                backgroundColor: color,
                borderWidth: 1,
                borderColor: isDarkMode
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </>
      </Column>
    </Container>
  );
};

export default Setting;
