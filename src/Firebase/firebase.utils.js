import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBOkax96dR3YVCImrcPoa4GOedHOYUKjuo",
  authDomain: "e-commerce-a52c8.firebaseapp.com",
  projectId: "e-commerce-a52c8",
  storageBucket: "e-commerce-a52c8.appspot.com",
  messagingSenderId: "81118501811",
  appId: "1:81118501811:web:0922d71b3e8048e31a09c6",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(function (error) {
    console.error(error);
  });

export default firebase;
