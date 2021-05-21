import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import MoonContextProvider from "./context/context";

const App = () => {
  return (
    <MoonContextProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </MoonContextProvider>
  );
};

export default App;
