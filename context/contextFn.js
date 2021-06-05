import { useContext } from "react";
import { MoonContext } from "./context";

export const useLoading = () => {
  const { loading } = useContext(MoonContext);
  return loading;
};
export const useTime = () => {
  const { time } = useContext(MoonContext);
  return time;
};
export const useMoon = () => {
  const { moon } = useContext(MoonContext);
  return moon;
};
export const useMoonTime = () => {
  const { moonTime } = useContext(MoonContext);
  return moonTime;
};
export const useIsLeft = () => {
  const { isLeft } = useContext(MoonContext);
  return isLeft;
};
export const useColors = () => {
  const { colors } = useContext(MoonContext);
  return colors;
};
export const useIsDarkMode = () => {
  const { isDarkMode } = useContext(MoonContext);
  return isDarkMode;
};
