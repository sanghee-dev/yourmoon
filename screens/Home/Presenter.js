import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import MoonShape from "../../components/MoonShape";
import MoonName from "../../components/MoonName";
import DatePick from "../../components/DatePick";

const Container = styled.View`
  width: 100%;
  height: 100%;
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
          <MoonShape
            illumination={Math.round(illumination) / 100}
            leftMoon={leftMoon}
          />
          <DatePick time={time} setTime={setTime} />
        </>
      )}
    </Container>
  );
};

export default Presenter;
