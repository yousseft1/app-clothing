import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCLBoPavnf73yluO5tLTCiInMBauI3w7I8",
  authDomain: "crwn-db-5e52e.firebaseapp.com",
  projectId: "crwn-db-5e52e",
  storageBucket: "crwn-db-5e52e.appspot.com",
  messagingSenderId: "795735119066",
  appId: "1:795735119066:web:1fb93d6b187032469481e3",
  measurementId: "G-XC39ZPEF7H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
