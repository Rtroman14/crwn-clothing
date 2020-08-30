import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD2tV0Tul_XhLQiXuCW-NADVHM3dma-YPY",
    authDomain: "crwn-db-c99e6.firebaseapp.com",
    databaseURL: "https://crwn-db-c99e6.firebaseio.com",
    projectId: "crwn-db-c99e6",
    storageBucket: "crwn-db-c99e6.appspot.com",
    messagingSenderId: "531366884363",
    appId: "1:531366884363:web:5d1c82b871fd0aa745030e",
    measurementId: "G-XKTB6SRDN8",
};

// lesson 92 - 94
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // snapshot of signed in user
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            // create user in firestore database
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("ERROR CREATING USER ---", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
