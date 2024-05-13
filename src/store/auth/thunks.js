import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { loginWithEmailPassword, logoutFirebase, registerPatientFromEmail, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import emailjs from "@emailjs/browser";

import { checkingCredentials, logout, login, isRegisteringPatient, registeredPatientUID, setIsNutritionistStatus } from "./";
import { loadUserInfo } from "../../helpers/loadUserInfo";
import { deleteUserDataFromDB, startLoadingUserInfo, wipeUserInfo } from "../userInfo";
import { startLoadingMyPatients } from "../patients";
import { EmailAuthProvider, deleteUser, reauthenticateWithCredential, sendPasswordResetEmail, updatePassword } from "firebase/auth";
import { deleteJournalFromDB, startCreatingJournal, unsetJournal } from "../journal";
import { disableConfirmBtn, setErrorCode, switchError, switchPatientPasswordChangedSuccesfully } from "../loginHelper";
import { unsetSubscription } from "../subscription/subscriptionSlice";

// Función para obtener la fecha de término de la suscripción
function calculateSubscriptionEndDate(startDate, days) {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);
    return endDate;
}

export const checkingAuthentication = ( email, password ) => {
    
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = ( isNutritionist ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const newUser = {
            rut: rawRut,
            displayName,
            unixBirthday,
            region,
            city,
            address,
            phone,
            gender: biologicalSex,
            isNutritionist: true,
        }

        const result = await signInWithGoogle();
        const completeResult = { ...result, isNutritionist };
        
        if( !completeResult.ok ) return dispatch( logout( result ) );

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/userData` ) );

        await setDoc( newDoc, newUser );

        dispatch( login( result ) )
    }
}

export const startCreatingUserWithEmailPassword = ({ displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
        const newUser = {
            rut,
            displayName,
            unixBirthday,
            region: regionSeleccionada,
            city: comunaSeleccionada,
            address,
            phone,
            gender: biologicalSex,
            isNutritionist: true,
        }

        // console.log('ENTRÉ A THUNKS: ',newUser)

        const { uid, ok, errorMessage, errorCode } = await registerUserWithEmailPassword( displayName, email, password );

        // console.log('errorMessage: ', errorMessage)
        // console.log('errorCode: ', errorCode)
        if ( !ok ){
            // console.log('errorMessage: ', errorMessage)
            // console.log('errorCode: ', errorCode)
            dispatch( logout({ errorMessage }) );
            dispatch( setErrorCode( errorCode ) );
            dispatch( switchError( true ) );
            return 
        } 
            

        // console.log('Registrado con éxito')

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/userData` ) );

        await setDoc( newDoc, newUser );
        // console.log('Almacenando en la base de datos...')

        dispatch( startCreatingJournal( uid ) )
        // console.log('Creando agenda...')
        dispatch( startSubscriptionTrial( uid ) )
        // console.log('Activando prueba gratis...')
        // dispatch( login({ uid, displayName }) )
        dispatch( startLogout() );
        // console.log('Redirigiendo al login...')
                
    }
}

export const startSubscriptionTrial = ( uid ) => {
    return async( dispatch ) => {

        const buyOrder = "O-1"

        const currentDate = new Date();

        // Opciones de formato
        const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

        // itemID = 3 es la prueba gratis de 7 días.
        const itemID = 3;

        const subscriptions = [];
        
        // console.log('currentDate:', currentDate);

        const collectionRef = collection( FirebaseDB, `subscriptions` );
        const docs = await getDocs( collectionRef );
  
        // Iterar sobre los documentos y guardar los datos en el array subscriptions
        docs.forEach((document) => {
            subscriptions.push(document.data());
        });
        
        // Buscar el objeto con el itemID igual al valor de item
        const selectedSubscription = subscriptions.find((subscription) => subscription.itemID === parseInt(itemID, 10));

        const subscriptionDays = selectedSubscription.subscriptionDays;

        const membership = selectedSubscription.membership;

        // Crear el objeto "subscription"
        const subscription = {
            isActive: true,
            subStart: currentDate.toLocaleDateString('en-US', dateOptions) + ', ' + currentDate.toLocaleTimeString('en-US', timeOptions), // Formato de fecha y hora actual
            subEnd: calculateSubscriptionEndDate(currentDate, subscriptionDays).toLocaleDateString('en-US', dateOptions) + ', ' + calculateSubscriptionEndDate(currentDate, subscriptionDays).toLocaleTimeString('en-US', timeOptions), // Calcular la fecha de término
            membership: membership, // Tipo de membresía
            buyOrder: buyOrder // Orden de compra
        };

        // console.log('subscription: ', subscription);

        try {

            let subscriptionIndex = "S-1";

                try {

                    const userSubscriptionsRef = collection( FirebaseDB, `users/${ uid }/subscription` );

                    let userSubscriptions = [];

                    const docs = await getDocs( userSubscriptionsRef );

                    // Iterar sobre los documentos y guardar los datos en el array subscriptions
                    docs.forEach((document) => {
                        userSubscriptions.push(document.data());
                    });
                    // console.log('userSubscriptions:',userSubscriptions)
                    // console.log('userSubscriptions length:',userSubscriptions.length)

                    // let buyOrder = "O-" + Math.floor(Math.random() * 1000000) + 1;
                    subscriptionIndex = "S-" + (userSubscriptions.length + 1);

                } catch (error) {

                    console.log('error: ', error)
                    
                }

            console.log('uid: ', uid)

            const newDoc = doc(collection(FirebaseDB, `users/${ uid }/subscription`), subscriptionIndex);

            await setDoc(newDoc, subscription);

        } catch (error) {

            console.log('error: ', error)
        
        }
        
        
    }
}

