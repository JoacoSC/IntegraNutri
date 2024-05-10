import { useDispatch } from "react-redux"
import { updateCurrentPatientActualExamIndex } from "../store/currentPatient";

export const ShowExamsHistoryManager = ({ examsHistory }) => {

    const dispatch = useDispatch();

    const onExamHistoryItem = ( index ) => {
        
        // console.log('onExamHistoryItem: ', index)
        dispatch( updateCurrentPatientActualExamIndex( index ) )
    }

    return (
        <div className="exams-container flex-column-reverse">
        
            {examsHistory.map((exam, index) => (
                <div className="exam-item cursor-pointer" key={ index } onClick={ () => onExamHistoryItem( index ) }>
                    <p><b>Fecha de realización de batería de exámen</b></p>
                    <input
                        className="input-text-style input-date"
                        type="date"
                        name="exam_date_form"
                        value={ exam.exam_date }
                        readOnly
                    />
                    <span className="input-date-icon"></span>
                </div>
            ))}
            
        </div>
    )
}
