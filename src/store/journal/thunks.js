import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { editJournal, isEditingJournal, setMyJournal, updateJournalID } from "./";

export const startCreatingJournal = ( uid ) => {
    return async( dispatch ) => {

        const newJournal = {
            workingDayStartHours: 8,
            workingDayStartMinutes: 0,
            consultationHours: 1,
            consultationMinutes: 0,
            consultationsPerDay: 1,
            journalIsSet: false,
        }

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/journal` ) );

        await setDoc( newDoc, newJournal );

        const collectionRef = collection( FirebaseDB, `users/${ uid }/journal` );
        const docs = await getDocs( collectionRef );

        const journal = [];

        docs.forEach( doc => {
            journal.push({ id: doc.id, ...doc.data() });
        });

        const jid = journal[0].id;

        console.log('jid: ', jid);

        const newJournalID = {
            jid,
        }

        const docRef = doc( FirebaseDB, `users/${ uid }/journal/${ jid }` );
        await setDoc( docRef, newJournalID, { merge: true });

        dispatch( updateJournalID( jid ) )
    }
}

export const startEditJournal = ( journalID, workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay ) => {
    
    return async( dispatch ) => {

        // dispatch( isRegisteringPatient( true ) );
        const journalIsSet = true;
        
        const newJournal = {
            workingDayStartHours,
            workingDayStartMinutes,
            consultationHours,
            consultationMinutes,
            consultationsPerDay,
            journalIsSet,
        }

        const uid = FirebaseAuth.currentUser.uid;

        const newDoc = doc( FirebaseDB, `users/${ uid }/journal/${ journalID }` );

        await setDoc( newDoc, newJournal,  { merge: true } );

        dispatch( editJournal({ journalID, workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay, journalIsSet }) );
        dispatch( isEditingJournal( false ))
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

        console.log(journal)

        const journalID = journal[0].jid
        const workingDayStartHours = journal[0].workingDayStartHours
        const workingDayStartMinutes = journal[0].workingDayStartMinutes
        const consultationHours = journal[0].consultationHours
        const consultationMinutes = journal[0].consultationMinutes
        const consultationsPerDay = journal[0].consultationsPerDay
        const journalIsSet = journal[0].journalIsSet


        dispatch( setMyJournal({
            journalID,
            workingDayStartHours,
            workingDayStartMinutes,
            consultationHours,
            consultationMinutes,
            consultationsPerDay,
            journalIsSet
        }))

    }
}