import { useNavigate } from "react-router-dom";
import { DirectionType } from "../types/commonTypes";
import { useEffect, useState } from "react";
import { getOptionRoute } from "../utility/commonUtility";

interface IuseGetCurPagePercent {
  init?: number;
  totalPageCount: number;
}

//두가지 기능이 같이 작동하고 있음(%로 반환, 라우터 주소 변경 / 별도로 관리 해야함.)
export const useGetCurPagePercent = ({
  init = 1,
  totalPageCount,
}: IuseGetCurPagePercent) => {
  const [pageCount, setPageCount] = useState(init);
  const navigate = useNavigate();

  useEffect(() => {
    if (pageCount > totalPageCount) {
      navigate("/detail");
    } else {
      navigate(getOptionRoute(pageCount));
    }
  }, [pageCount, totalPageCount, navigate]);

  const setPagePercent = (direction: DirectionType) => {
    switch (direction) {
      case "next":
        setPageCount((pre) => pre + 1);
        break;

      case "previous":
        setPageCount((pre) => {
          const curPage = pre !== 1 ? pre - 1 : pre;
          return curPage;
        });
        break;

      default:
        throw new Error("set pagepercent error");
    }
  };

  return {
    totalPageCount,
    curPageCount: pageCount,
    setPagePercent,
    percent: Math.round((pageCount / totalPageCount) * 100),
  };
};
