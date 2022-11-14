import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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