import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  bottom: 76px;
`;
const DetailTime = styled.View`
  flex-direction: row;
`;
const Title = styled.Text`
  font-weight: 100;
  font-size: 20px;
`;
const Text = styled.Text`
  font-weight: 100;
  font-size: 20px;
`;

const MoonDetail = ({ fmdt, nnmdt, FONT_COLOR }) => {
  console.log(fmdt.slice(-11, -5).slice(3));
  console.log(nnmdt.slice(-11, -5));

  const fmDate = (dt) =>
    dt.slice(-11, -5).slice(3) + " " + dt.slice(-11, -5).slice(0, 2);
  const nnmDate = (dt) =>
    dt.slice(-11, -5).slice(3) + " " + dt.slice(-11, -5).slice(0, 2);

  return (
    <Container>
      <DetailTime>
        <Title style={{ color: FONT_COLOR, opacity: 0.7 }}>Full Moon</Title>
        <Text style={{ color: FONT_COLOR }}>{`     ${fmDate(fmdt)}`}</Text>
      </DetailTime>

      <DetailTime>
        <Title style={{ color: FONT_COLOR, opacity: 0.7 }}>New Moon</Title>
        <Text style={{ color: FONT_COLOR }}>{`   ${nnmDate(nnmdt)}`}</Text>
      </DetailTime>
    </Container>
  );
};

export default MoonDetail;
