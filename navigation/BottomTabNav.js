import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useIsDarkMode } from "../context/contextFn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Setting from "../screens/Setting";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";

const Tab = createMaterialTopTabNavigator();

const BottomTabNav = () => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      tabBarOptions={{
        showIcon: true,
        activeTintColor: "white",
        labelStyle: { fontSize: 12 },
        indicatorStyle: {
          opacity: 0,
        },
        tabStyle: {
          height: 60,
          backgroundColor: isDarkMode ? "black" : "white",
        },
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
    >
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="moon-waning-crescent"
              size={24}
              color={!focused ? "gray" : isDarkMode ? "white" : "black"}
              style={{
                position: "absolute",
                bottom: 18,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="moon-waning-gibbous"
              size={24}
              color={!focused ? "gray" : isDarkMode ? "white" : "black"}
              style={{
                position: "absolute",
                bottom: 4,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="moon-full"
              size={24}
              color={!focused ? "gray" : isDarkMode ? "white" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="moon-waxing-gibbous"
              size={24}
              color={!focused ? "gray" : isDarkMode ? "white" : "black"}
              style={{
                position: "absolute",
                bottom: 4,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="moon-waxing-crescent"
              size={24}
              color={!focused ? "gray" : isDarkMode ? "white" : "black"}
              style={{
                position: "absolute",
                bottom: 18,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
