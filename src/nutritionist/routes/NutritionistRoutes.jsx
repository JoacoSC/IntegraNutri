import { Navigate, Route, Routes } from "react-router-dom"
import { PatientPage } from "../../patient/pages/PatientPage"
import { JournalPage, MyPatientsPage } from "../pages"

export const NutritionistRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/journal" element={ <JournalPage /> }/>
        <Route path="/myPatients" element={ <MyPatientsPage /> }/>
        {/* <Route path="/patient" element={ <PatientPage /> }/> */}

        <Route path="/*" element={ <Navigate to="journal"/> }/>
      </Routes>
    </>
  )
}
