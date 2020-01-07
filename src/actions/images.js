import request from "superagent";
import { url } from "../url"

export const FETCH_IMAGEBOARD = "FETCH_IMAGEBOARD";
export const FETCH_IMAGE = "FETCH_IMAGE"

const imageBoardFetch = images => ({
    type: FETCH_IMAGEBOARD,
    payload: images
  });
  
  export const loadImageBoard = data => (dispatch, getState) => {
  const token = getState().auth
    // Request is not made
    // how to debug:
    // - console.log(getState()) to see what getState() returns
    // check the logic to see if it's correct
    // - console.log(getState().batches.length !== 0) // does this check pass?
  
    // guard statement that checks if we already have imageboard
    if (getState().images.length !== 0) return;
    // - put a console.log below you guard statement to see if it passes
    ///console.log('Guard statement passed??')
  
    // Check if request is made succesfully
    request(`${url}/images`)
    .set ("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
        // console.log(response) -> have a look at the body of the request or status code
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(imageBoardFetch(response.body)); 
        // check redux devtools if action got dispatched
      })
      .catch(console.error); // if you don't console response, check the console for errors
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
    .set ("Authorization", `Bearer ${token}`)
    .send(id)
    .then(response => {
      console.log(response);
      dispatch(fetchImageSuccess(response.body));
    })
    .catch(console.error)
  };