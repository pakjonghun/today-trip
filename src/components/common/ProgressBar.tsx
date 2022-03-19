import React from "react";
import { Outlet } from "react-router-dom";
import { joinStyleClass } from "../../utility/commonUtility";
import { optionTitles } from "../../constants/common/optioinConstants";
import { useGetCurPagePercent } from "../../hooks/getProgressPercent";

const ProgressBar = () => {
  const { percent, curPageCount, totalPageCount, setPagePercent } =
    useGetCurPagePercent({
      totalPageCount: optionTitles.length - 1,
    });

  return (
    <div className="px-1">
      <div className="w-full bg-gray-200">
        <div
          style={{ width: percent + "%" }}
          className={joinStyleClass(
            "py-2 bg-blue-400 text-xs font-medium text-center rounded-sm",
            !curPageCount ? "text-transparent" : "text-blue-50"
          )}
        >
          {percent}%
        </div>
      </div>
      <Outlet context={{ totalPageCount, curPageCount, setPagePercent }} />
    </div>
  );
};

export default ProgressBar;
