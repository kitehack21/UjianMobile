import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import { URL_CHANGED, CAPTION_CHANGED, CREATE_POST, GET_POSTS_SUCCESS } from './types'

export const urlChanged = (text) =>{
    return{
        type: URL_CHANGED,
        payload: text
    }
}

export const captionChanged = (text) =>{
    return{
        type: CAPTION_CHANGED,
        payload: text
    }
}

export const postCreate = (email, url, caption ) => {

    return (dispatch) => {
        firebase.database().ref(`/posts`)
        .push({ email, url, caption })
        .then(() => {
            dispatch({ type: CREATE_POST })
        })
    }
}

export const getPosts = () => {

    return (dispatch) => {
        firebase.database().ref(`/posts`)
        .on('value', snapshot =>{
            dispatch({ 
                type: GET_POSTS_SUCCESS,
                payload: snapshot.val()
            })
        });
    }
};

