import axios from "axios";
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS
} from "../Type";
import {SIGNUP} from '../../constants/API'

export const signupNewUser = userData => dispatch => {
  dispatch({ type: CREATE_USER_SUBMITTED }); // set submitted state
  axios
    .post(SIGNUP, userData)
    .then(response => {
      console.log(response.statusCode);
      dispatch({ type: CREATE_USER_SUCCESS });
    })
    .catch(error => {
      if (error.resposne) {
        // The request was made and the server responded with a status code
        console.log(error.response.data);
        dispatch({
          type: CREATE_USER_ERROR,
          errorData: error.response.data
        });
      } else if (error.message) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    });
};