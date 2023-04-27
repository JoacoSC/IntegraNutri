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
  const { isNutritionist } = useSelector( state => state.userInfo );
  const dispatch = useDispatch();

  const { isNutritionistSelector } = useSelector( state => state.loginHelper )


  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispatch( logout() );

      const { uid, email, displayName, photoURL } = user;

      dispatch( login({ uid, email, displayName, photoURL }) );

      dispatch( redirectNutritionistOrPatient( uid ) );

      dispatch( startLoadingUserInfo( uid ) );

      dispatch ( startLoadingMyPatients( uid ) );

      // if( isNutritionist === isNutritionistSelector ){

      // dispatch( login({ uid, email, displayName, photoURL }) );

      // dispatch( redirectNutritionistOrPatient( uid ) );

      // dispatch( startLoadingUserInfo( uid ) );

      // dispatch ( startLoadingMyPatients( uid ) );

      // }else{

      //   dispatch( startLogout() );
      //   console.log('Usuario no encontrado, verifique la selección de "Soy nutricionista" o "Soy Paciente"')
      // }
      
      // dispatch( login({ uid, email, displayName, photoURL }) );

      // dispatch( redirectNutritionistOrPatient( uid ) );

      // dispatch( startLoadingUserInfo( uid ) );

      // dispatch ( startLoadingMyPatients( uid ) );

      // ESTE DISPATCH NO VA

      // dispatch ( startLoadingMyJournal( uid ) );
      
      // ESTE DISPATCH NO VA

    })

  }, [isNutritionist])

  // console.log('1. Estoy en AppRouter.jsx')

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
