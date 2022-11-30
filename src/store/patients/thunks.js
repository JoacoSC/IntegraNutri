import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setMyPatients } from "./";


export const startLoadingMyPatients = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/patients` );
        const docs = await getDocs( collectionRef );

        const patients = [];

        docs.forEach( doc => {
            patients.push({ id: doc.id, ...doc.data() });
        });

        console.log( patients );

        dispatch( setMyPatients( patients ) )

    }
}