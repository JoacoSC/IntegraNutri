import { useSelector } from 'react-redux';
import './components';
import AvatarMasculino from '../../assets/imgs/patient/avatar_perimetro_cefalico_masculino.svg'
import AvatarFemenino from '../../assets/imgs/patient/avatar_perimetro_cefalico_femenino.svg'
import PerimetroCefalicoForAvatar from '../../assets/imgs/patient/perimetro_cefalico-for-avatar.svg'

export const CardPerimetroCefalico = () => {

    const { perimetroCefalico, gender } = useSelector((state) => state.currentPatient);

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                Perímetro Cefálico
            </div>
            <div className='patient-secondary-card-content'>
                <div className='flex-column pl-2'>
                    <img src={ PerimetroCefalicoForAvatar } className='perimetro-cefalico-measure'/>
                    {
                        ( gender === 'Masculino' )
                        ?   <img src={ AvatarMasculino } className='perimetro-cefalico-avatar'/>
                        :   ( gender === 'Femenino' )
                            ?   <img src={ AvatarFemenino } className='perimetro-cefalico-avatar'/>
                            :   null
                    }

                </div>
                <div className='perimetro-cefalico-value-container flex-column pr-2'>
                    <p className='perimetro-cefalico-value'><b>Medición:&nbsp;</b>{ perimetroCefalico.PCeMedicion } cm</p>
                    <p className='perimetro-cefalico-value'><b>Registro:&nbsp;</b>{ perimetroCefalico.PCeRegistro }</p>
                    <p className='perimetro-cefalico-value'><b>Clasificación:&nbsp;</b>{ perimetroCefalico.PCeClasificacion }</p>
                </div>
                {/* <div className="alt-button-info" data-tooltip="Este resultado puede presentar una variabilidad de hasta +-8,5 cm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM13 17V11H11V17H13Z" fill="#6D22D0"/>
                    </svg>
                </div> */}
                
            </div>
            {/* <div className='patient-secondary-card-footer'>
                <p>Este resultado puede presentar una variabilidad de hasta +-8,5 cm</p>
            </div> */}

        </div>
    )
}
