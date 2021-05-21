import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Moon from "../screens/Moon";
import Detail from "../screens/Detail";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

export default ({ navigation: { setOptions }, route: { state } }) => {
  useLayoutEffect(() => {
    let mounted = true;
    if (mounted) {
      setOptions({ title: state?.routeNames[state.index] || "Moon" });
    }
    return () => (mounted = false);
  }, [state]);

  return (
    <Tab.Navigator
      screenOptions={({ route: { name: screenName } }) => ({
        tabBarIcon: ({ focused }) => {
          let platformName = Platform.OS === "ios" ? "ios-" : "md-";
          let iconName =
            screenName === "Moon"
              ? `${platformName}moon`
              : screenName === "Detail"
              ? `${platformName}search`
              : `${platformName}settings`;
          return (
            <Ionicons
              name={focused ? iconName : `${iconName}-outline`}
              size={24}
              color="rgb(150, 150, 150)"
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "rgb(0, 0, 0)",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Moon" component={Moon} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
