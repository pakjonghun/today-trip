import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type locationType = {
  latitude: number;
  longitude: number;
};

type initOptionsType = {
  travel_with?: string[];
  travel_theme: string[];
  gender?: string;
  age?: number;
  location?: locationType;
};

const initialState: initOptionsType = {
  travel_with: [],
  travel_theme: [],
  gender: "",
  age: 0,
  location: {
    latitude: 0,
    longitude: 0,
  },
};

export type optionsType = keyof initOptionsType;

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setGender: (state, { payload }: PayloadAction<{ gender: string }>) => {
      state.gender = payload.gender;
    },

    setAge: (state, { payload }: PayloadAction<{ age: number }>) => {
      state.age = payload.age;
    },
    setTravelWith: (
      state,
      { payload }: PayloadAction<{ travel_with: string }>
    ) => {
      state.travel_with?.push(payload.travel_with);
    },
    setTravelTheme: (
      state,
      { payload }: PayloadAction<{ travel_theme: string }>
    ) => {
      let index = -1;

      state.travel_theme.forEach((item, idx) => {
        if (item === payload.travel_theme) {
          index = idx;
        }
      });

      if (index >= 0) {
        return {
          ...state,
          travel_theme: state.travel_theme.filter((_, i) => i !== index),
        };
      } else {
        state.travel_theme.push(payload.travel_theme);
      }
    },
    setLocation: (state, { payload }: PayloadAction<locationType>) => {
      state.location = payload;
    },
    setClear: (state) => ({ ...initialState, location: state.location }),
  },
});

export const actions = optionSlice.actions;
export default optionSlice.reducer;
