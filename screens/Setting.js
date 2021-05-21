import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
`;
const Text = styled.Text`
  font-weight: 100;
  text-align: center;
`;

const Setting = () => {
  return (
    <Container>
      <Text>Setting</Text>
    </Container>
  );
};

export default Setting;
