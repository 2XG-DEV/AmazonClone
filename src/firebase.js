import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClyQ7m6fqpdoBUflRcfB87VVZXpEzNb7E",
  authDomain: "clone-dce6a.firebaseapp.com",
  projectId: "clone-dce6a",
  storageBucket: "clone-dce6a.appspot.com",
  messagingSenderId: "468685114770",
  appId: "1:468685114770:web:437672477f1e36c612c54b",
  measurementId: "G-F1E6027JR4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
