import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTime, useIsDarkMode } from "../../context/contextFn";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 180px;
`;
const Text = styled.Text`
  font-weight: 200;
  margin: 0 8px;
`;
const ArrowButton = styled.TouchableOpacity`
  margin: 0 8px;
`;
const Arrow = styled.Text``;

const Days = () => {
  const { time, setTime } = useTime();
  const { isDarkMode } = useIsDarkMode();
  const dates = [];
  const makeTwoLetters = (date) => {
    if (date.length === 1) return `0${date}`;
    return date;
  };
  for (let i = -3; i < 4; i++) {
    const nowDate = time.getTime() + 86400000 * i;
    dates.push(new Date(nowDate).getDate());
  }
  const onPressLeft = () =>
    setTime((prev) => new Date(prev.getTime() - 86400000));
  const onPressRight = () =>
    setTime((prev) => new Date(prev.getTime() + 86400000));

  return (
    <Container>
      <ArrowButton onPress={onPressLeft}>
        <Arrow>
          <MaterialCommunityIcons
            name="arrow-left"
            size={20}
            color={isDarkMode ? "white" : "black"}
          />
        </Arrow>
      </ArrowButton>
      {dates.map((date, idx) => (
        <Text
          key={idx}
          style={{
            color: isDarkMode ? "white" : "black",
            opacity: idx === 3 ? 1 : 0.8,
            fontWeight: idx === 3 ? "500" : "300",
          }}
        >
          {makeTwoLetters(date)}
        </Text>
      ))}
      <ArrowButton onPress={onPressRight}>
        <Arrow>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={isDarkMode ? "white" : "black"}
          />
        </Arrow>
      </ArrowButton>
    </Container>
  );
};

export default Days;
