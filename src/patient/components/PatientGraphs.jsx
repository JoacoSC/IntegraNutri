// React imports
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

// Third-party library imports
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { useHandleChartsSwitch } from '../../hooks';

export const PatientGraphs = ({ ageForCalcs, setLastWeight, setLastStature, nutritionalCalification }) => {
    // React imports
    const { weight, stature, imc, biologicalSex } = useSelector((state) => state.currentPatient);

    // Local state variables
    const [hideChartButtons, setHideChartButtons] = useState({
      PEButton: false,
      TEButton: false,
      PTButton: false,
      IMCButton: false,
    });
    const [showHideReferenceChart, setShowHideReferenceChart] = useState(true);

    // Local constants
    const buttonStates = {
        "0-2": { PEButton: false, TEButton: false, PTButton: false, IMCButton: true },
        "2-5": { PEButton: false, TEButton: false, PTButton: false, IMCButton: true },
        "5-10": { PEButton: true, TEButton: false, PTButton: true, IMCButton: false },
        "10-19": { PEButton: true, TEButton: false, PTButton: true, IMCButton: false },
      };

    // Local hooks
    const { active, options, userData, referenceData, handleChartsSwitch } = useHandleChartsSwitch(
        biologicalSex,
        ageForCalcs,
        weight,
        stature,
        imc,
        setLastWeight,
        setLastStature
      );
    // Local functions
    const handleHideChartButtons = () => {
        let ageRange;
        if (ageForCalcs.y <= 2) {
          ageRange = "0-2";
        } else if (ageForCalcs.y < 5 || (ageForCalcs.y === 5 && ageForCalcs.m === 0)) {
          ageRange = "2-5";
        } else if (ageForCalcs.y <= 10) {
          ageRange = "5-10";
        } else {
          ageRange = "10-19";
        }
        setHideChartButtons(buttonStates[ageRange]);
    };
    const onShowHideReferenceChart = () => {
        setShowHideReferenceChart(!showHideReferenceChart);
    };
    // useEffect hooks
    useEffect(() => {
        handleHideChartButtons();
      }, [ageForCalcs]);
    return (
        <div className="accordion">
            <input
                className="accordion-input"
                type="checkbox"
                defaultChecked
                name="patient_accordion"
                id="graficos"
            />
            <label className="accordion-label" htmlFor="graficos">
                Gráficos
            </label>
            <div className="accordion-content">
                <div className="calification-wrapper">
                    <div className="calification-indicator-container">
                        <p className="calification-title">Calificación nutricional: </p>
                        <span className="calification-indicator-chart"><p>{ nutritionalCalification.weightCalificationResult }</p></span>
                    </div>
                    <div className="calification-indicator-container">
                        <p className="calification-title">Calificación estatural: </p>
                        <span className="calification-indicator-chart"><p>{ nutritionalCalification.statureCalificationResult }</p></span>
                    </div>

                </div>

                <div className="canvas">
                    <Line data={ userData } options={ options } />

                </div>
                
                <div className="charts-switch-container">

                    <div className="charts-switch-wrapper">
                        <button
                            className={ active === "1" ? "charts-switch-btn-active" : "charts-switch-btn" }
                            onClick={ handleChartsSwitch }
                            id={"1"}
                            hidden={ hideChartButtons.PEButton }
                        >
                            P/E
                        </button>

                        <button
                            className={ active === "2" ? "charts-switch-btn-active" : "charts-switch-btn" }
                            onClick={ handleChartsSwitch }
                            id={"2"}
                            hidden={ hideChartButtons.TEButton }
                        >
                            T/E
                        </button>
                        <button
                            className={ active === "3" ? "charts-switch-btn-active" : "charts-switch-btn" }
                            onClick={ handleChartsSwitch }
                            id={"3"}
                            hidden={ hideChartButtons.PTButton }
                        >
                            P/T
                        </button>
                        <button
                            className={ active === "4" ? "charts-switch-btn-active" : "charts-switch-btn" }
                            onClick={ handleChartsSwitch }
                            id={"4"}
                            hidden={ hideChartButtons.IMCButton }
                        >
                            IMC/E
                        </button>                                

                    </div>
                </div>

                <div className="show-reference-chart-container">
                    <button className="btn-show-reference-chart" type="button" onClick={ onShowHideReferenceChart }>
                        <span className="btn-reference-title">Mostrar/Ocultar referencia</span>
                    </button>                            
                </div>
                
                <div className="reference-chart-title-container">
                    <p className="reference-chart-title" hidden={ showHideReferenceChart }>Gráfico de referencia:</p>
                </div>
                <div className="canvas" hidden={ showHideReferenceChart }>
                    <Line data={ referenceData } options={ options } />

                </div>
            </div>
        </div>
    )
}
