import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Setting from "../screens/Setting";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";
import { useIsDarkMode } from "../context/contextFn";

const Tab = createBottomTabNavigator();

const TabNav = ({ navigation: { setOptions }, route: { state } }) => {
  const { isDarkMode } = useIsDarkMode();

  const getIconName = (screenName) => {
    switch (screenName) {
      case "Home":
        return "moon-full";
      case "Detail":
        return "moon-waning-crescent";
      case "Setting":
        return "moon-waxing-crescent";
      case "ScreenOne":
        return "moon-waning-gibbous";
      case "ScreenTwo":
        return "moon-waxing-gibbous";
    }
  };
  const getMarginBottom = (screenName) => {
    switch (screenName) {
      case "Home":
        return 0;
      case "Detail":
        return 40;
      case "Setting":
        return 40;
      case "ScreenOne":
        return 8;
      case "ScreenTwo":
        return 8;
    }
  };
  const capitalize = (str) => str?.charAt(0).toUpperCase() + str.slice(1);

  useLayoutEffect(() => {
    let mounted = true;
    if (mounted) {
      setOptions({
        title: state?.routeNames[state.index] || "Moon",
      });
    }
    return () => (mounted = false);
  }, [state]);

  return (
    <Tab.Navigator
      screenOptions={({ route: { name: screenName } }) => ({
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={getIconName(screenName)}
            size={24}
            color={isDarkMode ? "white" : "black"}
            style={{
              opacity: focused ? 0.7 : 0.4,
              marginBottom: getMarginBottom(screenName),
            }}
          />
        ),
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
          height: 100,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default TabNav;
