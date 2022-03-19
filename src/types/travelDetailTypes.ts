export type itemsType = {
  addr1: string;
  areacode: number;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  createdtime: number;
  dist: number;
  firstimage: string;
  firstimage2: string;
  tel: string;
  title: string;
  overview?: string;
  homepage?: string;
  detailTitle?: string;
};

type isIncludeInfoType = "Y" | "N";

export type basicParamsType = {
  MobileOS: "ETC";
  MobileApp: "today-trip";
  ServiceKey: string;
  defaultYN?: isIncludeInfoType;
  firstImageYN?: isIncludeInfoType;
  introYN?: isIncludeInfoType;
};

export type locationParamsType = {
  arrange: string;
  numOfRows: number;
  mapX: number;
  mapY: number;
  radius: number;
} & basicParamsType;

export type detailParamsType = {
  contentTypeId: number;
  contentId: number;
  overviewYN?: isIncludeInfoType;
  addrinfoYN?: isIncludeInfoType;
  imageYN?: isIncludeInfoType;
} & basicParamsType;

export type imageContainerType = {
  contentid: number;
  originimgurl: string;
  smallimageurl: string;
};
