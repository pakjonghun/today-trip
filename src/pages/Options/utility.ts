import { optionRoutes } from "./constants";
export const getOptionRoute = (curPageCount: number) =>
  `/option/${optionRoutes[curPageCount]}`;

export const getRandomNumber = (max: number) => Math.round(Math.random() * max);
