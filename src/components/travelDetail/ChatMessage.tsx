import React, { ReactElement } from "react";
import { joinStyleClass } from "../../utility/commonUtility";
import Avatar from "./Avatar";

interface IChatMessage {
  firstLineMessage: string;
  secondLineMessage?: string;
  actionButton?: ReactElement;
  isLoading?: boolean;
}

const ChatMessage: React.FC<IChatMessage> = ({
  firstLineMessage,
  secondLineMessage,
  actionButton,
  isLoading,
}) => {
  const isExist = secondLineMessage || actionButton;
  return (
    <div className="flex py-3 px-5 w-fit bg-gray-100 shadow-md rounded-lg">
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
