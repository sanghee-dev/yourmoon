import React, { useState } from "react";
import styled from "styled-components/native";
import { Animated, PanResponder } from "react-native";
import { useTime, useIsDarkMode } from "../context/contextFn";

const BackView = styled.View`
  width: 100%;
  height: 100%;
`;

const Swipe = () => {
  const { time, setTime } = useTime();
  const { isDarkMode } = useIsDarkMode;
  const [xLength, setXLength] = useState(0);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx }) => {
      position.setValue({ x: dx, y: 0 });
      setXLength(dx);
    },
    onPanResponderRelease: (_, __) => {
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: true,
      }).start(() => {
        if (xLength > 10) {
          const nextTime = new Date(time.getTime() + 86400000);
          setTime(nextTime);
        } else if (xLength < -10) {
          const prevTime = new Date(time.getTime() - 86400000);
          setTime(prevTime);
        }
      });
    },
  });

  return (
    <Animated.View
      style={{
        transform: [...position.getTranslateTransform()],
        opacity: 1,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        backgroundColor: isDarkMode ? "white" : "black",
      }}
      {...panResponder.panHandlers}
    >
      <BackView />
    </Animated.View>
  );
};

export default Swipe;
