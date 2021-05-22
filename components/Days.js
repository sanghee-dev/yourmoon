import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTime } from "../context/contextFn";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  margin: 0 8px;
`;

const Days = () => {
  const { time } = useTime();
  const dates = [];
  const makeTwoLetters = (date) => {
    if (date.length === 1) return `0${date}`;
    return date;
  };
  for (let i = -3; i < 4; i++) {
    const nowDate = time.getTime() + 86400000 * i;
    dates.push(new Date(nowDate).getDate());
  }

  return (
    <Container>
      <Text>
        <MaterialCommunityIcons name="arrow-left" size={14} />
      </Text>
      {dates.map((date, idx) => (
        <Text
          style={{
            color: idx === 3 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.8)",
            fontWeight: idx === 3 ? "500" : "300",
          }}
        >
          {makeTwoLetters(date)}
        </Text>
      ))}
      <Text>
        <MaterialCommunityIcons name="arrow-right" size={14} />
      </Text>
    </Container>
  );
};

export default Days;
