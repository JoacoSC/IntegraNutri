import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, PasswordReset, PatientActivationPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />
            <Route path="patientActivation" element={ <PatientActivationPage /> } />
            <Route path="passwordReset" element={ <PasswordReset /> } />

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />

        </Routes>
    </>
  )
}
