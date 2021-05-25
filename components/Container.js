import React from "react";
import styled from "styled-components/native";
import { useLoading, useIsDarkMode } from "../context/contextFn";

const View = styled.View`
  flex: 1;
  padding-top: 40;
`;

const Container = ({ children }) => {
  const { loading } = useLoading();
  const { isDarkMode } = useIsDarkMode();

  return (
    <View
      style={{
        justifyContent: loading ? "center" : "",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      {children}
    </View>
  );
};

export default Container;
