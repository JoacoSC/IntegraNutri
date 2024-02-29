import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setReminder24Hours } from "./reminder24HoursSlice";



export const startUpdatingReminder24Hours = ( uid, patientID, newHistory ) => {
    return async( dispatch ) => {

        const reminderTables = {
            reminderTables: newHistory,
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, reminderTables, { merge: true });
        
        dispatch( setReminder24Hours( newHistory ) )

        console.log('rows: ',newHistory)

    }
}