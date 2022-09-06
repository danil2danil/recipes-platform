import React, {useState, useEffect} from "react"
import { getProfileInfo } from "../../../firebase/firebase-firestore"


export const useFetchProfileInfo = (userUid, isChangeDescription)=>{
	const [profileInf, setProfileInf] = useState("")

    const fetchProfileInfo = async () => {
		const res = await getProfileInfo(userUid)
		setProfileInf(res)
	}

    useEffect(() => {
		fetchProfileInfo()
	}, [userUid, isChangeDescription]);

    return profileInf
}