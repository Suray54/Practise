import { ActionTypes } from "../types/action-types";

const INITIAL_STATE = {
  errorlist: {},
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ERRORS:
      return {
        ...state,
        errorlist: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
