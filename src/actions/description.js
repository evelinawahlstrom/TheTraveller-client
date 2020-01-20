import request from "superagent";
import { url } from "../url"

export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";

const updateDescriptionSuccess = description => ({
    type: EDIT_DESCRIPTION,
    payload: description
  });
  
  export const editDescription = (id, data) => (dispatch, getState) => {
    const token = getState().auth
    request
    .put(`${url}/images/${id}`)
      .set ("Authorization", `Bearer ${token}`)
      .send(data)
      .then(response => {
          console.log(response, 'what is response of editDesc?')
        dispatch(updateDescriptionSuccess(response.body));
      })
      .catch(console.error)
  };