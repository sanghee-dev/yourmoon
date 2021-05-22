import React, { useState, useEffect, createContext } from "react";
import { moonApi } from "../api";
import { Alert } from "react-native";

export const MoonContext = createContext();

const MoonContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());
  const [moon, setMoon] = useState({
    illumination: 0,
    stage: "",
    fmDt: 0,
    nnmDt: 0,
  });
  const [showRange, setShowRange] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [colors, setColors] = useState({
    mainColor: "rgb(255, 255, 255)",
    subColor: "rgb(100, 100, 100)",
    bgColor: "rgb(0, 0, 0)",
    fontColor: "rgb(255, 255, 255)",
  });

  const getMoon = async () => {
    try {
      const {
        data: {
          moon: {
            illumination,
            stage,
            fm: { dt: fmDt },
            nnm: { dt: nnmDt },
          },
        },
      } = await moonApi(Math.floor(time / 1000));
      setMoon({
        illumination,
        stage,
        fmDt,
        nnmDt,
      });
      const nextDay = new Date(time.getTime() + 86400000);
      const {
        data: {
          moon: { illumination: nextIllumination },
        },
      } = await moonApi(Math.floor(nextDay / 1000));
      setIsLeft(illumination > nextIllumination);
    } catch (error) {
      Alert.alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoon();
  }, [time]);

  return (
    <MoonContext.Provider
      value={{
        loading: { loading, setLoading },
        time: { time, setTime },
        moon: { moon, setMoon },
        showRange: { showRange, setShowRange },
        isLeft: { isLeft, setIsLeft },
        colors: { colors, setColors },
      }}
    >
      {children}
    </MoonContext.Provider>
  );
};

export default MoonContextProvider;
