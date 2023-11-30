import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
// import { PatientPage } from "../pages/PatientPage"
// import { PatientPasswordReset } from "../pages/PatientPasswordReset";
import { SharePage } from "../pages/SharePage";

export const ShareRoutes = () => {

  const { isNutritionistStatus } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  // console.log('6. Yo soy PatientRoutes, aquí llego despues de que me echen de NutritionistRoutes')

  // console.log( isNutritionistStatus )

  // if (isNutritionistStatus === true) {
  //  <Navigate to={ <PatientRoutes /> } />
  // }

  return (
    <Routes>
        <Route path="/" element={ <SharePage /> }/>
        {/* <Route path="passwordReset" element={ <PatientPasswordReset /> }/> */}

        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
