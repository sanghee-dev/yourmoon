import React from "react";
import styled from "styled-components/native";
import { useIsDarkMode } from "../context/contextFn";

const View = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
`;

const Column = ({ children }) => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: isDarkMode
          ? "rgba(255,255,255,0.2)"
          : "rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </View>
  );
};

export default Column;
