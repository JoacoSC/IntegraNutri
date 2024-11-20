import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { startLogout } from "../../store/auth";


import { AppLayout } from "../../layout/AppLayout"
import { FoodCalculatorTable, Footer, MealTimePortionDistribution, PediatricCalculator } from "../../ui";
import { useState } from "react";
import { Tabs, TabTrigger } from "../../ui/components";
  
export const CalculatorPage = () => {

    const dispatch = useDispatch();

    const { uid, displayName } = useSelector( state => state.auth )

    const tabClass = 'dark-tabs'

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    return (
        <AppLayout>
          <div className="main">
            <div className="logout-section">
              <button className="btn-logout" type="button" onClick={onLogout}>
                Cerrar sesión
              </button>
            </div>
            <div className="welcome-section">
              <h1>Nut. {displayName}</h1>
            </div>
            <div className="tabs-section" style={{marginTop: '50px'}}>
              <Tabs customClass={tabClass}>
                <TabTrigger value="foodCalc" label="Calculadora de Alimentos">
                  <FoodCalculatorTable />
                </TabTrigger>
                <TabTrigger value="portionDist" label="Distribución de Porciones">
                  <MealTimePortionDistribution />
                </TabTrigger>
                <TabTrigger value="pediatricCalc" label="Requerimientos Energéticos - Infantil">
                  <PediatricCalculator />
                </TabTrigger>
              </Tabs>
            </div>
          </div>
          <Footer />
        </AppLayout>
      );
}
