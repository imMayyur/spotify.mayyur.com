import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJJs5KG2cXS5DyT4WCiEGwNOqoFwbOUaQ",
    authDomain: "docs-mayyur-com.firebaseapp.com",
    projectId: "docs-mayyur-com",
    storageBucket: "docs-mayyur-com.appspot.com",
    messagingSenderId: "761702386623",
    appId: "1:761702386623:web:46c28828b7285c34f22f0a"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()

export { db }