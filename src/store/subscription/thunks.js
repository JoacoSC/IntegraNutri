import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";


export const startSetSubscriptionActive = ( uid ) => {
    return async( dispatch ) => {

        // const collectionRef = collection( FirebaseDB, `users/${ uid }/patients` );
        // const docs = await getDocs( collectionRef );

        // const patients = [];

        // docs.forEach( doc => {
        //     patients.push({ id: doc.id, ...doc.data() });
        // });

        // dispatch( setMyPatients( patients ) )

    }
}