import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setAdultEnergyRequirements, setPediatricEnergyRequirements } from "./energyRequirementsSlice";



export const startUploadingEnergyRequirements = ( uid, patientID, energyRequirements ) => {
    return async( dispatch ) => {

        console.log('energyRequirements: ',energyRequirements)
        try {
            
            const data = {
                energyRequirements: energyRequirements,
            }
    
            const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
            await setDoc( docRef, data, { merge: true });
            
            
            dispatch( setPediatricEnergyRequirements( energyRequirements ) )
    
            return 'Requerimiento energético adjunto correctamente';
        } catch (error) {
            return 'Ocurrió algún error'
        }
    }
}

export const startUploadingAdultEnergyRequirements = ( uid, patientID, energyRequirements ) => {
    return async( dispatch ) => {

        console.log('energyRequirements: ',energyRequirements)
        try {
            
            const data = {
                adultEnergyRequirements: energyRequirements,
            }
    
            const docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
            await setDoc( docRef, data, { merge: true });
            
            
            dispatch( setAdultEnergyRequirements( energyRequirements ) )
    
            return 'Requerimiento energético adjunto correctamente';
        } catch (error) {
            return 'Ocurrió algún error'
        }
    }
}