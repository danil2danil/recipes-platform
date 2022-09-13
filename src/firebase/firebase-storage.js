import { async } from "@firebase/util";
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "./firebase-auth";
import { setProfileAvatar, setProfileHat } from "./firebase-firestore";

export const uploadProfileHat = async (userUid, file)=>{
    const imgRef = ref(storage, `users-hats/${userUid}.jpg`)
    await deleteObject(imgRef)
    await uploadBytes(imgRef, file)
    await setProfileHat(userUid, imgRef.fullPath)
}

export const uploadProfileAvatar = async (userUid, file)=>{
    const avatarRef = ref(storage, `users-avatars/${userUid}.jpg`)
    await uploadBytes(avatarRef, file)
    await setProfileAvatar(userUid, avatarRef.fullPath)
}