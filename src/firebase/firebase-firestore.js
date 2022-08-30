import { db } from "./firebase-auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";


export const setProfileInfo = (userUid, nickname, nameAndSecondName)=>{  
    const userRef = doc(db, 'users', userUid)
    return setDoc(userRef, {nickname, nameAndSecondName})
}

export const getProfileInfo = async (userUid)=>{
    const userRef = doc(db, 'users', userUid)
    const res = await getDoc(userRef)
    return res.data()
}

export const setProfileDescription = async (userUid, desc)=>{
    const docRef = doc(db, 'users', userUid)
    const res =  await updateDoc(docRef, {description: desc})
} 

export const getProfileDescription = async (userUid)=>{
    const docRef = doc(db, 'users', userUid)
    const res = (await getDoc(docRef)).data()
    return res.description
}