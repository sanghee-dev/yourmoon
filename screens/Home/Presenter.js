import React from "react";
import styled from "styled-components/native";
import Moon from "../../components/Moon";

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Presenter = () => {
  return (
    <Container>
      <Moon />
    </Container>
  );
};

export default Presenter;
