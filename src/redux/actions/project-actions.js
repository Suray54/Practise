import axios from "axios";
import { ActionTypes } from "../types/action-types";

export const createProject = (project, history) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_ERRORS,
      payload: err.response.data,
    });
  }
};
