import React from "react";
import styled from "styled-components/native";
import { useLoading } from "../context/contextFn";
import Status from "../components/Status";
import Indicator from "../components/Indicator";
import Container from "../components/Container";
import Title from "../components/Title";

const Text = styled.Text`
  font-size: 32;
  font-weight: 200;
  color: white;
  padding: 16px 32px;
`;

const Detail = () => {
  const { loading } = useLoading();

  return (
    <Container>
      <Status />
      <Title text="Detail" />
      {loading ? (
        <Indicator />
      ) : (
        <>
          <Text>a</Text>
          <Text>a</Text>
          <Text>a</Text>
        </>
      )}
    </Container>
  );
};

export default Detail;
