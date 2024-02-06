import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
// import { PatientPage } from "../pages/PatientPage"
// import { PatientPasswordReset } from "../pages/PatientPasswordReset";
import { LandingPage, PrivacyPage, ShoppingCartPage, TermsPage } from "../pages";
import { VoucherPage } from "../pages/VoucherPage";

export const LandingRoutes = () => {

  const { isNutritionistStatus } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  // console.log('6. Yo soy PatientRoutes, aquí llego despues de que me echen de NutritionistRoutes')

  // console.log( isNutritionistStatus )

  // if (isNutritionistStatus === true) {
  //  <Navigate to={ <PatientRoutes /> } />
  // }

  return (
    <Routes>
        <Route path="/home" element={ <LandingPage /> }/>
        <Route path="/cart" element={ <ShoppingCartPage /> }/>
        <Route path="/terms" element={ <TermsPage /> }/>
        <Route path="/privacy" element={ <PrivacyPage /> }/>
        <Route path="/voucher" element={ <VoucherPage /> }/>
        {/* <Route path="passwordReset" element={ <PatientPasswordReset /> }/> */}

        <Route path="/*" element={ <Navigate to="/home"/> }/>
    </Routes>
  )
}
