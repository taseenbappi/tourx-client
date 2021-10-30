import authInitialization from "../utilities/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

authInitialization();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignInHangler = () => {

        return signInWithPopup(auth, googleProvider);


    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        });
    }

    return {
        user,
        googleSignInHangler,
        logOut,
        setUser
    };



}
export default useFirebase;