import React from "react";
import HelmetForTitle from "../../components/Helmet";
import ChatMessage from "./components/ChatMessage";
import { getId, joinStyleClass } from "../../utility";
import { useNavigate } from "react-router-dom";
import { MotionValue, motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

interface ITravelDetailPresenter {
  isLoading: boolean;
  curImage: string;
  travel_theme: string[];
  title?: string;
  tel?: string;
  addr1?: string;
  homepage?: string;
  temp?: string;
  overviewEnd: number;
  isMessageOpen: boolean;
  messagesAnimation: MotionValue<number>;
  setSearchCount: React.Dispatch<React.SetStateAction<number>>;
  setIsMessageOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOverviewEnd: React.Dispatch<React.SetStateAction<number>>;
}

const TravelDetailPresenter: React.FC<ITravelDetailPresenter> = ({
  isLoading,
  travel_theme,
  title,
  tel,
  addr1,
  homepage,
  curImage,
  temp,
  overviewEnd,
  isMessageOpen,
  messagesAnimation,
  setIsMessageOpen,
  setOverviewEnd,
  setSearchCount,
}) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <h1 className="flex-center h-screen">관광지를 검색중입니다.</h1>;
  }
  return (
    <div className="relative min-h-screen pb-20">
      <AnimatePresence>
        <HelmetForTitle title="Detail" />

        <motion.div
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.4) 70%, rgba(255,255,255,1) 100%), url(${curImage})`,
          }}
          key={curImage + getId()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 w-full h-[75vh] bg-cover bg-center bg-no-repeat shadow-inner blur-sm"
        />

        <motion.div
          style={{ opacity: messagesAnimation }}
          className="absolute top-32 right-5 flex flex-col items-end"
        >
          <div
            className={joinStyleClass(
              "flex flex-col justify-between items-end h-[38vh] transition-transform duration-100 origin-top",
              isMessageOpen ? "scale-y--100" : "scale-y-0"
            )}
          >
            <ChatMessage
              isLoading={isLoading}
              firstLineMessage={title ? `오늘은 ${title}` : "검색된 여행지가"}
              secondLineMessage={title ? " 어떠신가요?" : "없습니다."}
            />

            <ChatMessage
              firstLineMessage={"다시 시작 하려면"}
              actionButton={
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                  className="scale-effect text-pink-400"
                >
                  다시 시작하기
                </button>
              }
            />

            <ChatMessage
              firstLineMessage={"다른 여행지를 검색 하려면"}
              actionButton={
                <button
                  onClick={() => {
                    setSearchCount((pre) => pre + 1);
                  }}
                  className={joinStyleClass(
                    "scale-effect text-pink-400 z-20",
                    isLoading ? "opacity-50 pointer-events-none" : "",
                    title ? "" : "opacity-50 pointer-events-none"
                  )}
                >
                  여행지 다시 고르기
                </button>
              }
            />

            <ChatMessage
              firstLineMessage={"여행지는 20km 이내로"}
              secondLineMessage={"무작위로 선택됩니다."}
            />
          </div>
          <button
            onClick={() => {
              setIsMessageOpen((pre) => !pre);
            }}
            className={joinStyleClass(
              "w-fit my-3 mr-5 text-center scale-effect transition-transform duration-100",
              isMessageOpen ? "" : "-translate-y-80"
            )}
          >
            <FontAwesomeIcon
              icon={isMessageOpen ? faArrowUp : faArrowDownShortWide}
              size={"lg"}
            />
          </button>
        </motion.div>
      </AnimatePresence>
      <main className="relative top-[55vh]">
        <div className="flex w-[95%] mx-auto">
          <div className="flex flex-col w-[90%] z-20">
            <h2 className="mb-4">About</h2>
            {travel_theme && <p>여행테마 : {travel_theme.join(", ")}</p>}
            {title && <p>{title}</p>}
            {tel && <p>연락처 : {tel}</p>}
            {addr1 && <p>주소 : {addr1}</p>}
            {homepage && (
              <p>
                <a
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  rel={"noreferrer"}
                  href={homepage.split("</")[0].split(">")[1]}
                >
                  Homepage
                </a>
              </p>
            )}
            {temp && (
              <p className="mt-5">
                {temp && temp.length > overviewEnd
                  ? temp?.substring(0, overviewEnd)
                  : temp}
                {temp.length > 500 ? (
                  <button
                    onClick={() => {
                      setOverviewEnd((pre) => {
                        if (pre === 500) {
                          return temp.length;
                        }
                        return 500;
                      });
                    }}
                    className="m-1 text-pink-500 font-semibold scale-effect"
                  >
                    {overviewEnd > 500 ? "감추기" : "더보기"}
                  </button>
                ) : (
                  ""
                )}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TravelDetailPresenter;
