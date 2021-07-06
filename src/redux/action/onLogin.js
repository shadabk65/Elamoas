import axios from "axios";
import Router from "next/router";
import {LOGIN } from  '../../constants/API';
import { SET_CURRENT_USER, UNSET_CURRENT_USER } from "../Type";

export const login = (userData) => dispatch => {
  axios
    .post(LOGIN, userData)
    .then(response => {
      const data = response.json();
      console.log(data);
      dispatch({
        type: SET_CURRENT_USER,
        payload: data
      });
      dispatch(Router.push("/"));
    })
    .catch(error => {
      console.log(error);
    });

};

export const logout = () => dispatch => {
  axios
    .post(LOGIN)
    .then(response => {
      dispatch({
        type: UNSET_CURRENT_USER
      });
      dispatch(Router.push("/"));
      console.log("Logout successful.");
    })
    .catch(error => {
      console.log(error);
    });
};