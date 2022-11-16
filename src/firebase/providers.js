import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        
        const { uid, displayName, email, photoURL } = result.user;

        return {
            ok: true,
            // User info
            uid, displayName, email, photoURL
        }

    } catch (error) {

        // Handle Errors here.
        
        const errorMessage = error.message;

        // console.log({ errorCode, errorMessage })
        
        return{
            ok: false,
            errorMessage

        }
    }
}

export const registerUserWithEmailPassword = async( displayName, email, password ) => {
    try {
        
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );

        const { uid } = resp.user;

        updateProfile( FirebaseAuth.currentUser, { displayName });

        return{
            ok: true,
            uid, email, displayName
        }

    } catch (error) {

        console.log(error)
        // Handle Errors here.
        
        const errorMessage = error.message;

        // console.log({ errorCode, errorMessage })
        
        return{
            ok: false,
            errorMessage

        }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {
    try {

        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );

        const { uid, displayName } = resp.user;

        return{
            ok: true,
            uid, displayName
        }
        
    } catch (error) {

        console.log(error)
        // Handle Errors here.
        
        const errorMessage = error.message;

        // console.log({ errorCode, errorMessage })
        
        return{
            ok: false,
            errorMessage

        }
    }
}

export const logoutFirebase = async() => {

    return await FirebaseAuth.signOut();
}