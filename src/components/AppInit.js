import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth'
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main' 

class AppInit extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyCWgPNNjdn7VnKJ05fm88Pag6h1GTAujwI",
            authDomain: "ujianmobile-77b00.firebaseapp.com",
            databaseURL: "https://ujianmobile-77b00.firebaseio.com",
            projectId: "ujianmobile-77b00",
            storageBucket: "ujianmobile-77b00.appspot.com",
            messagingSenderId: "953290655582"
          };
          firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            }
            else{
                this.props.notLoginYet();
            }
        })
    }

    render(){
        return (
            <Main/>
        )
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);