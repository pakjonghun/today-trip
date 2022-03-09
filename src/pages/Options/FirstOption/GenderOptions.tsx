import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicIconBox from "../../../components/BasicIcon";
import { optionGenders } from "./constants";
import { useOptionSelect } from "../hooks/optionsStorage";
import { actions } from "../../../store/reducers/option.reducer";
import { useAppDispatch } from "../../../hooks/reduxHooks";

const GenderOptions = () => {
  const { options, setOption } = useOptionSelect(optionGenders, "gender");
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-around w-[80%] md:w-[50%] my-5">
      {options.map(({ id, title, content, iconType, isSelected }) => (
        <BasicIconBox
          selectFunc={() => {
            setOption(id);
            dispatch(actions.gender({ gender: title as string }));
          }}
          isSelected={isSelected}
          id={id}
          key={id}
          content={
            <FontAwesomeIcon icon={content!.iconName} size={content!.size} />
          }
          iconType={iconType}
        />
      ))}
    </div>
  );
};

export default GenderOptions;
