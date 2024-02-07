import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setSubscription } from "./subscriptionSlice";


export const startSetSubscription = ( uid ) => {
    return async( dispatch ) => {

        //Consultando cantidad de suscripciones

        const collectionRef = collection( FirebaseDB, `users/${ uid }/subscription` );
        const docs = await getDocs( collectionRef );

        const subscription = [];

        docs.forEach( doc => {
            subscription.push({ id: doc.id, ...doc.data() });
        });

        // const documentRef = doc( FirebaseDB, `users/${ uid }/subscription/S-1` );
        // const result = await getDoc( documentRef );

        // const subscription = result.data()

        const currentSubscription = subscription[subscription.length - 1];
        
        if (currentSubscription && currentSubscription.isActive) {
            // Acceder a las propiedades de subscription aquí
            dispatch( setSubscription( currentSubscription ) )

            // console.log('subscription: ',subscription)
        }
        

    }
}