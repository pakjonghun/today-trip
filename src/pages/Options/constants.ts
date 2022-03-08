import { getId } from "../../utility";
import { pagnationButtonType } from "./types";

export const optionTitles = [
  "",
  "성별과 연령대를 알려주세요.",
  "누구와 함께 가시나요?",
  "가고싶은 여행을 선택하세요",
];

export const pagnationButtons: pagnationButtonType[] = [
  {
    id: getId(),
    direction: "previous",
    icon: "←",
  },
  {
    id: getId(),
    direction: "next",
    icon: "→",
  },
];

export const optionRoutes = ["", "personal", "travel-with", "travel-theme"];
