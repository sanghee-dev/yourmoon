import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Presenter = ({ loading }) => {
  return (
    <Container
      style={{
        justifyContent: loading ? "center" : "",
      }}
    >
      {loading ? <ActivityIndicator size="small" /> : <>Detail</>}
    </Container>
  );
};

export default Presenter;
