import { getId } from "../utility/commonUtility";
import { IconEnum } from "../types/commonTypes";
import {
  faBookOpenReader,
  faPersonRunning,
  faPlaceOfWorship,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export const optionTravelTheme = [
  {
    id: getId(),
    title: "자연",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faTree,
      size: "5x" as SizeProp,
    },
  },
  {
    id: getId(),
    title: "역동적",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faPersonRunning,
      size: "5x" as SizeProp,
    },
  },
  {
    id: getId(),
    title: "문화",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faBookOpenReader,
      size: "5x" as SizeProp,
    },
  },
  {
    id: getId(),
    title: "역사",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faPlaceOfWorship,
      size: "5x" as SizeProp,
    },
  },
];
