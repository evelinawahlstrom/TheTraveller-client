import { FETCH_IMAGE } from "../actions/images";

export default (state = [], action = {}) => {
    console.log("STATE", state, "ACTION", action);
    switch (action.type) {
        case FETCH_IMAGE:
        return action.payload
        default:
            return state;
    }
};
