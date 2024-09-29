// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// firestore ko access krna
import { getFirestore } from "firebase/firestore";
// firebase se authentication lena
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// .............Add from fire base ............
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
