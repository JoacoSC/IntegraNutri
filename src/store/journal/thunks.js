import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { editJournal, setMyJournal } from "./";

export const startEditJournal = ( workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay ) => {
    
    return async( dispatch ) => {

        // dispatch( isRegisteringPatient( true ) );
        
        const newJournal = {
            workingDayStartHours,
            workingDayStartMinutes,
            consultationHours,
            consultationMinutes,
            consultationsPerDay,
        }

        const uid = FirebaseAuth.currentUser.uid;

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/journal` ) );

        await setDoc( newDoc, newJournal );

        dispatch( editJournal({ workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay }) );
        
    }
}

export const startLoadingMyJournal = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/journal` );
        const docs = await getDocs( collectionRef );

        const journal = [];

        docs.forEach( doc => {
            journal.push({ id: doc.id, ...doc.data() });
        });

        const workingDayStartHours = journal[0].workingDayStartHours
        const workingDayStartMinutes = journal[0].workingDayStartMinutes
        const consultationHours = journal[0].consultationHours
        const consultationMinutes = journal[0].consultationMinutes
        const consultationsPerDay = journal[0].consultationsPerDay

        dispatch( setMyJournal({
            workingDayStartHours,
            workingDayStartMinutes,
            consultationHours,
            consultationMinutes,
            consultationsPerDay
        }))

    }
}