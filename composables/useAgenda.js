import { useNuxtApp } from "#app";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const useAgenda = () => {
  const { $firestore } = useNuxtApp();

  const addAgenda = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection($firestore, collectionName), data);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  };

  const getAllAgenda = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(
        collection($firestore, collectionName)
      );
      return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        ...{ docid: doc.id }
      }));
    } catch (error) {
      console.error("Error getting documents: ", error);
      throw error;
    }
  };

  const updateAgenda = async (collectionName, docId, data) => {
    try {
      const docRef = doc($firestore, collectionName, docId);
      await updateDoc(docRef, data);
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  };

  const deleteAgenda = async (collectionName, docId) => {
    try {
      const docRef = doc($firestore, collectionName, docId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
      throw error;
    }
  };

  return {
    addAgenda,
    getAllAgenda,
    updateAgenda,
    deleteAgenda,
  };
};
