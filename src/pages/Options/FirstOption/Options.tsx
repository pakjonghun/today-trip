import React, { useEffect } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import AgeOptions from "./AgeOptions";
import GenderOptions from "./GenderOptions";

const Options: React.FC = (props) => {
  const { age, gender } = useAppSelector((state) => state.option);

  useEffect(() => {
    if (age && gender) {
      //@ts-ignore
      props.setNextButtonClick(true);
    }
  }, [age, gender, props]);

  return (
    <div>
      <GenderOptions />
      <AgeOptions />
    </div>
  );
};

export default Options;
