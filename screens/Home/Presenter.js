import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import MoonShape from "../../components/MoonShape";
import MoonName from "../../components/MoonName";

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 80px 0px;
  align-items: center;
  background-color: black;
`;

const Presenter = ({
  loading,
  time,
  setTime,
  illumination,
  fmdt,
  nnmdt,
  stage,
  editing,
  setEditing,
  leftMoon,
}) => {
  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          <MoonName stage={stage} />
          <MoonShape />
        </>
      )}
    </Container>
  );
};

export default Presenter;
