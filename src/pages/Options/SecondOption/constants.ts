import { getId } from "../../../utility";
import { IconEnum } from "../../../types";
import {
  faHeart,
  faHouse,
  faPerson,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export const optionTravelWith = [
  {
    id: getId(),
    title: "솔로",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faPerson,
      size: "5x" as SizeProp,
    },
  },
  {
    id: getId(),
    title: "친구",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faUserFriends,
      size: "5x" as SizeProp,
    },
  },
  {
    id: getId(),
    title: "연인",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faHeart,
      size: "5x" as SizeProp,
    },
  },
  {
    id: getId(),
    title: "가족",
    iconType: IconEnum.mixed,
    isSelected: false,
    content: {
      iconName: faHouse,
      size: "5x" as SizeProp,
    },
  },
];
