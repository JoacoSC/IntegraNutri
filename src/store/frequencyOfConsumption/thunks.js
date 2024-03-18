import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setFrequencyOfConsumption } from "./frequencyOfConsumptionSlice";



export const startUpdatingFrequencyOfConsumption = ( uid, patientID, newHistory ) => {
    return async( dispatch ) => {

        console.log('newHistory: ',newHistory)
        const frequencyTables = {
            frequencyTables: newHistory,
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, frequencyTables, { merge: true });
        
        
        dispatch( setFrequencyOfConsumption( newHistory ) )


    }
}