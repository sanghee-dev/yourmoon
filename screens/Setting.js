import React from "react";
import { useLoading } from "../context/contextFn";
import Status from "../components/Status";
import Indicator from "../components/Indicator";
import Container from "../components/Container";
import Title from "../components/Title";
import ToggleColumns from "../components/Setting/ToggleColumns";
import ColorColumns from "../components/Setting/ColorColumns";

const Setting = () => {
  const { loading } = useLoading();

  return (
    <Container>
      <Status />
      <Title>Setting</Title>
      {loading ? (
        <Indicator />
      ) : (
        <>
          <ToggleColumns />
          <ColorColumns />
        </>
      )}
    </Container>
  );
};

export default Setting;
