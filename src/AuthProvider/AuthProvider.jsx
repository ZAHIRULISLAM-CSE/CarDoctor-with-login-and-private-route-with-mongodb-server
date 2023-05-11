import React, { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../config/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";





export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const creatUserWithEp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleprovider)
    }

    const signWithGithub=()=>{
        return signInWithPopup(auth, gitProvider)
    }



    const shareFunc={
        creatUserWithEp,signInWithGoogle,signWithGithub
    }


    return (
        <div>
            <AuthContext.Provider value={shareFunc}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;