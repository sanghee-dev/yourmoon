import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import {
  useLoading,
  useTime,
  useMoon,
  useRange,
  useIsLeft,
  useColors,
} from "../context/contextFn";
import MoonShape from "../components/MoonShape";
import MoonName from "../components/MoonName";
import DatePick from "../components/DatePick";
import MoonDetail from "../components/MoonDetail";
import ColorRange from "../components/ColorRange";
import Swipe from "../components/Swipe";

const Text = styled.Text`
  font-weight: 100;
  font-size: 40px;
`;

const Container = () => {
  const { loading, setLoading } = useLoading();
  const { time, setTime } = useTime();
  const { moon, setMoon } = useMoon();
  const { range, setRange } = useRange();
  const { isLeft, setIsLeft } = useIsLeft();
  const { colors, setColors } = useColors();

  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: colors.bgColor,
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.subColor} />
      ) : (
        <>
          <MoonName />
          {/* <MoonShape
          isLeft={isLeft}
          moon={moon}
          setMoon={setMoon}
          range={range}
          setRange={setRange}
          mainColor={colors.mainColor}
          subColor={colors.subColor}
          bgColor={colors.bgColor}
        /> */}
          {/* {!moon && !range && (
          <DatePick
            time={time}
            setTime={setTime}
            fontColor={colors.fontColor}
          />
        )} */}
          {/* {moon && (
          <MoonDetail
            fmdt={fmdt}
            nnmdt={nnmdt}
            fontColor={colors.fontColor}
          />
        )} */}
          {/* {range && (
          <ColorRange
            mainColor={colors.mainColor}
            subColor={colors.subColor}
            colors={colors}
            setColors={setColors}
          />
        )} */}
        </>
      )}
      <Swipe />
    </Container>
  );
};

export default Container;
