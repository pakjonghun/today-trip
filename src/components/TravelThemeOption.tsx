import React, { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicIconBox from "./common/BasicIcon";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { optionTravelTheme } from "../constants/travelThemeOptionConstants";
import { actions } from "../store/reducers/option.reducer";
import { useOptionSelect } from "../hooks/optionsStorage";

const TravelthemeOption: FC = (props) => {
  const { options, setOption } = useOptionSelect(
    optionTravelTheme,
    "travel_theme"
  );
  const dispatch = useAppDispatch();
  const { travel_theme } = useAppSelector((state) => state.option);
  useEffect(() => {
    //@ts-ignore
    props.setNextButtonClick(!!travel_theme.length);
  }, [props, travel_theme.length]);

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-2">
      {options.map(({ id, title, content, iconType, isSelected }) => (
        <BasicIconBox
          selectFunc={() => {
            setOption(id);
            dispatch(actions.setTravelTheme({ travel_theme: title + "" }));
          }}
          id={id}
          key={id}
          isSelected={isSelected}
          title={title + ""}
          iconType={iconType}
          content={
            <FontAwesomeIcon icon={content!.iconName} size={content!.size} />
          }
        />
      ))}
    </div>
  );
};

export default TravelthemeOption;
