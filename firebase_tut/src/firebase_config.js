
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAsLIAW4bdG_5sPwSkXDgPXr6XBJlC2ins",
    authDomain: "fir-tutorial-c3dac.firebaseapp.com",
    projectId: "fir-tutorial-c3dac",
    storageBucket: "fir-tutorial-c3dac.appspot.com",
    messagingSenderId: "71896936990",
    appId: "1:71896936990:web:b8d2670e688e7aa3ae340f",
    measurementId: "G-5L4E357SEP"
  };

  const app = initializeApp(firebaseConfig);
  const analytics=getAnalytics(app);
  export const db=getFirestore(app);