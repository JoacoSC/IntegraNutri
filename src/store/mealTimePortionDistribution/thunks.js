import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setMealTimePortionDistribution } from "./mealTimePortionDistributionSlice";



export const startUploadingMealTimePortionDistribution = ( uid, patientID, mealTimePortionDistribution ) => {
    return async( dispatch ) => {

        console.log('mealTimePortionDistribution: ',mealTimePortionDistribution)
        const cleanPortion = {
            portionDistribution: {},
        }
        const portionDistribution = {
            portionDistribution: mealTimePortionDistribution,
        }

        let docRef = '';

        try {
            docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
            await setDoc( docRef, cleanPortion, { merge: true });

            docRef = doc( FirebaseDB, `users/${ uid }/patients/${ patientID }` );
            await setDoc( docRef, portionDistribution, { merge: true });
            
            dispatch( setMealTimePortionDistribution({ patientID, mealTimePortionDistribution }) )

            // Si todo sale bien, devolvemos un mensaje de éxito
            return "La tabla ha sido adjuntada al paciente seleccionado correctamente.";
        } catch (error) {
            // Si algo sale mal, devolvemos un mensaje de error
            console.error(error);
            return "Ocurrió un error.";
        }
    }
}

