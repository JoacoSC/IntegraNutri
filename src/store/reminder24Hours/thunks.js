import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setReminder24Hours } from "./reminder24HoursSlice";



export const startUpdatingReminder24Hours = ( uid, patientID, rows ) => {
    return async( dispatch ) => {

        const reminderTable = {
            reminderTable: rows,
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
        await setDoc( docRef, reminderTable, { merge: true });
        
        dispatch( setReminder24Hours( rows ) )

        console.log('rows: ',rows)

    }
}