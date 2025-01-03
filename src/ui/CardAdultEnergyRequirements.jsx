import { useSelector } from 'react-redux';
import './components';
import EnergyRequirementsIcon from '../../assets/imgs/patient/requerimientos_energeticos/energy_requirements_icon.svg'
import PerimetroCinturaForAvatar from '../../assets/imgs/patient/perimetro_cintura-for-avatar.svg'
import { useEffect, useState } from 'react';
import { fromUnixTime } from 'date-fns';

export const CardAdultEnergyRequirements = ({energyRequirements}) => {

    const {totalKcal = '', age = '', weight = '', kcalPerKg = '', factorial = '', method = '', hydrationMin = '', hydrationMax = ''} = energyRequirements;

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                {`Requerimiento energético - ${ method }`}
            </div>
            <div className='patient-secondary-card-content pl-2' style={{gap: '1.8rem'}}>
                <div className='perimetro-cintura-avatar-container flex-column'>
                    {
                        <img src={ EnergyRequirementsIcon } className='perimetro-cintura-avatar'/>
                        
                    }
                </div>
                <div className='perimetro-cefalico-value-container flex-column padding-left-none' style={{gap: '0.5rem'}}>
                    
                    <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Kcal al día:&nbsp;</b>{ totalKcal } kcal</p>
                    <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Agua al día:&nbsp;</b>{ hydrationMin } - { hydrationMax } ml</p>
                    <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Kcal/kg/día:&nbsp;</b>{ kcalPerKg } kcal</p>
                    {
                        (method === 'Factorial')
                        ?   <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Tipo de dieta:&nbsp;</b>{ factorial }</p>
                        :   null
                    }
                </div>
            </div>
        </div>
    )
}
