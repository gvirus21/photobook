import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyAFgEIrnQB2j8RT7J58ulqkObCw1J8Xoxc",
  authDomain: "photobook-aa4d7.firebaseapp.com",
  projectId: "photobook-aa4d7",
  storageBucket: "photobook-aa4d7.appspot.com",
  messagingSenderId: "923696285951",
  appId: "1:923696285951:web:a84fdcc848063b02cce4ca",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

//next: setup storage
