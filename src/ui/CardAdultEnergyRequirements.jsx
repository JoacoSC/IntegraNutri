import { useSelector } from 'react-redux';
// import './components';
import EnergyRequirementsIcon from '../../assets/imgs/patient/requerimientos_energeticos/energy_requirements_icon.svg'
import PerimetroCinturaForAvatar from '../../assets/imgs/patient/perimetro_cintura-for-avatar.svg'
import { useEffect, useState } from 'react';
import { fromUnixTime } from 'date-fns';
import { Doughnut, Pie } from 'react-chartjs-2';

import './components/CardEnergyRequirementsStyles.css';

export const CardAdultEnergyRequirements = ({energyRequirements}) => {

    const {totalKcal = '', age = '', weight = '', kcalPerKg = '', factorial = '', method = '', hydrationMin = '', hydrationMax = '', proteins = '', lipids = '', cho = ''} = energyRequirements;

    const data = {
        labels: ['Proteínas', 'Lípidos', 'Carbohidratos'],
        datasets: [
          {
            label: 'Porcentaje (%)',
            data: [proteins, lipids, cho],
            backgroundColor: [
              'rgba(245, 124, 11, 1)',
              'rgba(245, 210, 11, 1)',
              'rgba(239, 68, 68, 1)',
            ],
            borderColor: [
              'rgba(245, 124, 11, 1)',
              'rgba(245, 210, 11, 1)',
              'rgba(239, 68, 68, 1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
                'rgba(245, 124, 11, 1)',
                'rgba(245, 210, 11, 1)',
                'rgba(239, 68, 68, 1)',
            ],
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            enabled: true, // Enable tooltips
          },
        },
        cutout: '75%', // Adjust the cutout percentage
      };

      const calculateMacroGrams = (percentage, type) => {
        if (!totalKcal || !percentage) return 0;
        const divisor = type === 'lipids' ? 9 : 4;
        return ((totalKcal * (parseFloat(percentage) / 100)) / divisor).toFixed(1);
      };

    return (
        // <div className='patient-secondary-card'>
        //     <div className='patient-secondary-card-title'>
        //         {`Requerimiento energético - ${ method }`}
        //     </div>
        //     <div className='patient-secondary-card-content pl-2' style={{gap: '1.8rem'}}>
        //         <div className='perimetro-cintura-avatar-container flex-column'>
        //             {
        //                 <img src={ EnergyRequirementsIcon } className='perimetro-cintura-avatar'/>
                        
        //             }
        //         </div>
        //         <div className='perimetro-cefalico-value-container flex-column padding-left-none' style={{gap: '0.5rem'}}>
                    
        //             <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Kcal al día:&nbsp;</b>{ totalKcal } kcal</p>
        //             <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Agua al día:&nbsp;</b>{ hydrationMin } - { hydrationMax } ml</p>
        //             <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Kcal/kg/día:&nbsp;</b>{ kcalPerKg } kcal</p>
        //             {
        //                 (method === 'Factorial')
        //                 ?   <p className='perimetro-cefalico-value' style={{fontSize: '0.9rem'}}><b>Tipo de dieta:&nbsp;</b>{ factorial }</p>
        //                 :   null
        //             }
        //         </div>
        //     </div>
        // </div>
        
        <div className="card-energy-requirements-container">
            
            <div className="patient-secondary-card-title flex justify-between items-center">
                <h2 className="card-energy-requirements-title">
                Requerimiento energético
                </h2>
                <div className="flex items-center gap-2">
                <span className="text-sm">Dieta {factorial}</span>
                </div>
            </div>
            <div className="p-6">
            <div className="grid grid-cols-5 gap-6">
                <div className="col-span-2">
                <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-800">
                        {totalKcal}
                    </span>
                    <span className="ml-2 text-slate-600">kcal/día</span>
                    </div>
                    <div className="mt-4">
                    <div className="flex justify-between text-sm" style={{marginBottom: '0.5rem'}}>
                        <span className="text-slate-500">Agua al día</span>
                        <span className="text-slate-700 font-medium">
                        {hydrationMin}-{hydrationMax} ml
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Factor por peso</span>
                        <span className="text-slate-700 font-medium">
                        {kcalPerKg} kcal/kg
                        </span>
                    </div>
                    </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 space-y-4">
                    <h3 className="text-sm text-slate-500" style={{marginBottom: '0.5rem'}}>
                    Método de cálculo
                    </h3>
                    <p className="text-slate-700 font-medium">{method}</p>
                </div>
                </div>
                <div className="col-span-3 bg-slate-50 rounded-lg p-6">
                <h3 className="text-slate-700 font-medium mb-4">
                    Distribución de macronutrientes
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="w-36 h-36 mx-auto">
                    <Doughnut data={data} options={options} />
                    </div>
                    <div className="flex flex-col justify-center space-y-4 gap-1">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-protein"></span>
                        <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Proteínas</span>
                            <span className="font-medium">{proteins}%</span>
                        </div>
                        <div className="text-sm text-slate-500">{calculateMacroGrams(proteins, 'proteins')}g</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-lipid"></span>
                        <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Lípidos</span>
                            <span className="font-medium">{lipids}%</span>
                        </div>
                        <div className="text-sm text-slate-500">{calculateMacroGrams(lipids, 'lipids')}g</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-cho"></span>
                        <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="text-slate-600">CHO</span>
                            <span className="font-medium">{cho}%</span>
                        </div>
                        <div className="text-sm text-slate-500">{calculateMacroGrams(cho, 'cho')}g</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    )
}
