import { ActionTypes } from "../types/action-types";

const INITIAL_STATE = {};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
};

export default errorReducer;
