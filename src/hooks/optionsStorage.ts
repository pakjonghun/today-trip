import { optionsType } from "./../store/reducers/option.reducer";
import { commonOptionType } from "../types/optionTypes";
import { useState } from "react";

export const useOptionSelect = (
  init: commonOptionType[],
  name: optionsType
) => {
  const [options, setOptions] = useState(init);

  const setOption = (id: string) => {
    setOptions((pre) => {
      const newItems: commonOptionType[] = JSON.parse(JSON.stringify(pre));
      for (const item of newItems) {
        if (item.id === id) {
          item.isSelected = !item.isSelected;
        } else {
          if (name === "age" || name === "gender") item.isSelected = false;
        }
      }
      return newItems;
    });
  };

  return { options, setOption };
};
