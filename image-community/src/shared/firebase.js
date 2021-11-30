import firebase from "firebase/compat/app";    // /app 을 붙여야한다
import "firebase/compat/auth";

const firebaseConfig ={
    apiKey: "AIzaSyCZHZ23qY1b0nm5Gc9Si8EExMyXFBAwnEo",
  authDomain: "image-community-23d24.firebaseapp.com",
  projectId: "image-community-23d24",
  storageBucket: "image-community-23d24.appspot.com",
  messagingSenderId: "669651701509",
  appId: "1:669651701509:web:463a482747248208bb316c",
  measurementId: "G-RV68TH8RJE",
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();   //인증만들어줌


export {auth};