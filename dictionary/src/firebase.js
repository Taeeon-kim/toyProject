// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPTXGTKDOV2ArQli4YUeaJ0QSUBw6nBPM",
  authDomain: "sparta-react-basic-288e8.firebaseapp.com",
  projectId: "sparta-react-basic-288e8",
  storageBucket: "sparta-react-basic-288e8.appspot.com",
  messagingSenderId: "457207750430",
  appId: "1:457207750430:web:e0e020fe22fdad55c4b30f",
  measurementId: "G-MS90GZL8TY"
};
initializeApp(firebaseConfig);  //파이어베이스를 호출하는 그순간 파이어베이스를 쓸수있도록 초기화(기초설정)해준다.
// Initialize Firebase
const db = getFirestore();  // 파이어스토어 데이터베이스를 db에 가져옴
export {db}
