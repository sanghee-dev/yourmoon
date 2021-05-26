import React from "react";
import styled from "styled-components/native";
import { useLoading, useMoon } from "../context/contextFn";
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
  const {
    moon: { illumination, stage, fmDt, nnmDt },
  } = useMoon();

  return (
    <Container>
      <Status />
      <Title>Detail</Title>
      {loading ? (
        <Indicator />
      ) : (
        <>
          <Text>{illumination}</Text>
          <Text>{stage}</Text>
          <Text>{fmDt}</Text>
          <Text>{nnmDt}</Text>
        </>
      )}
    </Container>
  );
};

export default Detail;
