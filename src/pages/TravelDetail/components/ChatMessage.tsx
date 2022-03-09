import React, { ReactElement } from "react";
import { joinStyleClass } from "../../../utility";
import Avatar from "./Avatar";

interface IChatMessage {
  locationIndex: number;
  firstLineMessage: string;
  secondLineMessage?: string;
  actionButton?: ReactElement;
  isLoading?: boolean;
}

const ChatMessage: React.FC<IChatMessage> = ({
  locationIndex,
  firstLineMessage,
  secondLineMessage,
  actionButton,
  isLoading,
}) => {
  const topPosition = ["top-20", "top-40", "top-60", "top-80"];

  const isExist = secondLineMessage || actionButton;
  return (
    <div
      className={joinStyleClass(
        "absolute right-5 flex p-3 bg-gray-100 shadow-md rounded-lg",
        topPosition[locationIndex]
      )}
    >
      <Avatar />
      <p
        className={joinStyleClass(
          "ml-4 transition-opacity duration-100",
          isLoading ? "opacity-0" : ""
        )}
      >
        {firstLineMessage}
        <br />
        {isExist && isExist}
      </p>
    </div>
  );
};

export default ChatMessage;
