import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import MoonShape from "../../components/MoonShape";
import MoonName from "../../components/MoonName";
import DatePick from "../../components/DatePick";
import MoonDetail from "../../components/MoonDetail";
import Swipe from "../../components/Swipe";

const MAIN_COLOR = "rgb(255,255,255)";
const SUB_COLOR = "rgb(255,255,0)";
const BG_COLOR = "rgb(0,0,0)";
const FONT_COLOR = "rgb(255,255,255)";

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Presenter = ({
  loading,
  time,
  setTime,
  illumination,
  fmdt,
  nnmdt,
  stage,
  detail,
  setDetail,
  leftMoon,
}) => {
  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: BG_COLOR,
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          <MoonName stage={stage} FONT_COLOR={FONT_COLOR} />
          <MoonShape
            illumination={Math.round(illumination * 10) / 1000}
            leftMoon={leftMoon}
            setDetail={setDetail}
            MAIN_COLOR={MAIN_COLOR}
            SUB_COLOR={SUB_COLOR}
            BG_COLOR={BG_COLOR}
          />
          {detail ? (
            <DatePick time={time} setTime={setTime} FONT_COLOR={FONT_COLOR} />
          ) : (
            <MoonDetail
              time={time}
              fmdt={fmdt}
              nnmdt={nnmdt}
              FONT_COLOR={FONT_COLOR}
            />
          )}
        </>
      )}
      <Swipe time={time} setTime={setTime} BG_COLOR={BG_COLOR} />
    </Container>
  );
};

export default Presenter;
