import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5scy7cBB4EP8mNtwbaU-OL0ootPyude4",
    authDomain: "ecommerce-app-gs.firebaseapp.com",
    projectId: "ecommerce-app-gs",
    storageBucket: "ecommerce-app-gs.appspot.com",
    messagingSenderId: "67545240770",
    appId: "1:67545240770:web:bad0ede10861605eab975b",
    measurementId: "G-8QRYLXCZ3T"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;