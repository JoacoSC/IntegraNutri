import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { PatientPage } from "../../patient/pages/PatientPage"
import { PatientRoutes } from "../../patient/routes/PatientRoutes";
import { CalculatorPage, HomePage, JournalPage, MyPatientsPage, SettingsPage } from "../pages"

export const NutritionistRoutes = () => {

  const { isNutritionistStatus } = useSelector( state => state.auth );

  if (isNutritionistStatus === false) return <PatientRoutes />;

  return (
    <>
      <Routes>
        <Route path="/journal" element={ <JournalPage /> }/>
        <Route path="/myPatients" element={ <MyPatientsPage /> }/>
        <Route path="/patient" element={ <PatientPage /> }/>
        <Route path="/settings" element={ <SettingsPage /> }/>
        <Route path="/calculator" element={ <CalculatorPage /> }/>
        <Route path="/home" element={ <HomePage /> }/>
        {/* <Route path="/patientExams" element={ <PatientExamsPage /> }/> */}

        <Route path="/*" element={ <Navigate to="home"/> }/>
      </Routes>
    </>
  )
}
