import { useSelector } from 'react-redux';
import './components';
import { ModalAnthropometryResults } from './ModalAnthropometryResults';

export const CardAnthropometry = ({ commonProps }) => {

    const { biologicalSex } = useSelector((state) => state.currentPatient);

    const {
        anthropometry,
      } = commonProps
    
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
        const clampedValue = Math.min(Math.max(value, minInput), maxInput);
        return ((clampedValue - minInput) * (maxOutput - minOutput)) / (maxInput - minInput) + minOutput;
    };

    const scaledValues = {
        CCMINSALResult,
        CCMINSALRating,
        ICCResult: scaleValue(ICCResult, 0, 1.5, 0, 100),
        ICCRating,
        ICAResult: scaleValue(ICAResult, 0, 1, 0, 100),
        ICARating
    };

    const getTooltipStyle = (value, type) => {
        let minInput = 0;
        let maxInput = 0;

        if(type === 'ICC'){
            
            if( biologicalSex === 'Masculino'){
                minInput = 0.6;
                maxInput = 1.3;
            }else{
                minInput = 0.4;
                maxInput = 1.2;
            }

        }else{
            minInput = 0.3;
            maxInput = 0.7;
        }
        
        const leftPosition = scaleTooltipValue(value, minInput, maxInput, 1, 98);
        const translateValue = `${leftPosition}%`;

        return {
            left: translateValue,
            transform: `translateX(-${translateValue})`
        };
    };

    const getBackgroundGradientICC = () => {
        let greenEnd, yellowEnd;

        if (biologicalSex === 'Masculino') {
            greenEnd = scaleValue(0.86, 0.6, 1.3, 0, 100);
            yellowEnd = scaleValue(0.995, 0.6, 1.3, 0, 100);
        } else {
            greenEnd = scaleValue(0.75, 0.4, 1.2, 0, 100);
            yellowEnd = scaleValue(0.89, 0.4, 1.2, 0, 100);
        }

        return `linear-gradient(to right, #76b729 ${greenEnd}%, #ffd000 ${greenEnd}%, #ffd000 ${yellowEnd}%, #e32c2c ${yellowEnd}%)`;
    };

    const getBackgroundGradientICA = () => {
        const greenEnd = scaleValue(0.50, 0.3, 0.7, 0, 100);
        const yellowEnd = scaleValue(0.54, 0.3, 0.7, 0, 100);

        return `linear-gradient(to right, #76b729 ${greenEnd}%, #ffd000 ${greenEnd}%, #ffd000 ${yellowEnd}%, #e32c2c ${yellowEnd}%)`;
    };

    const getCutoffValues = (biologicalSex) => {
        if (biologicalSex === 'Masculino') {
            return {
                start: 0.6,
                firstCutoff: 0.85,
                secondCutoff: 1.0,
                end: 1.3,
            };
        } else {
            return {
                start: 0.4,
                firstCutoff: 0.75,
                secondCutoff: 0.9,
                end: 1.2
            };
        }
    };

    const getCutoffPositions = (biologicalSex) => {
        if (biologicalSex === 'Masculino') {
            return {
                firstCutoffPosition: '34%',
                secondCutoffPosition: '55.5%',
            };
        } else {
            return {
                firstCutoffPosition: '40%',
                secondCutoffPosition: '57%',
            };
        }
    };

    const cutoffValues = getCutoffValues(biologicalSex);
    const cutoffPositions = getCutoffPositions(biologicalSex);

    return (
        <div className='patient-secondary-card h-600'>
            <div className='patient-secondary-card-title'>
                Evaluación Antropométrica
            </div>
            <div className='patient-secondary-card-content'>
                <div className="anthropometry-skills">
                    <ul>
                        <li>
                            <h3>Circunferencia de Cintura</h3>
                            <h2>{CCMINSALResult} cm</h2>
                            <p>{CCMINSALRating}</p>
                        </li>
                        <li>
                            <h3>Índice Cintura Cadera</h3>
                            <p>Clasificación: {ICCRating}</p>
                            <div className='bar-container'>
                                <div className="tooltip-anthropometry" style={getTooltipStyle(ICCResult, 'ICC')}>
                                    {ICCResult}
                                </div>
                                <div className="bar">
                                    <div className="bar-background" style={{ background: getBackgroundGradientICC() }}></div>
                                </div>
                            </div>
                            <div className='bar-explanation-text-icc'>
                                <p className='bar-explanation-text-icc-start'>{cutoffValues.start}</p>
                                <p className='bar-explanation-text-icc-cutoff-first' style={{ left: cutoffPositions.firstCutoffPosition }}>
                                    {cutoffValues.firstCutoff}
                                </p>
                                <p className='bar-explanation-text-icc-cutoff-second' style={{ left: cutoffPositions.secondCutoffPosition }}>
                                    {cutoffValues.secondCutoff}
                                </p>
                                <p className='bar-explanation-text-icc-end'>{cutoffValues.end}</p>
                            </div>
                        </li>
                        <li>
                            <h3>Índice Cintura Altura</h3>
                            <p>Riesgo cardiovascular: {ICARating}</p>
                            <div className='bar-container'>
                                <div className="tooltip-anthropometry" style={getTooltipStyle(ICAResult, 'ICA')}>
                                    {ICAResult}
                                </div>
                                <div className="bar">
                                    <div className="bar-background" style={{ background: getBackgroundGradientICA() }}></div>
                                </div>
                            </div>
                            <div className='bar-explanation-text-ica'>
                                <p className='bar-explanation-text-ica-start'>0.3</p>
                                <p className='bar-explanation-text-ica-cutoff-first' style={{ left: '44%' }}>0.50</p>
                                <p className='bar-explanation-text-ica-cutoff-second' style={{ left: '56%' }}>0.55</p>
                                <p className='bar-explanation-text-ica-end'>0.7</p>
                            </div>
                        </li>
                            <div className='mt-1'></div>
                            <ModalAnthropometryResults commonProps={commonProps}/>
                    </ul>
                </div>
            </div>
        </div>
    );
}
