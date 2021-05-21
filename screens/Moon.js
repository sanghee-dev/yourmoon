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
import MoonName from "../components/MoonName";

const Container = styled.View`
  height: 100%;
`;

const Moon = () => {
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
        <MoonName />
      )}
    </Container>
  );
};

export default Moon;
