import { combineReducers } from "@reduxjs/toolkit";
import option from "./option.reducer";

const rootReducer = combineReducers({
  option,
});

export default rootReducer;
