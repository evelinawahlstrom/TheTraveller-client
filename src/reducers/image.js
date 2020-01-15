import { FETCH_IMAGE, CREATE_DESCRIPTION, DELETE_IMAGE } from "../actions/images";

export default (state = [], action = {}) => {
    console.log("STATE", state, "ACTION", action);
    switch (action.type) {
        case FETCH_IMAGE:
        return action.payload

        case CREATE_DESCRIPTION: 
        return {
            ...state, 
            descriptions: [...state.descriptions, 
            action.payload]
          }
        case DELETE_IMAGE: 
        return {}
        default:
            return state;
    }
};
