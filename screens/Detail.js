import React from "react";
import { useLoading, useMoon, useMoonTime } from "../context/contextFn";
import Status from "../components/Status";
import Indicator from "../components/Indicator";
import Container from "../components/Container";
import Title from "../components/Title";
import Column from "../components/Column";
import ColumnText from "../components/ColumnText";

const Detail = () => {
  const { loading } = useLoading();
  const {
    moon: { illumination, stage },
  } = useMoon();
  const {
    moonTime: { fm, nnm },
  } = useMoonTime();

  const detailArr = [
    {
      title: "Illumination",
      value: `${Math.round(illumination)}%`,
    },
    {
      title: "Stage",
      value: stage,
    },
    {
      title: "Full moon",
      value: `${fm.year}.${fm.month}.${fm.day}`,
    },
    {
      title: "New moon",
      value: `${nnm.year}.${nnm.month}.${nnm.day}`,
    },
  ];

  return (
    <Container>
      <Status />
      <Title>Detail</Title>
      {loading ? (
        <Indicator />
      ) : (
        <>
          {detailArr.map((datail) => (
            <Column>
              <ColumnText>{datail.title}</ColumnText>
              <ColumnText>{datail.value}</ColumnText>
            </Column>
          ))}
        </>
      )}
    </Container>
  );
};

export default Detail;
