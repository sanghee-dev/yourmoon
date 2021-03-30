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
  color: rgba(255, 255, 255, 0.7);
  font-weight: 100;
  font-size: 20px;
`;
const Text = styled.Text`
  color: white;
  font-weight: 100;
  font-size: 20px;
`;

const MoonDetail = ({ time, fmdt, nnmdt }) => {
  console.log(time);

  const fmDate = (dt) => dt.substring(12, 15) + dt.substring(9, 11);
  const nnmDate = (dt) => dt.substring(11, 14) + dt.substring(8, 10);

  return (
    <Container>
      <DetailTime>
        <Title>Full Moon</Title>
        <Text>{`     ${fmDate(fmdt)}`}</Text>
      </DetailTime>

      <DetailTime>
        <Title>New Moon</Title>
        <Text>{`   ${nnmDate(nnmdt)}`}</Text>
      </DetailTime>
    </Container>
  );
};

export default MoonDetail;
