import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useImageSwitcher } from "../../hooks/imageSwitcher";

import {
  detailParamMaker,
  filterCategory,
  getRandomItem,
  getTotalItems,
  imageParamMaker,
  locationParamMaker,
} from "../../utility/detailUtility";
import {
  detailParamsType,
  imageContainerType,
  itemsType,
  locationParamsType,
} from "../../types/travelDetailTypes";
import {
  category1,
  category2,
  initItem,
} from "../../constants/travelDetailconstants";
import TravelDetailPresenter from "./TravelDetailPresenter";
import { useTransform, useViewportScroll } from "framer-motion";

const TravelDetailContainer = () => {
  const background0 = process.env.PUBLIC_URL + "/images/background0";
  const background1 = process.env.PUBLIC_URL + "/images/background1";
  const navigate = useNavigate();
  const { travel_theme, location } = useAppSelector((state) => state.option);
  const [images, setImages] = useState([background0, background1]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [randomItem, setRandomItem] = useState<itemsType>(initItem);
  const [overviewEnd, setOverviewEnd] = useState(500);
  const [isMessageOpen, setIsMessageOpen] = useState(true);
  const { tel, title, overview, homepage, addr1, contenttypeid, contentid } =
    randomItem;

  const curIndex = useImageSwitcher({
    imageLength: images.length,
    duration: 5000,
  });

  const { scrollY } = useViewportScroll();
  const messagesAnimation = useTransform(scrollY, [50, 100], [1, 0]);

  useEffect(() => {
    if (!travel_theme.length) {
      navigate("/");
    }

    return () => setIsLoading(true);
  }, [travel_theme, navigate]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (location?.longitude && location.latitude) {
          const items = await getTotalItems<locationParamsType>(
            "/locationBasedList",
            locationParamMaker(location!.longitude, location!.latitude)
          );

          if (items?.length) {
            const temp: itemsType[] = [];
            for (const cate of travel_theme) {
              const cat1 = category1[cate];
              const cat2 = category2[cate];
              const filtered = filterCategory(cat1, cat2, items);
              if (filtered) filtered.forEach((v) => temp.push(v));
            }
            const item = getRandomItem(temp);
            setRandomItem((pre) => (item ? item : pre));
          }
        }
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    })();
  }, [location, travel_theme, searchCount]);

  useEffect(() => {
    setIsLoading(true);
  }, [isError]);

  useEffect(() => {
    (async () => {
      try {
        if (contentid && contenttypeid) {
          const items = await getTotalItems<detailParamsType>(
            "/detailCommon",
            detailParamMaker(contenttypeid, contentid)
          );
          if (items) {
            const { overview, homepage, telname: detailTitle } = items;
            setRandomItem((pre) => {
              const newObj: itemsType = JSON.parse(JSON.stringify(pre));
              newObj.overview = overview || "";
              newObj.homepage = homepage || "";
              newObj.detailTitle = detailTitle || "";
              return newObj;
            });
          }

          const imageItems: imageContainerType[] = await getTotalItems(
            "/detailImage",
            imageParamMaker(contenttypeid, contentid)
          );

          if (imageItems && imageItems.length) {
            const imageContainer = imageItems.map((i) => i.originimgurl);
            setImages(imageContainer);
          }

          if (!imageItems || !imageItems.length) {
            setImages([background0, background1]);
          }
        }
      } catch (err) {
        console.error(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [contentid, contenttypeid]);

  useEffect(() => {
    const badTags = [
      "</ strong>",
      "</strong>",
      "<strong>",
      "</ b>",
      "</b>",
      "<b>",
      "<u>",
      "</u>",
      "</ u>",
      "</ a>",
      "</a>",
      "<a>",
      "<br/ >",
      "<br>",
      "<br />",
      "<br/>",
    ];

    let newOverview = overview;
    if (newOverview) {
      for (const badTag of badTags) {
        newOverview = newOverview.replaceAll(badTag, " ");
      }
    }

    setRandomItem((pre) => ({ ...pre, overview: newOverview }));
  }, [overview]);

  return (
    <TravelDetailPresenter
      temp={overview}
      overviewEnd={overviewEnd}
      isMessageOpen={isMessageOpen}
      messagesAnimation={messagesAnimation}
      isLoading={isLoading}
      curImage={images[curIndex]}
      travel_theme={travel_theme}
      setIsMessageOpen={setIsMessageOpen}
      setOverviewEnd={setOverviewEnd}
      setSearchCount={setSearchCount}
      title={title}
      tel={tel}
      addr1={addr1}
      homepage={homepage}
    />
  );
};

export default TravelDetailContainer;
