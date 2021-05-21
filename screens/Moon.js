import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { useLoading, useColors } from "../context/contextFn";
import MoonName from "../components/MoonName";
import MoonShape from "../components/MoonShape";

const Container = styled.View`
  height: 100%;
`;

const Moon = () => {
  const { loading, setLoading } = useLoading();
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
          <MoonShape />
          {/* <DatePick /> */}
          {/* <MoonDetail /> */}
          {/* <ColorRange /> */}
        </>
      )}
    </Container>
  );
};

export default Moon;
