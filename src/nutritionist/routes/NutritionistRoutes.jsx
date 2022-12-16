import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { PatientPage } from "../../patient/pages/PatientPage"
import { PatientRoutes } from "../../patient/routes/PatientRoutes";
import { logout } from "../../store/auth";
import { JournalPage, MyPatientsPage } from "../pages"

export const NutritionistRoutes = () => {

  const { isNutritionistStatus } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  console.log( isNutritionistStatus )

  if (isNutritionistStatus === false) return <PatientRoutes />;

  return (
    <>
      <Routes>
        <Route path="/journal" element={ <JournalPage /> }/>
        <Route path="/myPatients" element={ <MyPatientsPage /> }/>
        <Route path="/patient" element={ <PatientPage /> }/>

        <Route path="/*" element={ <Navigate to="journal"/> }/>
      </Routes>
    </>
  )
}
