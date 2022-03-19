import { optionRoutes } from "../constants/common/optioinConstants";

export const getId = () => Math.random().toString().substring(2, 12);

export const joinStyleClass = (...args: string[]) => args.join(" ");

export const getOptionRoute = (curPageCount: number) =>
  `/option/${optionRoutes[curPageCount]}`;

export const getRandomNumber = (max: number) => Math.round(Math.random() * max);
