import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setSubscription } from "./subscriptionSlice";


export const startSetSubscription = ( uid ) => {
    return async( dispatch ) => {

        const documentRef = doc( FirebaseDB, `users/${ uid }/subscription/S-1` );
        const result = await getDoc( documentRef );

        const subscription = result.data()
        
        if (subscription && subscription.isActive) {
            // Acceder a las propiedades de subscription aquí
            dispatch( setSubscription( subscription ) )

            // console.log('subscription: ',subscription)
        }
        

    }
}