import { FETCH_IMAGEBOARD, ADD_IMAGE, DELETE_IMAGE } from "../actions/images";

export default (state = [], action = {}) => {
    console.log("STATE", state, "ACTION", action);
    switch (action.type) {
        case FETCH_IMAGEBOARD:
            console.log("NEW STATE", [...state, ...action.payload]);
            return [...state, ...action.payload];
        case ADD_IMAGE:
            return [...state, { ...action.payload }]
        // case DELETE_IMAGE: 
        //     return {...state,
        //     images: state.images.filter(image => image.id != action.payload)
        //     }
        default:
            return state;
    }
};
