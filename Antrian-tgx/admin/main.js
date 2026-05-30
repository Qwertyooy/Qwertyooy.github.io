import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyBxrwtVjSiRXxuPVt9JHYxmzmPBp_lTWBs",
  authDomain: "antrian-tgx.firebaseapp.com",
  databaseURL: "https://antrian-tgx-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "antrian-tgx",
  storageBucket: "antrian-tgx.firebasestorage.app",
  messagingSenderId: "24957448394",
  appId: "1:24957448394:web:5573dd09b9a4d52ff70433",
  measurementId: "G-ET5326VSK9"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



