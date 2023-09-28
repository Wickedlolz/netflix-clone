import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, googleProvider } from '../firebase.config';
import { Outlet } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const signIn = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', email), {
            savedShows: [],
            likedShows: [],
            watchLater: [],
        });
    };

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider);
        await setDoc(doc(db, 'users', result.user.email), {
            savedShows: [],
            likedShows: [],
            watchLater: [],
        });
    };

    const logOut = () => signOut(auth);

    return (
        <FirebaseContext.Provider
            value={{ user, signIn, signInWithGoogle, signUp, logOut }}
        >
            {children ? children : <Outlet />}
        </FirebaseContext.Provider>
    );
};

export const useFirebaseContext = () => {
    const state = useContext(FirebaseContext);
    return state;
};
