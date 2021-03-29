import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const MoonBox = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: yellow;
`;

const Moon = () => {
  return (
    <Container>
      <MoonBox />
    </Container>
  );
};

export default Moon;
