import firebase from 'firebase/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPY21IJSrHgjNMe_XZic0iN6q4zddE1IE",
    authDomain: "kieku-5f953.firebaseapp.com",
    databaseURL: "https://kieku-5f953.firebaseio.com",
    projectId: "kieku-5f953",
    storageBucket: "kieku-5f953.appspot.com",
    messagingSenderId: "779108296473",
    appId: "1:779108296473:web:5155618dca6f31ade7c788",
    measurementId: "G-0YBQQ1WKN6"
  };

firebase.initializeApp(firebaseConfig)
export default firebase