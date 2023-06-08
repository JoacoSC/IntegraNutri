import { async } from "@firebase/util";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setCurrentPatient, updateCurrentPatientTallaDiana } from "./";


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
export const startUpdatingCurrentPatientWeight = ( uid, patientID, newWeight ) => {
    return async( dispatch ) => {

        // console.log(newWeight)

        const newPatientInfoToFirestore = {
            weight: newWeight
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}
export const startUpdatingCurrentPatientStature = ( uid, patientID, newStature ) => {
    return async( dispatch ) => {

        // console.log(newStature)

        const newPatientInfoToFirestore = {
            stature: newStature
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}
export const startUpdatingCurrentPatientIMC = ( uid, patientID, newIMC ) => {
    return async( dispatch ) => {

        // console.log(newIMC)

        const newPatientInfoToFirestore = {
            imc: newIMC
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}

export const startUpdatingCurrentPatientCorrectedAge = ( uid, patientID, correctedAge, correctedAgeIsSet ) => {
    return async( dispatch ) => {

        // console.log(correctedAge)

        const newPatientInfoToFirestore = {
            correctedAge,
            correctedAgeIsSet,
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}

export const startUpdatingCurrentPatientUnixCorrectedBirthday = ( uid, patientID, unixCorrectedBirthday, correctedAgeIsSet ) => {
    return async( dispatch ) => {

        // console.log(unixCorrectedBirthday)
        // console.log(uid)
        // console.log(patientID)

        const newPatientInfoToFirestore = {
            unixCorrectedBirthday,
            correctedAgeIsSet,
        }

        // console.log('newPatientInfoToFirestore: ', newPatientInfoToFirestore)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}

export const startUpdatingCurrentPatientTallaDiana = ( uid, patientID, tallaDiana ) => {
    return async( dispatch ) => {

        console.log(tallaDiana)

        const newPatientInfoToFirestore = {
            tallaDiana,
        }

        // console.log('newPatientInfoToFirestore: ', newPatientInfoToFirestore)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

        dispatch(updateCurrentPatientTallaDiana( tallaDiana ))
    }
}