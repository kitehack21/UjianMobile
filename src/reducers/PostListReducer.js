import { GET_POSTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = [];

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_POSTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}