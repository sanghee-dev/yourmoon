import React, { useState } from "react";
import styled from "styled-components/native";
import { Animated, PanResponder, Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const BackView = styled.View`
  width: 100%;
  height: 100%;
`;

const Swipe = ({ time, setTime, bgColor }) => {
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
        width: WIDTH,
        height: HEIGHT,
        position: "absolute",
        zIndex: -1,
        backgroundColor: bgColor,
      }}
      {...panResponder.panHandlers}
    >
      <BackView />
    </Animated.View>
  );
};

export default Swipe;
