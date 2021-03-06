import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useImageSwitcher } from "../hooks/imageSwitcher";
import { useAppDispatch } from "../hooks/reduxHooks";
import { actions } from "../store/reducers/option.reducer";
import { getId } from "../utility/commonUtility";
import HelmetForTitle from "../components/common/Helmet";

const Home = () => {
  const curIndex = useImageSwitcher({
    imageLength: 2,
    duration: 10000,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.setClear());
  }, [dispatch]);

  return (
    <div className="flex-center flex-col h-screen">
      <AnimatePresence>
        <HelmetForTitle title="Home" />
        <motion.div
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(0,0,0,.3)),url(${process.env.PUBLIC_URL}/images/background${curIndex}.png)`,
          }}
          key={getId()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
        />
      </AnimatePresence>

      <main className="z-10">
        <div className="relative -top-24 flex flex-col items-center justify-between h-[20vh]">
          <div className="flex flex-col justify-between items-center text-gray-50 space-y-1">
            <h1>1분안에 나만의 여행을 계획하고 </h1>
            <h1>당일치기 여행 지금 바로 떠나자!</h1>
          </div>

          <span className="block mb-5  text-gray-800 text-sm sm:text-md font-semibold text-center">
            여행계획 세우기는 귀찮지만 놀러는 가고 싶은 당신을 위해
          </span>
          <Link
            to="/option/personal"
            className="px-7 py-3 w-fit mx-auto bg-gray-50 text-gray-800s rounded-xl basic-btn text-sm sm:text-md"
          >
            시작하기
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
