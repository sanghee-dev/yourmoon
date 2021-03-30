import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
`;
const DateButton = styled.TouchableOpacity``;
const DateButtonText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 200;
  color: white;
`;

const DatePick = ({ time, setTime, FONT_COLOR }) => {
  const dateToString = (date) => {
    const newDate = new Date(date);
    const showDate = newDate.toString().substring(4, 15);
    return showDate.charAt(4) === "0"
      ? showDate.slice(0, 4) + showDate.slice(5)
      : showDate;
  };
  const onPress = () => {
    setTime(new Date());
  };

  return (
    <Container>
      <DateButton onPress={onPress}>
        <DateButtonText
          style={{
            color: FONT_COLOR,
          }}
        >
          {dateToString(time)}
        </DateButtonText>
      </DateButton>
    </Container>
  );
};

export default DatePick;
