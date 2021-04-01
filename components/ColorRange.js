import React from "react";
import styled from "styled-components/native";
import { ColorPicker } from "react-native-color-picker";

const Container = styled.View`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
`;
const ColorBox = styled.View`
  align-items: center;
  margin: 0 8px;
`;
const Text = styled.Text`
  font-weight: 100;
  font-size: 20px;
  color: white;
`;

const ColorRange = ({
  mainColor,
  setMainColor,
  subColor,
  setSubColor,
  bgColor,
  setBgColor,
  fontColor,
  setFontColor,
}) => {
  const colorObjs = [
    { name: "Moon", color: mainColor, setColor: setMainColor },
    { name: "Edge", color: subColor, setColor: setSubColor },
    // { name: "Back", color: bgColor, setColor: setBgColor },
    // { name: "Font", color: fontColor, setColor: setFontColor },
  ];

  return (
    <Container>
      {colorObjs.map((colorObj) => (
        <ColorBox>
          <ColorPicker
            style={{ width: 100, height: 100 }}
            hideSliders={true}
            defaultColor={colorObj.color}
            onColorSelected={(color) => {
              colorObj.setColor(color);
            }}
          />
          <Text>{colorObj.name}</Text>
        </ColorBox>
      ))}
    </Container>
  );
};

export default ColorRange;
