import { Route, Routes } from "react-router-dom"
import { PatientPage } from "../pages/PatientPage"

export const PatientRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={ <PatientPage /> }/>
    </Routes>
  )
}
