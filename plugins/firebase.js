import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByZqmUqkr7gGkTk-hLbveh2ImL0EvbI3M",
  authDomain: "napoli-b522c.firebaseapp.com",
  databaseURL: "https://napoli-b522c.firebaseio.com",
  projectId: "napoli-b522c",
  storageBucket: "napoli-b522c.appspot.com",
  messagingSenderId: "707056173569",
  appId: "1:707056173569:web:bfa8320719967056453600"
};
// Initialize Firebase

let app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
