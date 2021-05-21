import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
`;
const Text = styled.Text`
  font-weight: 100;
  text-align: center;
`;

const Detail = () => {
  return (
    <Container>
      <Text>Detail</Text>
    </Container>
  );
};

export default Detail;
