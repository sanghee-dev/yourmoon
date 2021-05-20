import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tab from "./Tab";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(0, 0, 0)",
          shadowOffset: {
            height: 0,
          },
        },
        headerTitleAlign: "left",
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "100",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Tab" component={Tab} />
    </Stack.Navigator>
  );
};
