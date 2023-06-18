import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyALh9YKSzBWiDIlTaN89lrr1ITQM1qU0lk",
  authDomain: "fir-bda64.firebaseapp.com",
  projectId: "fir-bda64",
  storageBucket: "fir-bda64.appspot.com",
  messagingSenderId: "1084226009310",
  appId: "1:1084226009310:web:1416dad18b67907bbb6a4f",
  measurementId: "G-Q7FMSWW4MH"
};
export const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyALh9YKSzBWiDIlTaN89lrr1ITQM1qU0lk",
//   authDomain: "fir-bda64.firebaseapp.com",
//   projectId: "fir-bda64",
//   storageBucket: "fir-bda64.appspot.com",
//   messagingSenderId: "1084226009310",
//   appId: "1:1084226009310:web:1416dad18b67907bbb6a4f",
//   measurementId: "G-Q7FMSWW4MH"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();

// export default getFirestore(app);