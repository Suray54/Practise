import { combineReducers } from "redux";

import gitReducer from "./github/git.reducer";

export default combineReducers({
  git: gitReducer,
});
