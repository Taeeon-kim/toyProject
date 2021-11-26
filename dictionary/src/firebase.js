// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5qpaQs7j2AACnd4AFUo3YNty5Basu6fU",
  authDomain: "test-fa0f2.firebaseapp.com",
  projectId: "test-fa0f2",
  storageBucket: "test-fa0f2.appspot.com",
  messagingSenderId: "1005110602805",
  appId: "1:1005110602805:web:eb89c284222d19950e157c",
  measurementId: "G-RVB85XTP0H"
};
initializeApp(firebaseConfig);  //파이어베이스를 호출하는 그순간 파이어베이스를 쓸수있도록 초기화(기초설정)해준다.
// Initialize Firebase
const db = getFirestore();  // 파이어스토어 데이터베이스를 db에 가져옴
export {db}
