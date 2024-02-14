import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Auth,
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDgD287llU9DZavRUzQbG_cpVnSQ0v5Crk",
  authDomain: "netflix-clone-c71e9.firebaseapp.com",
  projectId: "netflix-clone-c71e9",
  storageBucket: "netflix-clone-c71e9.appspot.com",
  messagingSenderId: "575199057912",
  appId: "1:575199057912:web:edf03f5d4ed403f55ba80d",
  measurementId: "G-TZGEVCCZE2",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase local persistence enabled");
  })
  .catch((error) => {
    console.error("Error setting local persistence:", error);
  });

export { auth, app };
