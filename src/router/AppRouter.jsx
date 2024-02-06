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
import { ShareRoutes } from "../share/routes/ShareRoutes"
import { LandingRoutes } from "../landing/routes/LandingRoutes"
import { startSetSubscription } from "../store/subscription"

export const AppRouter = () => {

  const { isNutritionist } = useSelector( state => state.userInfo );
  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispatch( logout() );

      const { uid, email, displayName, photoURL } = user;

      dispatch( login({ uid, email, displayName, photoURL }) );

      dispatch( redirectNutritionistOrPatient( uid ) );

      dispatch( startSetSubscription( uid ) )

      // TODO: Chequear si la suscripción ha caducado aquí
      // TODO: Chequear si la suscripción ha caducado aquí
      // TODO: Chequear si la suscripción ha caducado aquí

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

          <Route path="share/*" element={
              <ShareRoutes/>
          }/>
          {/* <Route path="/*" element={
              <LandingRoutes/>
          }/> */}

          <Route path="/*" element={

            <LandingRoutes/>
            
          }/>
      </Routes>
    </>
  )
}
