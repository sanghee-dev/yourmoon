import React from "react";
import MoonContextProvider from "./context/context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./navigation/BottomTabNav";

const App = () => {
  return (
    <MoonContextProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </MoonContextProvider>
  );
};

export default App;
