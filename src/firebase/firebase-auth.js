import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../redux/userSlise";
import { useDispatch } from "react-redux";

const firebaseConfig = {
    apiKey: "AIzaSyAoSsOqoynOGNKOIjijb5CLGB4by5fV2sg",
    authDomain: "recipes-app-ae1aa.firebaseapp.com",
    projectId: "recipes-app-ae1aa",
    storageBucket: "recipes-app-ae1aa.appspot.com",
    messagingSenderId: "361447234452",
    appId: "1:361447234452:web:3645d3546584314e88cd81",
    measurementId: "G-G3PQEEPP4K",
    storageBucket: 'gs://recipes-app-ae1aa.appspot.com/'
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


//logIn func
export const logIn = (email, pass)=>{
    return signInWithEmailAndPassword(auth, email, pass)
}
//SignUp func
export const signUp = (email, pass)=>{
    return createUserWithEmailAndPassword(auth, email, pass)
}
//logOut func
export const logOut = ()=>{
    signOut(auth)
}
//check user logIn
export const useCurentUser = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if (user){
                dispatch(setProfile(user.toJSON()))
            }
            else{
                navigate('signIn', {replace: true})
            }
        })
    },[auth]);  
}


