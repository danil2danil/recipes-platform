import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "./firebase-auth";
import { setProfileHat } from "./firebase-firestore";

export const uploadProfileHat = async (userUid, file)=>{
    const imgRef = ref(storage, `users-hats/${userUid}.jpg`)
    await deleteObject(imgRef)
    await uploadBytes(imgRef, file)
    await setProfileHat(userUid, imgRef.fullPath)
}