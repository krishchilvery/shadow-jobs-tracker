import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from "./FirebaseConfig";
import { useState } from "react";
import { useEffect } from "react";

firebase.initializeApp(firebaseConfig);

export default function AuthGoogle() {
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false,
        }
    }

    const [isSignedIn, setIsSignedIn] = useState(false);

    // useEffect(() => {
    //     const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    //         user => {
    //             setIsSignedIn(!!user)
    //         }
    //     )
    //     return () => unregisterAuthObserver();
    // }, [])

    // // return (
    // //     <div>
    // //         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    // //     </div>
    // // );
    // if (!isSignedIn) {
    //     return (
    //       <div>
    //         <h1>My App</h1>
    //         <p>Please sign-in:</p>
    //         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    //       </div>
    //     );
    //   }
    //   return (
    //     <div>
    //       <h1>My App</h1>
    //       <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
    //       <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    //     </div>
    //   );

    useEffect(() => {
        var firebaseui = require("firebaseui")
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", uiConfig)
    }, [])
    
    return (
        <div id="firebaseui-auth-container"></div>
    )
}