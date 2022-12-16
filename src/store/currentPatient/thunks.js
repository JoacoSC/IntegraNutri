import { doc, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setCurrentPatient } from "./";


export const startLoadingCurrentPatient = ( uid, patientID ) => {
    return async( dispatch ) => {

        const collectionRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        const result = await getDoc( collectionRef );

        const currentPatient = result.data()
        
        dispatch( setCurrentPatient( currentPatient ) )

    }
}

export const startLoadingPatientInfo = ( displayName, photoURL ) => {
    return async( dispatch ) => {

        const collectionRef = doc( FirebaseDB, `users/${ photoURL }/patients/${ displayName }` );
        const result = await getDoc( collectionRef );

        const currentPatient = result.data()
        
        dispatch( setCurrentPatient( currentPatient ) )

    }
}