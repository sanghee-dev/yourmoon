import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import MoonShape from "../../components/MoonShape";
import MoonName from "../../components/MoonName";
import DatePick from "../../components/DatePick";
import MoonDetail from "../../components/MoonDetail";

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
  dfcoe,
  dfs,
  detail,
  setDetail,
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
            setDetail={setDetail}
          />
          {detail ? (
            <DatePick time={time} setTime={setTime} />
          ) : (
            <MoonDetail time={time} fmdt={fmdt} nnmdt={nnmdt} />
          )}
        </>
      )}
    </Container>
  );
};

export default Presenter;
