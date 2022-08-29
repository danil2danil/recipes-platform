import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect } from "react";
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
    measurementId: "G-G3PQEEPP4K"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export const setProfileInfo = (userUid, nickname, nameAndSecondName)=>{  
    const userRef = doc(db, 'users', userUid)
    return setDoc(userRef, {nickname, nameAndSecondName})
}

export const getProfileInfo = async (userUid)=>{
    const userRef = doc(db, 'users', userUid)
    const res = await getDoc(userRef)
    return res.data()
}

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
        onAuthStateChanged(auth, async (user)=>{
            if (user){
                const profileInfo = await getProfileInfo(user.uid)
                dispatch(setProfile(profileInfo))
            }
            else{
                navigate('signIn', {replace: true})
            }
        })
    },[auth]);  
}


