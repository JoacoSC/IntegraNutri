import { useSelector } from 'react-redux';
import './components';
import EnergyRequirementsIcon from '../../assets/imgs/patient/requerimientos_energeticos/energy_requirements_icon.svg'
import PerimetroCinturaForAvatar from '../../assets/imgs/patient/perimetro_cintura-for-avatar.svg'
import { useEffect, useState } from 'react';
import { fromUnixTime } from 'date-fns';

export const CardEnergyRequirements = ({energyRequirements}) => {

    const {totalKcal, age, weight, kcalPerKg} = energyRequirements;

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                Requerimiento energético
            </div>
            <div className='patient-secondary-card-content pl-2' style={{gap: '1rem'}}>
                <div className='perimetro-cintura-avatar-container flex-column'>
                    {
                        <img src={ EnergyRequirementsIcon } className='perimetro-cintura-avatar'/>
                        
                    }
                </div>
                <div className='perimetro-cefalico-value-container flex-column padding-left-none'>
                    <p className='perimetro-cefalico-value'><b>Kcal/kg/día:&nbsp;</b>{ kcalPerKg } kcal</p>
                    <p className='perimetro-cefalico-value'><b>Kcal al día:&nbsp;</b>{ totalKcal } kcal</p>
                </div>
            </div>
        </div>
    )
}
