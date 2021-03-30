import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  bottom: 96px;
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

const MoonDetail = ({ time, fmdt, nnmdt, FONT_COLOR }) => {
  console.log(time);

  const fmDate = (dt) =>
    dt.substring(11, 15).replace(" ", "") +
    " " +
    dt.substring(8, 11).replace("-", "");
  const nnmDate = (dt) =>
    dt.substring(10, 14).replace(" ", "") +
    " " +
    dt.substring(8, 10).replace("-", "");

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
