import React from "react";
import styled from "styled-components/native";
import MoonShape from "../../components/MoonShape";
import MoonName from "../../components/MoonName";

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 80px 0px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

const Presenter = ({
  loading,
  time,
  setTime,
  data,
  editing,
  setEditing,
  leftMoon,
}) => {
  return (
    <Container>
      <MoonName />
      <MoonShape />
    </Container>
  );
};

export default Presenter;
