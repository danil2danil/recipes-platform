import { db } from "./firebase-auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref } from "firebase/storage"
import { storage } from "./firebase-auth";

export const setProfileInfo = (userUid, nickname, nameAndSecondName)=>{
    const defaultHatRef = ref(storage, 'users-hats/default-hat-2.jpg')
    console.log(defaultHatRef)
    const userRef = doc(db, 'users', userUid)
    return setDoc(userRef, {nickname, nameAndSecondName, hatURL: defaultHatRef.fullPath})
}

export const getProfileInfo = async (userUid)=>{
    const userRef = doc(db, 'users', userUid)
    const res = await getDoc(userRef)
    console.log(res)
    return res.data()
}

export const setProfileDescription = async (userUid, desc)=>{
    const docRef = doc(db, 'users', userUid)
    const res =  await updateDoc(docRef, {description: desc})
}

export const setProfileHat = async (userUid, path)=>{
    const docRef = doc(db, 'users', userUid)
    const res =  await updateDoc(docRef, {hatURL: path})
}

export const setProfileAvatar = async (userUid, path)=>{
    const docRef = doc(db, 'users', userUid)
    await updateDoc(docRef, {avatarUrl: path})
}

