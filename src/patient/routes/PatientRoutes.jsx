import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom"
import { PatientPage } from "../pages/PatientPage"

export const PatientRoutes = () => {

  const { isNutritionistStatus } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  console.log( isNutritionistStatus )

  // if (isNutritionistStatus === true) {
  //  <Navigate to={ <PatientRoutes /> } />
  // }

  return (
    <Routes>
        <Route path="/*" element={ <PatientPage /> }/>
    </Routes>
  )
}
