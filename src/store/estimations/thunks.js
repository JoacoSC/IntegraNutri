// src/actions/patient.js
import { doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setHeightEstimation } from './estimationsSlice';


// Thunk para subir la estimación de estatura al paciente
export const startUploadingHeightEstimation = (uid, patientID, heightEstimation) => {
  return async (dispatch) => {
    try {

        console.log("uid", uid);
        console.log("patientID", patientID);
        console.log("heightEstimation", heightEstimation);

        // TODO: Arreglar esto
        // TODO: Arreglar esto
        // TODO: Arreglar esto
      
      const cleanData = { heightEstimation: {} };
      const baseRef = doc(FirebaseDB, `users/${uid}/patients/${patientID}`);
      await setDoc(baseRef, cleanData, { merge: true });  

      
      const payload = { heightEstimation };
      await setDoc(baseRef, payload, { merge: true });  
      
      // dispatch(setHeightEstimation({ patientID, heightEstimation }));  

      return 'Estimación de estatura adjuntada correctamente.';
    } catch (error) {
      console.error('Error subiendo estimación de estatura:', error);
      return 'Ocurrió un error al subir la estimación.';
    }
  };
};
