import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
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