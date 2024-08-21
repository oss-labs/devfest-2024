import { useNuxtApp } from "#app";
import { ref, computed } from 'vue'

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export const useAuth = () => {
  const { $auth, $user } = useNuxtApp();
  const isAuthenticated = computed(() => $user.value !== null)


  const signInWithGoogle = async () => {
    try {
      let res = await signInWithPopup($auth, provider);
      console.log("auth res", res);
      return res;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const logoutUser = async ()=>{
    try {
      await signOut($auth)
      $user.value = null
      return 
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }


  return {
    currentUser: $user,
    logoutUser,
    signInWithGoogle,
  };
};
