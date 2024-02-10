import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { setSubscription } from "./subscriptionSlice";

function convertToISO(dateString) {
    const [day, month, yearTime] = dateString.split('/');
    const [year, time] = yearTime.split(', ');
    // Asegúrate de que el día y el mes siempre tengan dos dígitos
    const paddedDay = day.padStart(2, '0');
    const paddedMonth = month.padStart(2, '0');
    return `${year}-${paddedMonth}-${paddedDay}T${time}`;
}

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

        console.log('currentSubscription: ',currentSubscription)

        // Obtén la fecha actual
        let now = new Date();
        console.log('now: ',now)

        // Convierte la fecha de finalización de la suscripción a un objeto Date
        let subEnd = new Date(convertToISO(currentSubscription.subEnd));
        console.log('subEnd: ',subEnd)

        // Calcula la diferencia en días entre la fecha actual y la fecha de finalización de la suscripción
        let diffInDays = Math.ceil((subEnd - now) / (1000 * 60 * 60 * 24));
        console.log('diffInDays: ',diffInDays)

        // Inicializa el mensaje y la constante de estado de la suscripción
        let message = '';

        // Comprueba si la suscripción está activa y si la diferencia en días es 10 o menos
        if (currentSubscription.isActive && diffInDays <= 10 && diffInDays > 0) {
            message = 'Te informamos que tu suscripción está pronta a caducar en ' + diffInDays + ' días. Sin embargo, no hay motivo de preocupación. Una vez que tu suscripción actual expire, tendrás la opción de adquirir una nueva. Queremos asegurarte que todos tus datos y los de tus pacientes se mantendrán seguros y accesibles. ¡Gracias por confiar en nosotros!'

        } else if (currentSubscription.isActive && diffInDays <= 0) {
            // Si la suscripción está activa pero la fecha de finalización ha pasado, cambia el estado de la suscripción a inactivo
            currentSubscription.isActive = false;
            message = 'Tu suscripción ha caducado. Por favor, adquiere una nueva.';
        }

        currentSubscription.message = message;
        console.log('currentSubscription: ',currentSubscription)
        console.log('message: ', message);

        dispatch( setSubscription( currentSubscription ) )
        // if (currentSubscription && currentSubscription.isActive) {
        //     // Acceder a las propiedades de subscription aquí
        //     dispatch( setSubscription( currentSubscription ) )

        //     // console.log('subscription: ',subscription)
        // }
        
    }
}