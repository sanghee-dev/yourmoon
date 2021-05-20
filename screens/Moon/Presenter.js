import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import MoonShape from "../../components/MoonShape";
import MoonName from "../../components/MoonName";
import DatePick from "../../components/DatePick";
import MoonDetail from "../../components/MoonDetail";
import ColorRange from "../../components/ColorRange";
import Swipe from "../../components/Swipe";

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
  range,
  setRange,
  leftMoon,
  mainColor,
  setMainColor,
  subColor,
  setSubColor,
  bgColor,
  fontColor,
}) => {
  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: bgColor,
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color={subColor} />
      ) : (
        <>
          <MoonName stage={stage} fontColor={fontColor} />
          <MoonShape
            illumination={Math.round(illumination * 10) / 1000}
            leftMoon={leftMoon}
            detail={detail}
            setDetail={setDetail}
            range={range}
            setRange={setRange}
            mainColor={mainColor}
            subColor={subColor}
            bgColor={bgColor}
          />
          {!detail && !range && (
            <DatePick time={time} setTime={setTime} fontColor={fontColor} />
          )}
          {detail && (
            <MoonDetail fmdt={fmdt} nnmdt={nnmdt} fontColor={fontColor} />
          )}
          {range && (
            <ColorRange
              mainColor={mainColor}
              setMainColor={setMainColor}
              subColor={subColor}
              setSubColor={setSubColor}
            />
          )}
        </>
      )}
      <Swipe time={time} setTime={setTime} bgColor={bgColor} />
    </Container>
  );
};

export default Presenter;
