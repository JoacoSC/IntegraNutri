import { useEffect } from "react"
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

export const AppRouter = () => {

  const { isNutritionist } = useSelector( state => state.userInfo );
  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispatch( logout() );

      const { uid, email, displayName, photoURL } = user;

      dispatch( login({ uid, email, displayName, photoURL }) );

      dispatch( redirectNutritionistOrPatient( uid ) );

    })

  }, [isNutritionist])

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
