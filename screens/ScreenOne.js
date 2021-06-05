import React from "react";
import { useLoading } from "../context/contextFn";
import Status from "../components/Status";
import Indicator from "../components/Indicator";
import Container from "../components/Container";
import Title from "../components/Title";

const ScreenOne = () => {
  const { loading } = useLoading();

  const getSearch = () => {
    const YOUTUBE_API_KEY = env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/search`;
  };

  return (
    <Container>
      <Status />
      <Title>Screen One</Title>
      {loading ? <Indicator /> : <></>}
    </Container>
  );
};

export default ScreenOne;
