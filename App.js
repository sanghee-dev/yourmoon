import React from "react";
import MoonContextProvider from "./context/context";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navigation/StackNav";
import BottomTabNav from "./navigation/BottomTabNav";

const App = () => {
  return (
    <MoonContextProvider>
      <NavigationContainer>
        {/* <StackNav /> */}
        <BottomTabNav />
      </NavigationContainer>
    </MoonContextProvider>
  );
};

export default App;
