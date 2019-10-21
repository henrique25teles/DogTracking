import * as firebase from 'firebase/app'
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyATPc6jNFcqhFvhKpiP6ZiLvxGy94c3xMM",
    authDomain: "dog-tracking-88eb9.firebaseapp.com",
    databaseURL: "https://dog-tracking-88eb9.firebaseio.com",
    projectId: "dog-tracking-88eb9",
    storageBucket: "dog-tracking-88eb9.appspot.com",
    messagingSenderId: "778669479941",
    appId: "1:778669479941:web:38c241b0f52dcefb6ee46c",
    measurementId: "G-JNYLBGHC17"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig)

  const firestore = firebase.firestore(firebaseApp);

  export {firestore}