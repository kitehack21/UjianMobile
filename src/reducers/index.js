import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PostListReducer from './PostListReducer'
import PostFormReducer from './PostFormReducer'

export default combineReducers({
    auth: AuthReducer,
    posts: PostListReducer,
    postForm: PostFormReducer
})

