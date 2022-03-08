import React from "react";
import BasicIconBox from "../../../components/BasicIcon";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { actions } from "../../../store/reducers/option.reducer";
import { IconEnum } from "../../../types";
import { useOptionSelect } from "../hooks/optionsStorage";
import { optionAges } from "./constants";

const AgeOptions = () => {
  const { options, setOption } = useOptionSelect(optionAges, "age");

  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  gap-x-4 gap-y-1 lg:gap-x-12 lg:gap-y-5 w-fit mb-5">
      {options.map(({ id, title, isSelected }) => (
        <BasicIconBox
          id={id}
          selectFunc={(id: string) => {
            setOption(id);
            dispatch(actions.age({ age: +title }));
          }}
          isSelected={isSelected}
          key={id}
          title={title + "대"}
          iconType={IconEnum.text}
        />
      ))}
    </div>
  );
};

export default AgeOptions;
