import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import './LogIn.css'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const LogGoogle = () => {
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;

                console.log(user)
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage);
                // ...
            });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="button1 btn btn-primary ">SIGN IN WITH GOOGLE</button>
        </div>
    );
};

export default LogGoogle;