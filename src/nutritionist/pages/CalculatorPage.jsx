import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { startLogout } from "../../store/auth";


import { AppLayout } from "../../layout/AppLayout"
import { FoodCalculatorTable, Footer, MealTimePortionDistribution } from "../../ui";
import { useState } from "react";

const components = {
    'Calculadora de Alimentos': FoodCalculatorTable,
    'Distribución de porciones por tiempo de comida': MealTimePortionDistribution,
    // Agrega aquí más componentes según sea necesario
  };

  
export const CalculatorPage = () => {

    const [currentComponent, setCurrentComponent] = useState('Calculadora de Alimentos');

    const Component = components[currentComponent];

    const dispatch = useDispatch();

    const { uid, displayName } = useSelector( state => state.auth )

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    return (
        <AppLayout>
        
            <div className="main">
                <div className="logout-section">
                    <button className="btn-logout" type="button" onClick={ onLogout }>
                        Cerrar sesión
                    </button>
                </div>
                <div className="welcome-section">
                    <h1>Nut. { displayName }</h1>
                </div>
                <div className="component-display-section">
                    <div className="button-group">
                        {Object.keys(components).map(key => (
                            <button className="btn-lg" key={key} onClick={() => setCurrentComponent(key)}>
                                {key}
                            </button>
                        ))}
                    </div>
                    <Component/>
                </div>
            </div>
            <Footer/>
        </AppLayout>
    )
}
