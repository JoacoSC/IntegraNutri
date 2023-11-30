import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setUserDisplayName, setUserInfo } from "./";



export const startLoadingUserInfo = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/userData` );
        const docs = await getDocs( collectionRef );

        let userInfo = null;

        docs.forEach( doc => {
            userInfo = {id: doc.id, ...doc.data()};
        });
        

        // console.log(userInfo);

        dispatch( setUserInfo( userInfo ) )

    }
}

export const startLoadingUserDisplayName = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/userData` );
        const docs = await getDocs( collectionRef );

        let userDisplayName = null;

        docs.forEach( doc => {
            userDisplayName = doc.data().displayName;
        });
        

        // console.log(userDisplayName);

        dispatch( setUserDisplayName( userDisplayName ) )

    }
}

export const deleteUserDataFromDB = ( uid, udid ) => {
    return async( dispatch ) => {

        console.log(`Borrando datos del usuario ${ uid } de la base de datos...`)

        // await deleteDoc(doc( FirebaseDB, `users/${ uid }/` ));

        try {
            // Elimina el documento del usuario en Firestore
            await deleteDoc(doc( FirebaseDB, `users/${ uid }/userData/${ udid }` ));
            console.log("Datos eliminados con éxito!");
        } catch (error) {
            console.log(error);
            // Maneja el error según tus necesidades
        }
        
    }
}