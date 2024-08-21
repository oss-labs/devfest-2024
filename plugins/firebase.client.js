import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import firebaseConfig from '../firebaseConfig';

const firebaseConfig = {
  apiKey: "AIzaSyCbx5IbThr900B_7mJnl2dbi9xrpVnKxb0",
  authDomain: "devfest-app-2024.firebaseapp.com",
  projectId: "devfest-app-2024",
  storageBucket: "devfest-app-2024.appspot.com",
  messagingSenderId: "826293014345",
  appId: "1:826293014345:web:7e371afcea1486e4efd498",
  measurementId: "G-3M2BR0F7J0"
};

export default defineNuxtPlugin(async(nuxtApp) => {
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)

  const user = useState('user', () => null)

  // Set up auth state listener
  await new Promise((resolve) => {
    onAuthStateChanged(auth, (firebaseUser) => {
      user.value = firebaseUser
      resolve()
    })
  })

  nuxtApp.provide("firebase", firebaseApp);
  nuxtApp.provide("firestore", firestore);
  nuxtApp.provide("auth", auth);
  nuxtApp.provide('user', user)
});
