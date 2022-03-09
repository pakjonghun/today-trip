import React from "react";
import HelmetForTitle from "../../components/Helmet";
import ChatMessage from "./components/ChatMessage";
import { joinStyleClass } from "../../utility";
import { useNavigate } from "react-router-dom";

interface ITravelDetailPresenter {
  isLoading: boolean;
  curImage: string;
  travel_theme: string[];
  setSearchCount: React.Dispatch<React.SetStateAction<number>>;
  overview?: string;
  title?: string;
  tel?: string;
  addr1?: string;
  homepage?: string;
}

const TravelDetailPresenter: React.FC<ITravelDetailPresenter> = ({
  isLoading,
  travel_theme,
  title,
  tel,
  addr1,
  homepage,
  overview,
  curImage,
  setSearchCount,
}) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <h1 className="flex-center h-screen">관광지를 검색중입니다.</h1>;
  }

  return (
    <div>
      <HelmetForTitle title="Detail" />

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.4) 70%, rgba(255,255,255,1) 100%), url(${curImage})`,
        }}
        className="flex-center top-0 w-full h-[70vh] mx-auto bg-cover bg-center bg-no-repeat shadow-inner blur-sm"
      />
      <main className="relative -top-60">
        <h1 className="absolute right-5 text-right">
          Hellow! <br />
        </h1>
        <div className="flex w-[95%] mx-auto">
          <div className="flex flex-col w-[35%] sm:w-[57%] md:w-[65%] lg:w-[73%]">
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
            {overview && (
              <p className="mt-5">
                {overview
                  .replaceAll("<br>", " ")
                  .replaceAll("<strong>", " ")
                  .replaceAll("<br/>", " ")
                  .replaceAll("<br />", " ")}
              </p>
            )}
          </div>

          <ChatMessage
            isLoading={isLoading}
            firstLineMessage={
              title ? `오늘은 ${title.substring(0, 6)}...` : "검색된 여행지가"
            }
            secondLineMessage={title ? " 어떠신가요?" : "없습니다."}
            locationIndex={0}
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
            locationIndex={1}
          />

          <ChatMessage
            firstLineMessage={"다른 여행지를 검색 하려면"}
            actionButton={
              <button
                onClick={() => {
                  setSearchCount((pre) => pre + 1);
                }}
                className={joinStyleClass(
                  "scale-effect text-pink-400",
                  isLoading ? "opacity-50 pointer-events-none" : "",
                  title ? "" : "opacity-50 pointer-events-none"
                )}
              >
                여행지 다시 고르기
              </button>
            }
            locationIndex={2}
          />

          <ChatMessage
            firstLineMessage={"여행지는 20km 이내로"}
            secondLineMessage={"무작위로 선택됩니다."}
            locationIndex={3}
          />
        </div>
      </main>
    </div>
  );
};

export default TravelDetailPresenter;