export const startCreatingPatient = ({ displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex, genderIdentity, nextConsultation }) => {
    return async( dispatch ) => {

        // dispatch( checkingCredentials() );
        dispatch( isRegisteringPatient( true ) );
        
        const newUser = {
            rut,
            displayName,
            unixBirthday,
            email,
            password,
            region: regionSeleccionada,
            city: comunaSeleccionada,
            address,
            phone,
            gender: biologicalSex,
            genderIdentity,
            isNutritionist: false,
            emailActivated: false,
            nextConsultation: nextConsultation,
            weight: [{}],
            stature: [{}],
            imc: [{}],
            imcPregnant: [],
            unixCorrectedBirthday: null,
            age: {
                y: 0,
                m: 0,
                d: 0,
            },
            correctedAge: {
                y: 0,
                m: 0,
                d: 0,
            },
            correctedAgeIsSet: false,
        }

        // console.log(newUser)

        const uid = FirebaseAuth.currentUser.uid;

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/patients` ) );

        await setDoc( newDoc, newUser );

        const patientUID = newDoc._key.path.segments[3];
        
        dispatch( registeredPatientUID( patientUID ) );

        const templateParams = {
            displayName,
            email,
            password,
            uid,
            patientUID,

        }

        // console.log( templateParams )

        emailjs.send('service_xueiflu', 'template_lf0jvcb', templateParams, '41EFlO3aJuRq71GVI')
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        dispatch( isRegisteringPatient( false ) );
        dispatch ( startLoadingMyPatients( uid ) );
        
    }
}

export const startCreatingPatientFromEmail = ( email, password, uid, patientUID ) => {
    return async( dispatch ) => {

        // console.log( email, password )
        
        const { result_uid, ok, errorMessage, displayName, photoURL } = await registerPatientFromEmail( patientUID, email, password, uid );

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        // console.log( `Usuario creado con exito: Authentication-UID:${ uid } - patientUID: ${ displayName } - NutriUID: ${ photoURL }` )

        dispatch( startLogout() );

        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        // console.log('startLoginWithEmailPassword')

        const result = await loginWithEmailPassword({ email, password })

        // console.log('result: ', result)

        // console.log(result)

        if ( result.errorCode === 'auth/wrong-password' ) {
            // console.log('Contraseña incorrecta')
            dispatch( logout( result.errorMessage ) )
            return {
                ok: false,
                errorCode: result.errorCode,
            }
        }
        if ( result.errorCode === 'auth/too-many-requests' ) {
            // console.log('Demasiados intentos fallidos, intente nuevamente mas tarde')
            dispatch( logout( result.errorMessage ) )
            return {
                ok: false,
                errorCode: result.errorCode,
            }
        }
        if ( result.errorCode === 'auth/user-not-found' ) {
            // console.log('Usuario no encontrado, por favor registrese o active su cuenta a través del link enviado a su correo')
            dispatch( logout( result.errorMessage ) )
            return {
                ok: false,
                errorCode: result.errorCode,
            }
        }

        // if ( !result.ok ) return dispatch( logout( result ) );
        // dispatch( login( result ))
    }

}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout() );
        dispatch( wipeUserInfo() );
        dispatch( unsetJournal() );
        dispatch( unsetSubscription() );

    }
}

export const startCreatingPatientSharePage = ({ uid, displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex, genderIdentity, nextConsultation }) => {
    return async( dispatch ) => {

        // dispatch( checkingCredentials() );
        dispatch( isRegisteringPatient( true ) );
        
        const newUser = {
            rut,
            displayName,
            unixBirthday,
            email,
            password,
            region: regionSeleccionada,
            city: comunaSeleccionada,
            address,
            phone,
            gender: biologicalSex,
            genderIdentity,
            isNutritionist: false,
            emailActivated: false,
            nextConsultation: nextConsultation,
            weight: [{}],
            stature: [{}],
            imc: [{}],
            unixCorrectedBirthday: null,
            age: {
                y: 0,
                m: 0,
                d: 0,
            },
            correctedAge: {
                y: 0,
                m: 0,
                d: 0,
            },
            correctedAgeIsSet: false,
        }

        // console.log('newUser: ', newUser)

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/patients` ) );

        await setDoc( newDoc, newUser );

        // console.log('newDoc: ', newDoc)

        const patientUID = newDoc._key.path.segments[3];
        
        dispatch( registeredPatientUID( patientUID ) );

        const templateParams = {
            displayName,
            email,
            password,
            uid,
            patientUID,

        }

        // console.log( templateParams )

        emailjs.send('service_xueiflu', 'template_lf0jvcb', templateParams, '41EFlO3aJuRq71GVI')
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        dispatch( isRegisteringPatient( false ) );
        // const result = await dispatch( startLoginWithEmailPassword({ email, password }) ) ;
        // console.log(result)
        // dispatch ( startLoadingMyPatients( uid ) );
        
    }
}

