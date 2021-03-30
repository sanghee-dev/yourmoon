import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { moonApi } from "../../api";
import { Alert } from "react-native";

const Container = () => {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState(false);
  const [leftMoon, setLeftMoon] = useState();

  const getData = async () => {
    try {
      const {
        data: { moon },
      } = await moonApi(Math.floor(time / 1000));
      setData(moon);

      const nextDay = new Date(time.getTime() + 86400000);
      const {
        data: { moon: nextMoon },
      } = await moonApi(Math.floor(nextDay / 1000));
      setLeftMoon(moon?.illumination > nextMoon?.illumination);
    } catch (error) {
      Alert.alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [time]);

  return (
    <Presenter
      loading={loading}
      time={time}
      setTime={setTime}
      illumination={data?.illumination}
      fmdt={data?.fm?.dt}
      nnmdt={data?.nnm?.dt}
      stage={data?.stage}
      dfcoe={data?.dfcoe}
      dfs={data?.dfs}
      detail={detail}
      setDetail={setDetail}
      leftMoon={leftMoon}
    />
  );
};

export default Container;
