import React from "react";
import { Switch } from "react-native";
import { useIsDarkMode } from "../../context/contextFn";
import Column from "../Column";
import ColumnText from "../ColumnText";

const ToggleColumns = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  const toggleArr = [
    {
      title: "DarkMode",
      onValueChange: () => setIsDarkMode((prev) => !prev),
      value: isDarkMode,
    },
  ];

  return (
    <>
      {toggleArr.map((toggle, idx) => (
        <Column key={idx}>
          <ColumnText>{toggle.title}</ColumnText>
          <Switch
            thumbColor="white"
            ios_backgroundColor="white"
            onValueChange={toggle.onValueChange}
            value={toggle.value}
          />
        </Column>
      ))}
    </>
  );
};

export default ToggleColumns;
