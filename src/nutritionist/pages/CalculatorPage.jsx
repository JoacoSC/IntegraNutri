import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { startLogout } from "../../store/auth";


import { AppLayout } from "../../layout/AppLayout"
import { AdultCustomEnergyRequirementsCalculator, AdultEnergyRequirementsCalculator, FoodCalculatorTable, Footer, HeightEstimationCalculator, MealTimePortionDistribution } from "../../ui";
import { useEffect, useState } from "react";
import { CalculatorsTabs, CalculatorsTabTrigger } from "../../ui/components";
import { PediatricEnergyRequirementsCalculator, CustomEnergyRequirementsCalculator } from "../../ui";
import { startLoadingMyPatients } from "../../store/patients";
import { CalculatorSelector } from "../../ui/components";
  
export const CalculatorPage = () => {

    const dispatch = useDispatch();

    const [selectedCalculator, setSelectedCalculator] = useState("foodCalc");

    const { uid, displayName } = useSelector( state => state.auth )

    const tabClass = 'dark-tabs'

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    const renderCalculator = () => {
      switch (selectedCalculator) {
        case "foodCalc":
          return <FoodCalculatorTable />;
        case "portionDist":
          return <MealTimePortionDistribution />;
        case "pediatricCalc":
          return <PediatricEnergyRequirementsCalculator />;
        case "customCalc":
          return <CustomEnergyRequirementsCalculator />;
        case "adultCalc":
          return <AdultEnergyRequirementsCalculator />;
        case "adultCustomCalc":
          return <AdultCustomEnergyRequirementsCalculator />;
        case "heightEstimation":
          return <HeightEstimationCalculator />;
        default:
          return <FoodCalculatorTable />;
      }
    };

    useEffect(() => {
      dispatch ( startLoadingMyPatients( uid ) );
    }, []);

    return (
      <AppLayout>
        <div className="main">
          <div className="logout-section">
            <button className="btn-logout" type="button" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
          <div className="welcome-section">
            <h1 className="text-4xl custom-font-bold leading-tight my-4">Nut. {displayName}</h1>
          </div>
          <div className="calculator-container" style={{marginTop: '3rem'}}>
            <div className="calculator-selector">
              <CalculatorSelector
                selectedCalculator={selectedCalculator}
                onSelectCalculator={setSelectedCalculator}
              />
            </div>
            <div className="calculator-content" style={{maxWidth: '70%', minWidth: '50%'}}>{renderCalculator()}</div>
          </div>
        </div>
        <Footer />
      </AppLayout>
      );
}
