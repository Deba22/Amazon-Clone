import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVfZE0Uazsqug9Ac4TvethfYfYmRO6k6M",
  authDomain: "clone-e0e82.firebaseapp.com",
  projectId: "clone-e0e82",
  storageBucket: "clone-e0e82.appspot.com",
  messagingSenderId: "75296547974",
  appId: "1:75296547974:web:8120eb5b397c94e8449d07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };