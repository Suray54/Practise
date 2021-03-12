import { combineReducers } from "redux";

import errorReducer from "./reducers/error-reducer";

export default combineReducers({
  errors: errorReducer,
});
