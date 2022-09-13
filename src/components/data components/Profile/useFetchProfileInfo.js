import { onSnapshot, doc } from "firebase/firestore"
import React, { useState, useEffect } from "react"
import { db } from "../../../firebase/firebase-auth"
import { getProfileInfo } from "../../../firebase/firebase-firestore"
import { useSelector } from 'react-redux'




export const useFetchProfileInfo = ( profileUid = null ) => {
	const [profileInf, setProfileInf] = useState({})

	useEffect(() => {
		if (profileUid !== null) {
			const docRef = doc(db, "users", profileUid)
			const unsub = onSnapshot(docRef, {
				next: (doc) => {
					const res = doc.data()
					setProfileInf(res)
				},
				error: (e) => {
					console.log(e)
				}
			})
			return unsub
		}
	}, [profileUid]);

	return profileInf
}