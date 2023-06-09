import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {


     const [user ,setUser] =useState(null);
    const [loading, setLoading]= useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const Logout =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const UpdateProfileInfo =(user,name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,LoggedUser=>{

            setUser(LoggedUser)
            setLoading(false)

        })

        return()=>{

            unsubscribe();

        }
    },[])

    const userInfo = {
        user,
        createUser,
        signIn,
        Logout,
        loading,
        UpdateProfileInfo,

    }
    


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;