import React from "react";
import { IconType } from "../../types/commonTypes";
import MixedButton from "./MixedButton";
import TextButton from "./TextButton";

interface IBasicIconBox {
  content?: JSX.Element;
  title?: string;
  iconType?: IconType;
  id: string;
  isSelected: boolean;
  selectFunc: (id: string) => void;
}

const BasicIconBox: React.FC<IBasicIconBox> = ({
  content,
  title,
  iconType,
  id,
  isSelected,
  selectFunc,
}) => {
  switch (iconType) {
    case "mixed":
      return (
        <MixedButton
          content={content!}
          title={title!}
          id={id}
          isSelected={isSelected}
          selectFunc={selectFunc}
        />
      );
    case "text":
      return (
        <TextButton
          title={title}
          id={id}
          isSelected={isSelected}
          selectFunc={selectFunc}
        />
      );

    default:
      throw new Error("icon option error");
  }
};

export default BasicIconBox;
