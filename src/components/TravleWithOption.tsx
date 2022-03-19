import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicIconBox from "./common/BasicIcon";
import { optionTravelWith } from "../constants/travelWithOptionConstants";
import { useAppDispatch } from "../hooks/reduxHooks";
import { actions } from "../store/reducers/option.reducer";
import { useOptionSelect } from "../hooks/optionsStorage";

const TravleWithOption: FC = (props) => {
  const { options, setOption } = useOptionSelect(
    optionTravelWith,
    "travel_with"
  );
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-2">
      {options.map(({ id, title, content, iconType, isSelected }) => (
        <BasicIconBox
          id={id}
          isSelected={isSelected}
          key={id}
          title={title as string}
          iconType={iconType}
          content={
            <FontAwesomeIcon icon={content!.iconName} size={content!.size} />
          }
          selectFunc={() => {
            setOption(id);
            dispatch(actions.setTravelWith({ travel_with: title + "" }));
            //@ts-ignore
            props.setNextButtonClick(true);
          }}
        />
      ))}
    </div>
  );
};

export default TravleWithOption;
