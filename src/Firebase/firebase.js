// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FireBaseConfig"; 

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'

const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
} = firebaseConfig

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
 provider.setCustomParameters({
    prompt: 'select_account'
 })

 export const auth = getAuth()
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
 export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)



 // Database

 export const db = getFirestore(app);

 export const createUserDocumentFromAuth = async (userData, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userData.uid) 
    const userSnapshop = await getDoc(userDocRef) // Check if user exists in db
    if (!userSnapshop.exists()) {
        const { displayName, email } = userData
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating user',error)
        }
    } 
    return userDocRef
 };

 export const fetchLandingPageData = async () => {
    const ref = doc(db,'home-config', 'landingPageConfig')
    console.log('REF', ref)
    const dataSnapshot = await getDoc(ref)
    if(dataSnapshot.exists()) {
        const data = await dataSnapshot.data()
        const parsedData = await JSON.parse(data.configurationFiles)
        return await parsedData
    } else {
        console.log('Snapshot doesnt exist.')
        return {}
    }
    // console.log('datasnapshot', dataSnapshot)
    // console.log('data', data)
    // console.log('DATA', data)
 }

 // save landing page
 export const setLandingPageConfig = async (userData, landingPagConfig = {}) => {

    const data = JSON.stringify(
        landingPagConfig
    )

    const userDocRef = doc(db, 'home-config', "landingPageConfig")

    try {
        console.log('Setdoc data', userDocRef)
        await setDoc(userDocRef, {"configurationFiles": data} )
        return {
            success: true
        }
    } catch (error) {
        throw new Error(error)
    }
 }



 export const signUpWithGoogleEmailAndPassword = async (email, password) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
 }

 export const signInWithGoogleEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
 }

 export const signUserOut = async () => await signOut(auth)

 export const onAuthStateChangeListner = (callBack) => onAuthStateChanged(auth, callBack)