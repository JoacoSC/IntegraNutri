import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"

import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"

import { FirebaseAuth } from "../firebase/config"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { NutritionistRoutes } from "../nutritionist/routes/NutritionistRoutes"
import { PatientRoutes } from "../patient/routes/PatientRoutes"

import { login, logout, redirectNutritionistOrPatient } from "../store/auth"
import { startLoadingMyPatients } from "../store/patients"
import { startLoadingUserInfo } from "../store/userInfo"
import { startLoadingMyJournal } from "../store/journal"

export const AppRouter = () => {

  const { isLogged, uid } = useSelector( state => state.auth );
  const { isNutritionistStatus } = useSelector( state => state.auth );
  const dispatch = useDispatch();


  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispatch( logout() );

      const { uid, email, displayName } = user;
      
      dispatch( login({ uid, email, displayName }) );

      dispatch( redirectNutritionistOrPatient( uid ) );

      dispatch( startLoadingUserInfo( uid ) );

      dispatch ( startLoadingMyPatients( uid ) );

      dispatch ( startLoadingMyJournal( uid ) );

      // TODO: Aquí, después de cargar toda la información necesaria, debería poner algo como un checkingAuthentication(),
      // para aplicar una pantalla de carga que desaparezca cuando toda la informacion esté cargada apropiadamente en el store.
      // Debería actualizar la página de alguna forma, para aplicar los horarios corresponientes de la agenda 


    })

  }, [])

  return (
    <>
        <Routes>
          <Route path="auth/*" element={
            <PublicRoute>
              <AuthRoutes/>
            </PublicRoute>
          }/>

          <Route path="nutritionist/*" element={ 
            <PrivateRoute>
              <NutritionistRoutes />
            </PrivateRoute>
          }/>

          <Route path="patient/*" element={ 
            <PrivateRoute>
              <PatientRoutes />
            </PrivateRoute>
          }/>

          <Route path="/*" element={
            <PublicRoute>
              <AuthRoutes/>
            </PublicRoute>
          }/>
      </Routes>
    </>
  )
}
