import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import { useIsDarkMode } from "../context/contextFn";

const Stack = createStackNavigator();

const StackNav = () => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
          backgroundColor: isDarkMode ? "black" : "white",
          shadowOffset: {
            height: 0,
          },
        },
        headerTitleAlign: "center",
        headerTintColor: isDarkMode ? "white" : "black",
        headerTitleStyle: {
          fontSize: 32,
          fontWeight: "200",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
