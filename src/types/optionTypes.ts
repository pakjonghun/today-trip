import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { DirectionType, IconEnum } from "./commonTypes";

export type pagnationButtonType = {
  id: string;
  direction: DirectionType;
  icon: string;
};

export type commonOptionType = {
  id: string;
  title: string | number;
  iconType: keyof typeof IconEnum;
  isSelected: boolean;
  content?: {
    iconName: IconDefinition;
    size: SizeProp;
  };
};
