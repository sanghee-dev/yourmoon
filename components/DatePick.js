import React, { useState } from "react";
import { Platform, Dimensions } from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const PICKER_HEIGHT = 100;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
const DateTimePickerContainer = styled.TouchableOpacity``;
const DateButton = styled.TouchableOpacity``;
const DateButtonText = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: 200;
  color: white;
`;

const DatePick = ({ time, setTime }) => {
  const [show, setShow] = useState(false);

  const dateToString = (date) => {
    const newDate = new Date(date);
    return newDate.toString().substring(4, 15);
  };
  const onLongPress = () => {
    setTime(new Date());
  };
  const onPress = () => {
    setShow((prev) => !prev);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    setShow(Platform.OS === "ios");
    setTime(currentDate);
  };

  return (
    <Container>
      <DateButton onPress={onPress} onLongPress={onLongPress}>
        <DateButtonText
          style={{ marginBottom: show ? 20 : PICKER_HEIGHT + 20 }}
        >
          {dateToString(time)}
        </DateButtonText>
      </DateButton>

      {show && (
        <DateTimePickerContainer onPress={onPress}>
          <LinearGradient
            style={{ width: WIDTH, justifyContent: "center" }}
            colors={[
              "rgba(255,255,255,0)",
              "rgba(255,255,255,1)",
              "rgba(255,255,255,1)",
            ]}
            locations={[0, 0.35, 1]}
          >
            <DateTimePicker
              style={{ height: PICKER_HEIGHT }}
              value={time}
              mode="date"
              is24Hour={true}
              display="spinner"
              onChange={onChange}
            />
          </LinearGradient>
        </DateTimePickerContainer>
      )}
    </Container>
  );
};

export default DatePick;
