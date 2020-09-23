import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD7zBwNZULG2IenNII2IFh6-wyQZLk6pAM",
    authDomain: "react-crud-83b26.firebaseapp.com",
    databaseURL: "https://react-crud-83b26.firebaseio.com",
    projectId: "react-crud-83b26",
    storageBucket: "react-crud-83b26.appspot.com",
    messagingSenderId: "809806638556",
    appId: "1:809806638556:web:fe8635c02ad4266f843319"
  };
  // Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();