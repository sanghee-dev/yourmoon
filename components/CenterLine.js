import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Line = styled.View`
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-style: dotted;
  transform: scale(0.8, 8);
`;

const CenterLine = () => {
  return (
    <Container>
      <Line />
    </Container>
  );
};

export default CenterLine;
