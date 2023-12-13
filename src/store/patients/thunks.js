import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setMyPatients } from "./";


export const startLoadingMyPatients = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/patients` );
        const docs = await getDocs( collectionRef );

        const patients = [];

        docs.forEach( doc => {
            patients.push({ id: doc.id, ...doc.data() });
        });

        dispatch( setMyPatients( patients ) )

    }
}

export const uploadPatientNewConsultation = ( consultationSlot, patientID ) => {
    return async( dispatch ) => {

        const uid = FirebaseAuth.currentUser.uid;

        const consultationToFireStore = {
            nextConsultation: consultationSlot.startTime
        }
        // console.log(consultationToFireStore)
        // console.log(patientID)
        // console.log(uid)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, consultationToFireStore, { merge: true });
        

        dispatch ( startLoadingMyPatients( uid ) );
        // const patients = [];

        // docs.forEach( doc => {
        //     patients.push({ id: doc.id, ...doc.data() });
        // });

        // dispatch( setMyPatients( patients ) )

    }
}

export const uploadPatientNewConsultationFromSharePage = ( consultationSlot, patientID, uid ) => {
    return async( dispatch ) => {

        // const uid = FirebaseAuth.currentUser.uid;

        const consultationToFireStore = {
            nextConsultation: consultationSlot
        }
        // console.log(consultationToFireStore)
        // console.log(patientID)
        // console.log(uid)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, consultationToFireStore, { merge: true });
        

        // const patients = [];

        // docs.forEach( doc => {
        //     patients.push({ id: doc.id, ...doc.data() });
        // });

        // dispatch( setMyPatients( patients ) )

    }
}

export const startDeleteConsultation = ( patientID ) => {
    return async( dispatch ) => {

        const uid = FirebaseAuth.currentUser.uid;

        const consultationToFireStore = {
            nextConsultation: null
        }
        // console.log(patientID)

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, consultationToFireStore, { merge: true });
        

        // const patients = [];

        // docs.forEach( doc => {
        //     patients.push({ id: doc.id, ...doc.data() });
        // });

        dispatch( startLoadingMyPatients( uid ) )

    }
}

export const startDeletePatient = ( patientID ) => {
    return async( dispatch ) => {

        const uid = FirebaseAuth.currentUser.uid;
        
        const resp = await deleteDoc(doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` ));

        dispatch( startLoadingMyPatients( uid ) )
    }
}

// export const startLoadingMyPatientsTest = () => {
//     return async( dispatch ) => {

//         const collectionRef = collection( FirebaseDB, `users/t0yjLtoTdQQnjUK0lHmY9XCYG2j1/patients` );
//         const docs = await getDocs( collectionRef );

//         const patients = [];

//         docs.forEach( doc => {
//             patients.push({ id: doc.id, ...doc.data() });
//         });

//         console.log(patients)

//         // const originalPatient = patients[0]

//         // console.log(originalPatient)

//         // const docRef = doc( FirebaseDB, `users/t0yjLtoTdQQnjUK0lHmY9XCYG2j1/patients/mBYd3tGjBhqYypkhixjP` );
//         // await setDoc( docRef, originalPatient, { merge: true });

//     }
// }