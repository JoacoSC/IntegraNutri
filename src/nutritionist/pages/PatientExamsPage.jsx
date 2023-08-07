import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";
import { AppLayout } from "../../layout/AppLayout"
import { ModalConfirmDeleteNutritionist } from "../../ui/ModalConfirmDeleteNutritionist";
import { Footer } from "../../ui";

export const PatientExamsPage = () => {

    const dispatch = useDispatch();

    const { uid, displayName } = useSelector( state => state.auth )

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    return (
        <AppLayout>
        
            <div className="main">
                <div className="logout">
                    <button className="btn-logout" type="button" onClick={ onLogout }>
                        Cerrar sesión
                    </button>
                </div>
                <div className="main-welcome">
                    <h1>Nut. { displayName }</h1>
                </div>
                <div className="sub-title">
                    <h3>Configuración</h3>
                    {/* <ModalBtn /> */}
                </div>
                <div className="settings-container">
                    <div className="settings-wrapper">
                        <div className="settings-item-container">
                            <p className="patient-exams-title">Exámenes de laboratorio</p>
                            <div className="exams-container">
                                <div className="exam-item">
                                    <p>Fecha de realización de batería de exámen</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Fecha de vigencia  de batería de exámen</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Hematocrito</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Hemoglobina (Hb)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Hemoglobina Glicosilada (HbA1c)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Glicemia capilar  (mg/dl )</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Fecha Glicemia en ayuno</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Glicemia en ayunas  (mg/dl)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Glicemia en ayunas entre 100 y 125 mg/dl</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Resultado prueba de sobrecarga a la glucosa (PTGO)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Microalbuminuria (mg/gr de creatininuria)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Albuminuria</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>RAC Relación Albumina/Creatinina</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Clasificación Albuminuria</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>VFG MDRD-4</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>VFG MDRD-4 variables IDMS con calibración</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Creatinina</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Urea</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Acido Urico  (mg/dl)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Orina Completa</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Obs. Orina Completa Alterada</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Colesterol Total (mg/dL)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Colesterol HDL (mg/dl)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Triglicéridos (mg/dL)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Colesterol LDL (mg/dl)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Sodio</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Potasio</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Cloro</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Hormona Tiroestimulante TSH (uIU/ml)</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>T4 (Pruebas tiroideas) LIBRE</p>
                                    <input type="text"/>
                                </div>
                                <div className="exam-item">
                                    <p>Otros </p>
                                    <input type="text"/>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </AppLayout>
    )
}
