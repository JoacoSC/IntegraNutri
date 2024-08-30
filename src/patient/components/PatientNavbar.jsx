// React imports
import { useSelector } from "react-redux";

// Third-party library imports
import { add, format, fromUnixTime } from "date-fns";

// Component imports
import { Dropdown } from "../../ui";

export const PatientNavbar = ({ patientObject, commonProps }) => {
    
    // React imports
    const { isNutritionistStatus } = useSelector(state => state.auth);
    const { nextConsultation } = useSelector((state) => state.currentPatient);
    const { consultationHours, consultationMinutes } = useSelector( state => state.journal )

    return (
        <div className="patient-navbar">
            <div className="patient-consultation-time-container">
                <div className="patient-consultation-time">
                    <b>
                        Siguiente consulta:
                    </b>
                    {nextConsultation !== null
                        ? 
                        " " +
                        format(fromUnixTime(nextConsultation), "dd/MMM/yyyy") +
                        " de " +
                        format(fromUnixTime(nextConsultation), "hh:mm") +
                        " a " +
                        format(
                            add(fromUnixTime(nextConsultation), {
                            hours: consultationHours,
                            minutes: consultationMinutes,
                            }),
                            "hh:mm"
                        )
                        : " No hay horas agendadas"}
                </div>                               
            </div>
            {
                (isNutritionistStatus)
                ?   <Dropdown
                        patientObject={ patientObject }
                        commonProps={ commonProps }
                    />
                :   null
            }
            
        </div>
    )
}
