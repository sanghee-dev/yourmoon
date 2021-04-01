import React, { useState } from "react";
import styled from "styled-components/native";
import { ColorPicker } from "react-native-color-picker";

const Container = styled.View`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
`;
const ColorBox = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
`;
const Text = styled.Text`
  font-weight: 100;
  font-size: 20px;
  color: white;
`;
const YellowColor = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: yellow;
  position: absolute;
  top: 20px;
`;
const WhiteColor = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  top: 20px;
`;

const ColorRange = ({ mainColor, setMainColor, subColor, setSubColor }) => {
  const [firstChanged, setFirstChanged] = useState(false);
  const [secondChanged, setSecondChanged] = useState(false);

  return (
    <Container>
      <ColorBox
        onLongPress={() => {
          setMainColor("rgb(255,255,0)");
          setFirstChanged(false);
        }}
      >
        <ColorPicker
          style={{ width: 80, height: 80 }}
          hideSliders={true}
          defaultColor="rgb(255,255,0)"
          onColorSelected={(color) => setMainColor(color)}
          onColorChange={() => setFirstChanged(true)}
        />
        <Text>Moon</Text>
        {!firstChanged && <YellowColor style={{ background: mainColor }} />}
      </ColorBox>

      <ColorBox
        onLongPress={() => {
          setSubColor("rgb(255,255,255)");
          setSecondChanged(false);
        }}
      >
        <ColorPicker
          style={{ width: 80, height: 80 }}
          hideSliders={true}
          defaultColor="rgb(255,255,0)"
          onColorSelected={(color) => setSubColor(color)}
          onColorChange={() => setSecondChanged(true)}
        />
        <Text>Edge</Text>
        {!secondChanged && <WhiteColor style={{ background: subColor }} />}
      </ColorBox>
    </Container>
  );
};

export default ColorRange;