export const startLogoutSharePage = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout() );
        // dispatch( wipeUserInfo() );
        // dispatch( unsetJournal() )

    }
}

export const redirectNutritionistOrPatient = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/userData` );
        const docs = await getDocs( collectionRef );

        let nutriBoolean = undefined;

        docs.forEach( doc => {
            nutriBoolean = doc.data().isNutritionist ;
        })

        // console.log(nutriBoolean)

        if (nutriBoolean === undefined || nutriBoolean === false){
            nutriBoolean = false;
            dispatch( setIsNutritionistStatus(nutriBoolean) )
            
        }else{
            dispatch( setIsNutritionistStatus(nutriBoolean) )
            
            dispatch( startLoadingUserInfo( uid ) );

            dispatch ( startLoadingMyPatients( uid ) );
        }
        
    }
}

export const resetPassword = ( email ) => {
    return async( dispatch ) => {

        await sendPasswordResetEmail( FirebaseAuth, email );

        // console.log('Email enviado al correo: ', email)

    }
}

export const setNewPassword = ( actualPassword, newPassword ) => {
    return async( dispatch ) => {

        dispatch( disableConfirmBtn( true ) );
        dispatch( switchError( false ) );
        dispatch( setErrorCode( null ) );

        // console.log('reauthenticate')
        
        const user = FirebaseAuth.currentUser;

        const credential = EmailAuthProvider.credential(
            user.email,
            actualPassword
        )
        reauthenticateWithCredential(user, credential).then(() => {
            
            updatePassword(user, newPassword).then(() => {
                dispatch( switchPatientPasswordChangedSuccesfully(true) )
            }).catch((error) => {
                console.log('Ocurrió un error :(', {error})
            });

        }).catch((error) => {
            
            if ( error.code === 'auth/wrong-password' ) {
                console.log('Contraseña incorrecta');
                dispatch( switchError( true ) );
                dispatch( setErrorCode( error.code ) );
            }
            if ( error.code === 'auth/too-many-requests' ) {
                console.log('Demasiados intentos fallidos, intente nuevamente mas tarde')
                dispatch( switchError( true ) );
                dispatch( setErrorCode( error.code ) );
            }
        });

        dispatch( disableConfirmBtn( false ) );

        
    }
}

export const startDeleteAccount = ( password, userdataID, journalID ) => {
    return async( dispatch ) => {

        dispatch( disableConfirmBtn( true ) );
        dispatch( switchError( false ) );
        dispatch( setErrorCode( null ) );

        console.log('Re-autenticando')
        
        const user = FirebaseAuth.currentUser;
        const uid = FirebaseAuth.currentUser.uid;
        const udid = userdataID;
        const jid = journalID;

        const credential = EmailAuthProvider.credential(
            user.email,
            password
        )
        reauthenticateWithCredential(user, credential).then(() => {
            
            // La re-autenticación fue exitosa, procede con la eliminación de la cuenta
            console.log('Re-autenticación exitosa!')

            dispatch( deleteUserDataFromDB( uid, udid ) )

            dispatch( deleteJournalFromDB( uid, jid ) )

            console.log('Eliminando cuenta del usuario...')
            deleteUser(user)
            .then(() => {
                // La cuenta del usuario ha sido eliminada exitosamente
                // Puedes realizar alguna acción adicional si es necesario
                console.log('Cuenta eliminada con éxito!')
            })
            .catch((error) => {
                // Ocurrió un error al eliminar la cuenta del usuario
                // Maneja el error de acuerdo a tus necesidades
                console.log(error)
            });

        }).catch((error) => {
            
            if ( error.code === 'auth/wrong-password' ) {
                console.log('Contraseña incorrecta');
                dispatch( switchError( true ) );
                dispatch( setErrorCode( error.code ) );
            }
            if ( error.code === 'auth/too-many-requests' ) {
                console.log('Demasiados intentos fallidos, intente nuevamente mas tarde')
                dispatch( switchError( true ) );
                dispatch( setErrorCode( error.code ) );
            }
        });

        dispatch( disableConfirmBtn( false ) );

        
    }
}

