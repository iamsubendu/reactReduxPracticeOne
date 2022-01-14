//only one reducer will be parent....and other reducers will be child

import changeNumber from "./upDown";

//to combine all reducers
import { combineReducers } from "redux";

const parentReducer = combineReducers({
  changeNumber,
  // changeAnything
});

export default parentReducer;
