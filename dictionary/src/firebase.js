// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSAiGRs3MIMLtNQ90Brhbv5YNyYKhKyh0",
    authDomain: "dictionary-79e51.firebaseapp.com",
    projectId: "dictionary-79e51",
    storageBucket: "dictionary-79e51.appspot.com",
    messagingSenderId: "573600856360",
    appId: "1:573600856360:web:a5fd3e2aef779dbb7b381d",
    measurementId: "G-X3MNK0Y5CF"
};
initializeApp(firebaseConfig);  //파이어베이스를 호출하는 그순간 파이어베이스를 쓸수있도록 초기화(기초설정)해준다.
// Initialize Firebase
const db = getFirestore();  // 파이어스토어 데이터베이스를 db에 가져옴
export {db}
