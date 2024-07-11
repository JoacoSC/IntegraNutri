import { useSelector } from 'react-redux';
import './components';

export const CardAnthropometry = () => {
    const { anthropometry } = useSelector((state) => state.currentPatient);

    const {
        CCMINSALResult = 90,
        CCMINSALRating = 90,
        ICCResult = 1.05,
        ICCRating = 45,
        ICAResult = 0.52,
        ICARating = 70
    } = anthropometry;

    const scaleValue = (value, minInput, maxInput, minOutput, maxOutput) => {
        return ((value - minInput) * (maxOutput - minOutput)) / (maxInput - minInput) + minOutput;
    };

    const scaleTooltipValue = (value, minInput, maxInput, minOutput, maxOutput) => {
        const clampedValue = Math.min(Math.max(value, minInput), maxInput); // Limitar el valor entre minInput y maxInput
        return ((clampedValue - minInput) * (maxOutput - minOutput)) / (maxInput - minInput) + minOutput;
    };

    const scaledValues = {
        CCMINSALResult,
        CCMINSALRating,
        ICCResult: scaleValue(ICCResult, 0, 1.5, 0, 100), // Escalar 0-1.5 a 0-100
        ICCRating,
        ICAResult: scaleValue(ICAResult, 0, 1, 0, 100), // Escalar 0-1 a 0-100
        ICARating
    };

    const getTooltipStyle = (value) => {
        const leftPosition = `${scaleTooltipValue(value, 0.6, 1.3, 1, 98)}%`;
        return {
            left: leftPosition,
            transform: `translateX(-${leftPosition})`
        };
    };

    return (
        <div className='patient-secondary-card h-400'>
            <div className='patient-secondary-card-title'>
                Evaluación Antropométrica
            </div>
            <div className='patient-secondary-card-content'>
                <div className="anthropometry-skills">
                    <ul>
                        {/* <li><h3>Circunferencia de Cintura (MINSAL)</h3>{CCMINSALResult}</li>
                        <li><h4>Clasificación:</h4>{CCMINSALRating}</li> */}
                        <li>
                            <h3>Índice Cintura Cadera</h3>
                            <div className='bar-container'>
                                {/* <div className="tooltip-anthropometry" style={getTooltipStyle(ICCResult)}>
                                    {ICCResult}
                                </div> */}
                                <div className="tooltip-anthropometry" style={getTooltipStyle(ICCResult)}>
                                    {ICCResult}
                                </div>
                                <div className="bar">
                                    <div className="bar-background"></div>
                                </div>

                            </div>
                        </li>
                        {/* <li><h4>Resultado:</h4>{ICCResult}</li>
                        <li><h4>Clasificación:</h4>{ICCRating}</li>
                        <li><h3>ICAResult</h3><span className="bar"><span className="bar-inner" style={{ width: '100%' }}></span></span></li>
                        <li><h4>Resultado:</h4>{ICAResult}</li>
                        <li><h4>Clasificación:</h4>{ICARating}</li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};
