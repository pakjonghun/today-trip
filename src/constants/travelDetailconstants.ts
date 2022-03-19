export const ServiceKey = process.env.REACT_APP_ServiceKey!;

export const arrange = ["A", "B", "C", "D", "E"];

export const category1 = {
  ["자연" as string]: ["A01"],
  역동적: ["A03"],
  문화: ["A02"],
  역사: ["A02"],
};

export const category2 = {
  ["자연" as string]: ["A0101"],
  역동적: ["A203", "A301", "A302", "A303", "A304", "A305"],
  문화: ["A204", "A206"],
  역사: ["A201"],
};

export const initItem = {
  addr1: "",
  areacode: 1,
  cat1: "A01",
  cat2: "A012",
  cat3: "A0122",
  contentid: 0,
  contenttypeid: 1,
  createdtime: 1,
  dist: 1,
  firstimage: process.env.PUBLIC_URL + "/images/background0.png",
  firstimage2: process.env.PUBLIC_URL + "/images/background1.png",
  tel: "",
  title: "",
};
