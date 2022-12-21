import { async } from "@firebase/util";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
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

export const startUpdatingCurrentPatientAnamnesis = ( uid, patientID, formAnamnesis ) => {
    return async( dispatch ) => {

        const newPatientInfoToFirestore = {
            anamnesis: formAnamnesis
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

    }
}
export const startUpdatingCurrentPatientPhysical_exam = ( uid, patientID, formPhysical_exam ) => {
    return async( dispatch ) => {

        const newPatientInfoToFirestore = {
            physical_exam: formPhysical_exam
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

    }
}
export const startUpdatingCurrentPatientDiagnosis = ( uid, patientID, formDiagnosis ) => {
    return async( dispatch ) => {

        const newPatientInfoToFirestore = {
            diagnosis: formDiagnosis
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

    }
}
export const startUpdatingCurrentPatientIndications = ( uid, patientID, formIndications ) => {
    return async( dispatch ) => {

        const newPatientInfoToFirestore = {
            indications: formIndications
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

    }
}
export const startUpdatingCurrentPatientWeight = ( uid, patientID, formWeight ) => {
    return async( dispatch ) => {

        const newPatientInfoToFirestore = {
            weight: formWeight
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}
export const startUpdatingCurrentPatientStature = ( uid, patientID, formStature ) => {
    return async( dispatch ) => {

        const newPatientInfoToFirestore = {
            stature: formStature
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}