// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import{getFirestore} from "@firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyAsLIAW4bdG_5sPwSkXDgPXr6XBJlC2ins",
//     authDomain: "fir-tutorial-c3dac.firebaseapp.com",
//     projectId: "fir-tutorial-c3dac",
//     storageBucket: "fir-tutorial-c3dac.appspot.com",
//     messagingSenderId: "71896936990",
//     appId: "1:71896936990:web:c7b4931213cb299fae340f",
//     measurementId: "G-BHFRWPGHWE"
//   };
//   const app=initializeApp(firebaseConfig);
//   export const db=getFirestore(app);
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAsLIAW4bdG_5sPwSkXDgPXr6XBJlC2ins",
    authDomain: "fir-tutorial-c3dac.firebaseapp.com",
    projectId: "fir-tutorial-c3dac",
    storageBucket: "fir-tutorial-c3dac.appspot.com",
    messagingSenderId: "71896936990",
    appId: "1:71896936990:web:48a4b6be0394a96eae340f",
    measurementId: "G-XH6SLWJG1R"
});
 const db=firebaseApp.firestore();
 
//  const db=firebase.database();
export default db