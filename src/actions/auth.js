import request from "superagent";
import { url } from "../url"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";

export const login = (email, password) => (dispatch, getState) => {
    console.log(email, password);
    request
        .post(`${url}/login`)
        .send({ email, password })
        .then(response => {
            console.log("What do we get?", response);
            dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt });
            console.log("response.body.jwt", response.body.jwt)
        })
        .catch(console.error);
};


export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logout = () => {
  return ({
    type: LOGOUT_SUCCESS,
    payload: null
  })
}