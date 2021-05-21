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
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "100",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Tab" component={Tab} />
    </Stack.Navigator>
  );
};
