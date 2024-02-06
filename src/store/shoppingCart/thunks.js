import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setSubscriptions } from "./shoppingCartSlice";


export const startSetSubscriptions = ( ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `subscriptions` );
        const docs = await getDocs( collectionRef );

        const subscriptions = [];

        docs.forEach( doc => {
            subscriptions.push({ id: doc.id, ...doc.data() });
        });

        dispatch( setSubscriptions( subscriptions ) )

    }
}