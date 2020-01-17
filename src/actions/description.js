import request from "superagent";
import { url } from "../url"

export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";

const updateDescriptionSuccess = description => ({
    type: EDIT_DESCRIPTION,
    payload: description
  });
  
  export const editDescription = (id) => (dispatch, getState) => {
    const token = getState().auth
    request
    .put(`${url}/images/${id}`)
      .set ("Authorization", `Bearer ${token}`)
      .send(id)
      .then(response => {
          console.log(response, 'what is response of editDesc?')
        dispatch(updateDescriptionSuccess(id));
      })
      .catch(console.error)
  };