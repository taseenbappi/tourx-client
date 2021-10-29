import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const authInitialization = () => {
    initializeApp(firebaseConfig);
}
export default authInitialization;