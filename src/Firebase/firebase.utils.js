import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBOkax96dR3YVCImrcPoa4GOedHOYUKjuo',
    authDomain: 'e-commerce-a52c8.firebaseapp.com',
    projectId: 'e-commerce-a52c8',
    storageBucket: 'e-commerce-a52c8.appspot.com',
    messagingSenderId: '81118501811',
    appId: '1:81118501811:web:0922d71b3e8048e31a09c6',
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        console.log(userAuth);
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...aditionalData,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
    auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch(function (error) {
            console.error(error);
        });

export default firebase;
