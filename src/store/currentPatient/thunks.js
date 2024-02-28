import { async } from "@firebase/util";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setCurrentPatient, updateCurrentPatientExamsHistory, updateCurrentPatientPerimetroCefalico, updateCurrentPatientPerimetroCintura, updateCurrentPatientPresionArterial, updateCurrentPatientTallaDiana } from "./";
import { setReminder24Hours } from "../reminder24Hours";


export const startLoadingCurrentPatient = ( uid, patientID ) => {
    return async( dispatch ) => {

        const collectionRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        const result = await getDoc( collectionRef );

        const currentPatient = result.data()
        
        dispatch( setCurrentPatient( currentPatient ) )

        if(currentPatient.reminderTable){
            dispatch( setReminder24Hours( currentPatient.reminderTable ) )
        }

    }
}

export const startLoadingPatientInfo = ( displayName, photoURL ) => {
    return async( dispatch ) => {

        // console.log('startLoadingPatientInfo')
        // console.log('displayName: ', displayName)
        // console.log('photoURL: ', photoURL)

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

export const startUpdatingCurrentPatientBiologicalAge = ( uid, patientID, biologicalAge, biologicalAgeIsSet ) => {
    return async( dispatch ) => {

        // console.log(biologicalAge)

        const newPatientInfoToFirestore = {
            biologicalAge,
            biologicalAgeIsSet,
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });
    }
}

export const startUpdatingCurrentPatientUnixBiologicalBirthday = ( uid, patientID, unixBiologicalBirthday, biologicalAgeIsSet, estadioTanner ) => {
    return async( dispatch ) => {

        // console.log(unixBiologicalBirthday)
        // console.log(uid)
        // console.log(patientID)

        const newPatientInfoToFirestore = {
            unixBiologicalBirthday,
            biologicalAgeIsSet,
            estadioTanner,
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

export const startUpdatingCurrentPatientPerimetroCefalico = ( uid, patientID, perimetroCefalico ) => {
    return async( dispatch ) => {

        console.log(perimetroCefalico)

        const newPatientInfoToFirestore = {
            perimetroCefalico,
        }

        // console.log('newPatientInfoToFirestore: ', newPatientInfoToFirestore)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

        dispatch(updateCurrentPatientPerimetroCefalico( perimetroCefalico ))
    }
}

export const startUpdatingCurrentPatientPerimetroCintura = ( uid, patientID, perimetroCintura ) => {
    return async( dispatch ) => {

        console.log(perimetroCintura)

        const newPatientInfoToFirestore = {
            perimetroCintura,
        }

        // console.log('newPatientInfoToFirestore: ', newPatientInfoToFirestore)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

        dispatch(updateCurrentPatientPerimetroCintura( perimetroCintura ))
    }
}

export const startUpdatingCurrentPatientPresionArterial = ( uid, patientID, presionArterial ) => {
    return async( dispatch ) => {

        console.log(presionArterial)

        const newPatientInfoToFirestore = {
            presionArterial,
        }

        // console.log('newPatientInfoToFirestore: ', newPatientInfoToFirestore)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

        dispatch(updateCurrentPatientPresionArterial( presionArterial ))
    }
}

export const startUpdatingExamsHistory = ( uid, patientID, newExamsHistory ) => {
    return async( dispatch ) => {

        console.log(newExamsHistory)

        const newPatientInfoToFirestore = {
            examsHistory: newExamsHistory,
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        const resp = await setDoc( docRef, newPatientInfoToFirestore, { merge: true });

        console.log('resp: ', resp)
        dispatch(updateCurrentPatientExamsHistory( newExamsHistory ))
    }
}

