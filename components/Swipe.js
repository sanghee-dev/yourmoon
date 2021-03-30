import React, { useState } from "react";
import styled from "styled-components/native";
import { Animated, PanResponder, Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const BackView = styled.View`
  width: 100%;
  height: 100%;
`;

const Swipe = ({ time, setTime, BG_COLOR }) => {
  const [isChanging, setIsChanging] = useState(false);
  const position = new Animated.ValueXY();
  const GESTURE = 60;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx }) => {
      position.setValue({ x: dx, y: 0 });
      console.log(Math.abs(dx > GESTURE));
      if (Math.abs(dx > GESTURE)) {
        setIsChanging(true);
        if (isChanging) {
          const nextTime = new Date(time.getTime() + 86400000);
          setTime(nextTime);
        }
        setIsChanging(false);
      } else {
        const prevTime = new Date(time.getTime() - 86400000);
        setTime(prevTime);
      }
    },
    onPanResponderRelease: (evt, { dx }) => {
      Animated.spring(position, {
        toValue: {
          x: dx > GESTURE ? WIDTH - 20 : dx < -GESTURE ? -WIDTH + 20 : 0,
          y: 0,
        },
        bounciness: 8,
      }).start();
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
        backgroundColor: BG_COLOR,
      }}
      {...panResponder.panHandlers}
    >
      <BackView />
    </Animated.View>
  );
};

export default Swipe;
