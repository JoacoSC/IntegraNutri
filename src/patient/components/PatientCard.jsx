// React imports
import { useSelector } from 'react-redux';

// Third-party library imports
import { format, fromUnixTime } from "date-fns";

// Asset imports
import Nutri_face_scarf from '../../../assets/imgs/navbar/Nutri_face_scarf.svg'

export const PatientCard = ({ patientName, biologicalSex, genderIdentity, unixBirthday, ageText, correctedAgeIsSet, weightLength, weight, statureLength, stature }) => {

    const { isNutritionistStatus } = useSelector(state => state.auth);

    return (
        <div className="patient-primary-card">
            <div className="patient-data">
                <div className="patient-primary-card-avatar">
                {/* {patientName.substring(0, 2)} */}
                <img src={ Nutri_face_scarf } className="patient-primary-card-avatar-img" alt="Icono IntegraNutri"/>
                </div>
                <div className="patient-name">{patientName}</div>
                {
                    ( genderIdentity && isNutritionistStatus )
                    ?   <div className="patient-biologicalSex">
                            <b>Sexo biológico: </b>
                            {
                                biologicalSex
                            }
                        </div>
                    :   null
                    
                }
                <div className="patient-biologicalSex">
                    <b>Género: </b>
                    {
                        ( genderIdentity )
                        ?   genderIdentity
                        :   biologicalSex
                    }
                </div>
                <div className="patient-biologicalSex"><b>Fecha de nacimiento: </b>
                {   (unixBirthday)
                    ?   format(fromUnixTime(unixBirthday), "dd/MMM/yyyy")
                    :   null
                    
                }</div>
                
            </div>
            <div className="patient-info-container">
                <div className="patient-info-first-half-container">
                    <div className="patient-age">
                        <div className="patient-parameter-title">
                            {/* <img src={ Age_icon } className="patient-parameter-icon" alt="Icono IntegraNutri"/> */}
                            <p>Edad</p>
                        </div>
                        <div className="patient-parameter-value-container">
                            <p className="patient-parameter-value">
                                {
                                    ( ageText ) ? ageText : 'No disponible'
                                }
                            </p>
                        </div>
                    </div>
                    <div className="patient-corrected-age">
                        <div className="patient-parameter-title">Edad Corregida</div>
                        <div className="patient-parameter-value-container">
                            {   ( correctedAgeIsSet === true )
                                ?   <p className="patient-parameter-value">
                                        {
                                            ( ageText ) ? ageText : 'No disponible'
                                        }
                                    </p>
                                :   <p className="patient-parameter-value">
                                        No aplica
                                    </p>
                            }
                        </div>
                    </div>  

                </div>
                <div className="patient-info-second-half-container">
                    <div className="patient-weight">
                        <div className="patient-parameter-title">
                            Peso
                        </div>
                        <div className="patient-parameter-value-container">
                            <p className= "patient-parameter-value"> {
                                (weightLength > 1)
                                ?   <>
                                        {weight[weightLength - 1].A}
                                        &nbsp;Kg
                                    </>
                                : 'No hay datos'
                            } </p>
                            
                            
                        </div>
                        
                    </div>
                    <div className="patient-stature">
                        <div className="patient-parameter-title">Talla</div>
                        <div className="patient-parameter-value-container">
                            <p className= "patient-parameter-value"> { 
                                (statureLength > 1)
                                ?   <>
                                    {stature[statureLength - 1].A}
                                    &nbsp;Cm

                                </> 
                                : 'No hay datos'
                            } </p>
                            
                        </div>
                    </div>

                </div>

            </div>

            <button type="submit" hidden></button>
        </div>
  )
}
