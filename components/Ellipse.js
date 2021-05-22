import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Oval = styled.View`
  width: 130px;
  height: 130px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1000;
  position: absolute;
  top: 30px;
  transform: scale(2.8, 0.5);
`;

const Ellipse = () => {
  return (
    <Container>
      <Oval />
    </Container>
  );
};

export default Ellipse;
