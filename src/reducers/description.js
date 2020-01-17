import { EDIT_DESCRIPTION } from "../actions/description";

export default (state = [], action = {}) => {
    console.log("STATE", state, "ACTION", action);
    switch (action.type) {
        case EDIT_DESCRIPTION:
            return [...state, ...action.payload];

        default:
            return state;
    }
};
