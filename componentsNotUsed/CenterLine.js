import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  position: absolute;
  bottom: 100px;
`;
const Line = styled.View`
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-style: dotted;
  transform: scale(0.8, 1);
`;

const CenterLine = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default CenterLine;
