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
    fmUt: 0,
    nnmUt: 0,
  });
  const [moonTime, setMoonTime] = useState({
    fm: { year: 0, month: 0, day: 0 },
    nnm: { year: 0, month: 0, day: 0 },
  });
  const [isLeft, setIsLeft] = useState(false);
  const [colors, setColors] = useState({
    mainColor: "rgb(255,0,255)",
    subColor: "rgb(255,255,0)",
  });
  const [isDarkMode, setIsDarkMode] = useState(true);

  const getTwoLetters = (str) => (`${str}`.length === 2 ? `${str}` : `0${str}`);

  const getMoon = async () => {
    try {
      const {
        data: {
          moon: {
            illumination,
            stage,
            fm: { ut: fmUt },
            nnm: { ut: nnmUt },
          },
        },
      } = await moonApi(Math.floor(time / 1000));
      setMoon({
        illumination,
        stage,
        fmUt,
        nnmUt,
      });
      let fmDate = new Date(fmUt * 1000);
      let nnmDate = new Date(nnmUt * 1000);
      setMoonTime({
        fm: {
          year: fmDate.getFullYear() + "",
          month: getTwoLetters(fmDate.getMonth()),
          day: getTwoLetters(fmDate.getDate()),
        },
        nnm: {
          year: nnmDate.getFullYear() + "",
          month: getTwoLetters(nnmDate.getMonth()),
          day: getTwoLetters(nnmDate.getDate()),
        },
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
        moonTime: { moonTime, setMoonTime },
        isLeft: { isLeft, setIsLeft },
        colors: { colors, setColors },
        isDarkMode: { isDarkMode, setIsDarkMode },
      }}
    >
      {children}
    </MoonContext.Provider>
  );
};

export default MoonContextProvider;
