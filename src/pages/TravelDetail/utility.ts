import axios from "axios";
import { getRandomNumber } from "../Options/utility";
import { arrange, ServiceKey } from "./constants";
import { detailParamsType, itemsType, locationParamsType } from "./types";

axios.defaults.baseURL =
  "http://api.visitkorea.or.kr/openapi/service/rest/KorService";

axios.defaults.timeout = 2000;

export const locationParamMaker = (
  mapX: number,
  mapY: number,
  radius: number = 20000
): locationParamsType => {
  return {
    mapX,
    mapY,
    radius,
    numOfRows: 100,
    MobileOS: "ETC",
    MobileApp: "today-trip",
    arrange: arrange[getRandomNumber(arrange.length - 1)],
    ServiceKey: decodeURIComponent(ServiceKey),
  };
};

export const detailParamMaker = (
  contentTypeId: number,
  contentId: number
): detailParamsType => {
  return {
    MobileOS: "ETC",
    MobileApp: "today-trip",
    contentId,
    contentTypeId,
    introYN: "Y",
    overviewYN: "Y",
    addrinfoYN: "Y",
    defaultYN: "Y",
    ServiceKey: decodeURIComponent(ServiceKey),
  };
};

export const imageParamMaker = (
  contentTypeId: number,
  contentId: number
): detailParamsType => {
  return {
    MobileOS: "ETC",
    MobileApp: "today-trip",
    contentId,
    contentTypeId,
    imageYN: "Y",
    ServiceKey: decodeURIComponent(ServiceKey),
  };
};

export const filterCategory = (
  cat1: string[],
  cat2: string[],
  items: itemsType[]
) => {
  if (!cat1) return;
  const cat1MatchItems = items.filter((i) => cat1.includes(i.cat1));
  const cat2MatchItems = items.filter((i) => cat2.includes(i.cat2));
  return [...cat1MatchItems, ...cat2MatchItems];
};

export const getRandomItem = (items: itemsType[]) => {
  return items[getRandomNumber(items.length - 1)];
};

export const getTotalItems = async <T>(url: string, params: T) => {
  try {
    const data = await axios(url, { params });
    const {
      response: { body },
    } = data.data;

    return body?.items?.item;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.toString());
    }
  }
};
