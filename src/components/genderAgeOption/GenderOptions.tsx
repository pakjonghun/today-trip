import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicIconBox from "../common/BasicIcon";
import { optionGenders } from "../../constants/genderAgeOptionConstants";
import { actions } from "../../store/reducers/option.reducer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useOptionSelect } from "../../hooks/optionsStorage";

const GenderOptions = () => {
  const { options, setOption } = useOptionSelect(optionGenders, "gender");
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-around w-full md:w-[80%] mx-auto my-5">
      {options.map(({ id, title, content, iconType, isSelected }) => (
        <BasicIconBox
          selectFunc={() => {
            setOption(id);
            dispatch(actions.setGender({ gender: title as string }));
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
