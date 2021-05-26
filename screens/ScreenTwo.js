import React from "react";
import { useLoading } from "../context/contextFn";
import Status from "../components/Status";
import Indicator from "../components/Indicator";
import Container from "../components/Container";
import Title from "../components/Title";

const ScreenTwo = () => {
  const { loading } = useLoading();

  return (
    <Container>
      <Status />
      <Title>Screen Two</Title>
      {loading ? <Indicator /> : <></>}
    </Container>
  );
};

export default ScreenTwo;
