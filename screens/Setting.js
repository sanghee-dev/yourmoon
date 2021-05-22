import React, { useState } from "react";

import { StatusBar, Switch } from "react-native";
import styled from "styled-components/native";
import { useColors, useIsDarkMode } from "../context/contextFn";

const Container = styled.View`
  height: 100%;
`;
const Text = styled.Text`
  font-weight: 100;
  font-size: 20px;
  text-align: center;
`;

const Setting = () => {
  const {
    colors: { fontColor },
  } = useColors();
  const { isDarkMode } = useIsDarkMode();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Container
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      <StatusBar barStyle="light-content" hidden={true} />
      <Text style={{ color: fontColor }}>Setting</Text>
      <Switch
        trackColor={{ false: "gray", true: "gray" }}
        thumbColor="white"
        ios_backgroundColor="gray"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
};

export default Setting;
