import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setUserInfo } from "./";



export const startLoadingUserInfo = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/userData` );
        const docs = await getDocs( collectionRef );

        let userInfo = null;

        docs.forEach( doc => {
            userInfo = doc.data();
        });
        

        // console.log(userInfo);

        dispatch( setUserInfo( userInfo ) )

    }
}