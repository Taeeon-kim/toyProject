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
  appId: "1:457207750430:web:865949f89943debac4b30f",
  measurementId: "G-0NVZJLK2VD"
};

initializeApp(firebaseConfig); //firebase를 쓸수있도록 기초설정 초기화

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



export const db = getFirestore();