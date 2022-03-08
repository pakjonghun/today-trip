import React, { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicIconBox from "../../../components/BasicIcon";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useOptionSelect } from "../hooks/optionsStorage";
import { optionTravelTheme } from "./constants";
import { actions } from "../../../store/reducers/option.reducer";

const Travel_theme: FC = (props) => {
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
            dispatch(actions.travel_theme({ travel_theme: title + "" }));
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

export default Travel_theme;
