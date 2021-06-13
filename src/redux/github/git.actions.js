import { GitActionTypes } from "./git.types";
import { toast } from "react-toastify";
import toastagain from "../../components/forms/toast-message-container";

// export const fetchUserRequest = () => {
//   return {
//     type: GitActionTypes.FETCH_USERS_REQUEST,
//   };
// };

// export const fetchUserSuccess = (user) => {
//   return {
//     type: GitActionTypes.FETCH_USERS_SUCCESS,
//     payload: user,
//   };
// };

// export const fetchUserFailure = (error) => {
//   return {
//     type: GitActionTypes.FETCH_USERS_FAILURE,
//     payload: error,
//   };
// };

export const fetchUser = (user) => async (dispatch) => {
  dispatch({
    type: GitActionTypes.FETCH_USERS_REQUEST,
  });

  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        toast.success("User Found");
        toastagain.success("User Found");
        return response.json();
      } else {
        throw Error("Could not find the user...");
      }
    })
    .then((user) => {
      dispatch({
        type: GitActionTypes.FETCH_USERS_SUCCESS,
        payload: user,
      });
    })
    .catch((error) => {
      toast.error("User not-found");
      toastagain.error("User not-found");
      dispatch({
        type: GitActionTypes.FETCH_USERS_FAILURE,
        payload: error,
      });
    });
};
