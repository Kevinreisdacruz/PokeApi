import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"


const firebaseConfig = {
  apiKey: "AIzaSyDTB7d_FH3VfodO0HYrPxGBSqb1OzGHei8",
  authDomain: "pokeapi-ba560.firebaseapp.com",
  projectId: "pokeapi-ba560",
  storageBucket: "pokeapi-ba560.firebasestorage.app",
  messagingSenderId: "500505212350",
  appId: "1:500505212350:web:530f520bdd5870077bb5ef"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const autenticacao = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { db, autenticacao };