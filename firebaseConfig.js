import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcEraUiqqdP_iXwNDKnL2Beviy_-4p2Rk",
  authDomain: "yabbo-72c48.firebaseapp.com",
  projectId: "yabbo-72c48",
  storageBucket: "yabbo-72c48.firebasestorage.app",
  messagingSenderId: "426267708889",
  appId: "1:426267708889:web:cddcf83cb925d7479c5dc8",
  measurementId: "G-M8GLJM05CT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
