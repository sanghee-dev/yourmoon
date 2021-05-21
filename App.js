import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navigation/StackNav";
import MoonContextProvider from "./context/context";

const App = () => {
  return (
    <MoonContextProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </MoonContextProvider>
  );
};

export default App;
