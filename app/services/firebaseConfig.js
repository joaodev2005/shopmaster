import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7Cx7qb157rkSXZEDIlfO5Jo6ac4yIPxY",
    authDomain: "ecommerce-16582.firebaseapp.com",
    databaseURL: "https://ecommerce-16582-default-rtdb.firebaseio.com",
    projectId: "ecommerce-16582",
    storageBucket: "ecommerce-16582.appspot.com",
    messagingSenderId: "675744012666",
    appId: "1:675744012666:web:4ff7dae34af1c1eedc5ec3",
    measurementId: "G-KGT3CV138S"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };