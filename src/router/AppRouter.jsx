import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { NutritionistRoutes } from "../nutritionist/routes/NutritionistRoutes"
import { PatientRoutes } from "../patient/routes/PatientRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
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
