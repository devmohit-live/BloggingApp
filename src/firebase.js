import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = require("./conf.json");
firebase.initializeApp(config);

//exporting firestore and auth
export const firestore = firebase.firestore();
export const auth = firebase.auth();

//enable google auth
//create a provider
let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//exporting firebase
export default firebase;
