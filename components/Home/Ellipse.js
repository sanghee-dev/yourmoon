import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { useIsDarkMode } from "../../context/contextFn";

const { width: WIDTH } = Dimensions.get("window");

const Container = styled.View`
  width: 0;
  height: 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
`;
const Oval = styled.View`
  width: ${WIDTH / 2}px;
  height: ${WIDTH / 2}px;
  border: 1px solid white;
  border-radius: ${WIDTH / 2}px;
  transform: scale(1.7, 0.3);
`;

const Ellipse = () => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <Container>
      <Oval
        style={{ borderColor: isDarkMode ? "white" : "black", opacity: 0.3 }}
      />
    </Container>
  );
};

export default Ellipse;
