import React from "react";
import { Switch } from "react-native";
import styled from "styled-components/native";
import { useIsDarkMode } from "../../context/contextFn";

const Container = styled.View``;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
`;
const Text = styled.Text`
  font-size: 28px;
  font-weight: 200;
`;

const ToggleColumns = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  const toggleArr = [
    {
      title: "DarkMode",
      onValueChange: () => setIsDarkMode((prev) => !prev),
      value: isDarkMode,
    },
  ];

  return (
    <Container>
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
    </Container>
  );
};

export default ToggleColumns;
