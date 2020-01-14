import request from "superagent";
import { url } from "../url"

export const FETCH_IMAGEBOARD = "FETCH_IMAGEBOARD";
export const FETCH_IMAGE = "FETCH_IMAGE"
export const ADD_IMAGE = "ADD_IMAGE"
export const CREATE_DESCRIPTION = "CREATE_DESCRIPTION"
export const DELETE_IMAGE = "DELETE_IMAGE"

const imageBoardFetch = images => ({
  type: FETCH_IMAGEBOARD,
  payload: images
});

export const loadImageBoard = data => (dispatch, getState) => {
  const token = getState().auth
  if (getState().images.length !== 0) return;
  request(`${url}/images`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(imageBoardFetch(response.body));
    })
    .catch(console.error);
};

const fetchImageSuccess = image => ({
  type: FETCH_IMAGE,
  payload: image
});

export const loadImage = (id) => (dispatch,
  getState) => {
  console.log("CAN WE GET THE STATE??", getState());
  const token = getState().auth
  request(`${url}/images/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .send(id)
    .then(response => {
      console.log(response);
      dispatch(fetchImageSuccess(response.body));
    })
    .catch(console.error)
};

const imageCreateSuccess = image => ({
  type: ADD_IMAGE,
  payload: image
});

export const createImage = (id) => (dispatch, getState) => {
  const token = getState().auth
  request
  .post(`${url}/images`)
  .set ("Authorization", `Bearer ${token}`)
  .send(id)
  .then(response => {
      dispatch(imageCreateSuccess(response.body));
    })
    .catch(console.error);
};

const descriptionCreateSuccess = description => ({
  type: CREATE_DESCRIPTION,
  payload: description
});

export const createDescription = (id) => (dispatch, getState) => {
  const token = getState().auth
  request
  .post(`${url}/images/${id}/`)
  .set ("Authorization", `Bearer ${token}`)
  .send(id)
  .then(response => {
      dispatch(descriptionCreateSuccess(response.body));
    })
    .catch(console.error);
};

const deleteImageSuccess = imageId => ({
  type: DELETE_IMAGE,
  payload: imageId
});

export const deleteImage = (id) => (dispatch, getState) => {
  const token = getState().auth
  request
  .delete(`${url}/images/${id}`)
    .set ("Authorization", `Bearer ${token}`)
    .then(response => {
      dispatch(deleteImageSuccess(id));
    });
};