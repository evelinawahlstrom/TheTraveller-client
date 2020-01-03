import { FETCH_IMAGEBOARD } from "../actions/images";

export default (state = [], action = {}) => {
    console.log("STATE", state, "ACTION", action);
    switch (action.type) {
        case FETCH_IMAGEBOARD:
            console.log("NEW STATE", [...state, ...action.payload]); 
            // try your transformation here
            return [...state, ...action.payload];

        default:
            return state;
    }
};
