import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBATjcZ0P_Asi7CTdu-18XWImrHAoZDS9g",
  authDomain: "vuex-4-fb-auth-7b874.firebaseapp.com",
  projectId: "vuex-4-fb-auth-7b874",
  storageBucket: "vuex-4-fb-auth-7b874.appspot.com",
  messagingSenderId: "53098597692",
  appId: "1:53098597692:web:faa0ce0c5e85d95601a239",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
