import { GitActionTypes } from "./git.types";

const INITIAL_STATE = {
  user: [],
  error: {},
  fetchSuccessStatus: "Not Started",
};

const gitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GitActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        user: {},
        error: {},
        fetchSuccessStatus: "Started",
      };

    case GitActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: {},
        user: action.payload,
        fetchSuccessStatus: "Completed",
      };

    case GitActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        fetchSuccessStatus: "Failed",
      };

    default:
      return state;
  }
};

export default gitReducer;
