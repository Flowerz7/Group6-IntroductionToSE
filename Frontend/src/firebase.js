import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJExbcC0Z6LPEhfRo6ffWosxs1VTDgxyU",
  authDomain: "gap-auth-dev.firebaseapp.com",
  projectId: "gap-auth-dev",
  storageBucket: "gap-auth-dev.appspot.com",
  messagingSenderId: "1070907464199",
  appId: "1:1070907464199:web:33be9c0db9030152b9a8a2",
});

export const auth = app.auth();
export const storage = app.storage();
export default app;
