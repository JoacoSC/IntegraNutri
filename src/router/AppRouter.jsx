import { onAuthStateChanged } from "firebase/auth"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FirebaseAuth } from "../firebase/config"
import { NutritionistRoutes } from "../nutritionist/routes/NutritionistRoutes"
import { PatientRoutes } from "../patient/routes/PatientRoutes"
import { login, logout, redirectNutritionistOrPatient } from "../store/auth"
import { startLoadingUserInfo } from "../store/userInfo"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

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

      // dispatch(  ) TODO: aqui tengo que obtener la informacion del usuario actual y almacenarla en el store

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
