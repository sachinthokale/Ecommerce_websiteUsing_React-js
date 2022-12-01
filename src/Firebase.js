// For Firebase JS SDK v7.20.0 and later, measurementId is optio
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1F3YWx-CmNmPZHXL06wW1kRYQClZaFkg",
    authDomain: "clone-2d7dc.firebaseapp.com",
    projectId: "clone-2d7dc",
    storageBucket: "clone-2d7dc.appspot.com",
    messagingSenderId: "442322204137",
    appId: "1:442322204137:web:3dcd8e9034d10ca7e70778",
    measurementId: "G-B2TMZ9JKRT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };