import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Moon from "../screens/Moon";
import Detail from "../screens/Detail";
import Setting from "../screens/Setting";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";
import { useMoon } from "../context/contextFn";

const Tab = createBottomTabNavigator();

const TabNav = ({ navigation: { setOptions }, route: { state } }) => {
  const {
    moon: { stage },
  } = useMoon();

  const getIconName = (screenName) => {
    switch (screenName) {
      case "Moon":
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
  const capitalize = (str) => str?.charAt(0).toUpperCase() + str.slice(1);

  useLayoutEffect(() => {
    let mounted = true;
    if (mounted) {
      setOptions({
        title:
          state?.routeNames[state.index] === "Moon"
            ? `${capitalize(stage)} Moon`
            : state?.routeNames[state.index] || "Moon",
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
            color={"rgb(200, 200, 200)"}
            style={{ opacity: focused ? 1 : 0.5 }}
          />
        ),
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "rgb(0, 0, 0)",
          borderTopWidth: 0,
          height: 80,
        },
      }}
      initialRouteName="Moon"
    >
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="Moon" component={Moon} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default TabNav;
