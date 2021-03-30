import React from "react";
import styled from "styled-components/native";
import { Animated, PanResponder, Dimensions } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -999;
`;

const Swipe = ({ BG_COLOR }) => {
  return <Container style={{ backgroundColor: BG_COLOR }}></Container>;
};

export default Swipe;
