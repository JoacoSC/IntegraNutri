import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setBuyOrder } from "./buyOrderSlice";


export const startSetBuyOrder = ( buyOrderID ) => {
    return async( dispatch ) => {

        const documentRef = doc( FirebaseDB, `buyOrders/${ buyOrderID }` );
        const result = await getDoc( documentRef );

        const buyOrder = result.data()
        
        dispatch( setBuyOrder( buyOrder ) )

        console.log('buyOrder: ',buyOrder)

    }
}