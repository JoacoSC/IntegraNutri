import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { startLogout } from "../../store/auth";


import { AppLayout } from "../../layout/AppLayout"
import { AdultEnergyRequirementsCalculator, FoodCalculatorTable, Footer, MealTimePortionDistribution } from "../../ui";
import { useState } from "react";
import { CalculatorsTabs, CalculatorsTabTrigger } from "../../ui/components";
import { PediatricEnergyRequirementsCalculator, CustomEnergyRequirementsCalculator } from "../../ui";
  
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
              <CalculatorsTabs>
                <CalculatorsTabTrigger
                  value="foodCalc"
                  label="Calculadora de Alimentos"
                  customTabClass="normal-tab"
                  customContentClass="normal-tab-content"
                >
                  <FoodCalculatorTable />
                </CalculatorsTabTrigger>
                <CalculatorsTabTrigger
                  value="portionDist"
                  label="Distribución de Porciones"
                  customTabClass="normal-tab"
                  customContentClass="normal-tab-content"
                >
                  <MealTimePortionDistribution />
                </CalculatorsTabTrigger>
                <CalculatorsTabTrigger
                  value="pediatricCalc"
                  label="Requerimientos Energéticos - Infantil"
                  customTabClass="custom-pediatric-tab"
                  customContentClass="custom-pediatric-content"
                >
                  <PediatricEnergyRequirementsCalculator />
                </CalculatorsTabTrigger>
                <CalculatorsTabTrigger
                  value="customCalc"
                  label="Requerimientos Energéticos - Personalizado"
                  customTabClass="custom-pediatric-tab"
                  customContentClass="custom-pediatric-content"
                >
                  <CustomEnergyRequirementsCalculator />
                </CalculatorsTabTrigger>
                <CalculatorsTabTrigger
                  value="adultCalc"
                  label="Requerimientos Energéticos - Adultos"
                  customTabClass="custom-adult-tab"
                  customContentClass="custom-adult-content"
                >
                  <AdultEnergyRequirementsCalculator />
                </CalculatorsTabTrigger>
              </CalculatorsTabs>
            </div>
          </div>
          <Footer />
        </AppLayout>
      );
}
