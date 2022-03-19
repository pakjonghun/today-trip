import { getId } from "../utility/commonUtility";
import { IconEnum } from "../types/commonTypes";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faFemale } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { pagnationButtonType } from "../types/optionTypes";

export const optionTitles = [
  "",
  "성별과 연령대를 알려주세요.",
  "누구와 함께 가시나요?",
  "어디서 출발하시나요?",
  "가고싶은 여행을 선택하세요",
];

export const optionAges = [
  { id: getId(), iconType: IconEnum.text, title: 10, isSelected: false },
  { id: getId(), iconType: IconEnum.text, title: 20, isSelected: false },
  { id: getId(), iconType: IconEnum.text, title: 30, isSelected: false },
  { id: getId(), iconType: IconEnum.text, title: 40, isSelected: false },
  { id: getId(), iconType: IconEnum.text, title: 50, isSelected: false },
  { id: getId(), iconType: IconEnum.text, title: 60, isSelected: false },
];

export const optionGenders = [
  {
    id: getId(),
    title: "여성",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faFemale,
      size: "5x" as SizeProp,
    },
  },
  {
    id: getId(),
    title: "남성",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faMale,
      size: "5x" as SizeProp,
    },
  },
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
