import { useSelector } from 'react-redux';
import './components';
import AvatarMasculino from '../../assets/imgs/patient/avatar_masculino.svg'
import AvatarFemenino from '../../assets/imgs/patient/avatar_femenino.svg'
import TallaDianaForAvatar from '../../assets/imgs/patient/talla_diana-for-avatar.svg'
import { Tooltip } from '../common';

export const CardTallaDiana = () => {

    const { biologicalSex, tallaDiana } = useSelector((state) => state.currentPatient);

    const tooltipMessage = 'Este resultado puede presentar una variabilidad de hasta +-8,5 cm';

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                Talla Diana
            </div>
            <div className='patient-secondary-card-content'>
                {
                    ( biologicalSex === 'Masculino' )
                    ?   <img src={ AvatarMasculino } className='talla-diana-avatar'/>
                    :   ( biologicalSex === 'Femenino' )
                        ?   <img src={ AvatarFemenino } className='talla-diana-avatar'/>
                        :   null
                }
                
                <img src={ TallaDianaForAvatar } className='talla-diana-measure'/>
                
                <p className='talla-diana-value custom-mr-05'><b>Medición:&nbsp;</b>{ tallaDiana } cm</p>

                <Tooltip tooltipMessage = { tooltipMessage }/>
            </div>
            {/* <div className='patient-secondary-card-footer'>
                <p>Este resultado puede presentar una variabilidad de hasta +-8,5 cm</p>
            </div> */}

        </div>
    )
}
