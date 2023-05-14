import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../config/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext=createContext();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const creatUserWithEp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInwithEP=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleprovider)
    }

    const signWithGithub=()=>{
        return signInWithPopup(auth, gitProvider)
    }

    const handleLogout=()=>{
        return signOut(auth)
    }


    const shareFunc={
        creatUserWithEp,signInWithGoogle,signWithGithub,signInwithEP,user,handleLogout,loading
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                const email=currentUser?.email;
                const sending={
                    email
                }
                fetch("http://localhost:5000/jwt",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(sending)
                })
                .then(res => res.json())
                .then(data =>{
                    localStorage.setItem("access-token",data.token)
                })
            }
            setLoading(false)
          });
          return ()=>{
            unSubscribe();
          }
    },[])




    return (
        <div>
            <AuthContext.Provider value={shareFunc}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;