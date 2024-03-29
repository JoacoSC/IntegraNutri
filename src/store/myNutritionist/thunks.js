import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setMyNutritionist } from "./myNutritionistSlice";



export const startLoadingMyNutritionistData = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/userData` );
        const docs = await getDocs( collectionRef );

        const nutritionistData = [];

        docs.forEach( doc => {
            nutritionistData.push( doc.data() );
        });

        dispatch( setMyNutritionist({ nutritionistData }) )
    }
}

