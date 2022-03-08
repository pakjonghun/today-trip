import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HelmetForTitle from "../components/Helmet";
import { useImageSwitcher } from "../hooks/imageSwitcher";
import { useAppDispatch } from "../hooks/reduxHooks";
import background1 from "../images/background1.png";
import background2 from "../images/background2.png";
import { actions } from "../store/reducers/option.reducer";

const Home = () => {
  const images = [background1, background2];

  const curIndex = useImageSwitcher({
    imageLength: images.length,
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.clear());
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(0,0,0,.3)),url(${images[curIndex]})`,
      }}
      className=" flex-center top-0 w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
    >
      <HelmetForTitle title="Home" />
      <main className="relative-top-20">
        <h1 className="text-gray-50">
          1분안에 나만의 여행을 계획하고 <br />
          당일치기 여행 지금 바로 떠나자!
        </h1>
        <span className="block mt-3 mb-5 text-gray-800 font-semibold text-xl">
          여행계획 세우기는 귀찮지만 놀러는 가고 싶은 당신을 위해
        </span>
        <Link
          to="/option/personal"
          className="px-7 py-3 bg-gray-50 text-gray-800s rounded-xl basic-btn"
        >
          시작하기
        </Link>
      </main>
    </div>
  );
};

export default Home;
