import React from "react";
import { joinStyleClass } from "../../utility/commonUtility";

interface LoadingProps {
  size: "S" | "M" | "L";
}

const sizes = {
  S: "25px",
  M: "40px",
  L: "50px",
};

const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <div
      className={joinStyleClass(
        "animate-spin",
        `h-${sizes[size]} aspect-square`
      )}
    >
      new spin
    </div>
  );
};

export default Loading;
