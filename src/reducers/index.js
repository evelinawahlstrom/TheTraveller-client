import { combineReducers } from "redux"
import auth from './auth'
import images from './images'
import image from './image'

export default combineReducers({
    auth,
    images,
    image
 })