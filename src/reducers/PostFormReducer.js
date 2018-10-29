import { CREATE_POST, URL_CHANGED, CAPTION_CHANGED } from "../actions/types";

const INITIAL_STATE = {url : '', caption : ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case URL_CHANGED:
            return {...state, url: action.payload};
        case CAPTION_CHANGED:
            return {...state, caption: action.payload};
        case CREATE_POST:
            return INITIAL_STATE;
        default: 
            return state;
    }
}