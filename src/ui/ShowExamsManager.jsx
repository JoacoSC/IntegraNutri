
export const ShowExamsManager = ({ examsHistory }) => {
    return (
        <div className="exams-container">                        
            <div className="exam-item">
                <p><b>Fecha de realización de batería de exámen</b></p>
                <input
                    className="input-text-style input-date"
                    type="date"
                    name="exam_date_form"
                    value={ (examsHistory)
                            ? examsHistory.exam_date
                            : null }
                    readOnly
                />
                <span className="input-date-icon"></span>
            </div>
            <div className="exam-item">
                <p><b>Fecha de vigencia  de batería de exámen</b></p>
                <input
                    className="input-text-style input-date"
                    type="date"
                    name="exam_validity_date_form"
                    value={ (examsHistory)
                            ? examsHistory.exam_validity_date
                            : null }
                    readOnly
                />
                <span className="input-date-icon"></span>
            </div>
            <div className="exam-item">
                <p>Hematocrito</p>
                <input
                    type="text"
                    name="hematocrito_form"
                    value={ (examsHistory)
                            ? examsHistory.hematocrito
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Hemoglobina (Hb)</p>
                <input
                    type="text"
                    name="hemoglobina_form"
                    value={ (examsHistory)
                            ? examsHistory.hemoglobina
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Hemoglobina Glicosilada (HbA1c)</p>
                <input
                    type="text"
                    name="hemoglobina_glicosilada_form"
                    value={ (examsHistory)
                            ? examsHistory.hemoglobina_glicosilada
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Glicemia capilar  (mg/dl )</p>
                <input
                    type="text"
                    name="glicemia_capilar_form"
                    value={ (examsHistory)
                            ? examsHistory.glicemia_capilar
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Fecha Glicemia en ayuno</p>
                <input
                    type="date"
                    name="fecha_glicemia_form"
                    value={ (examsHistory)
                            ? examsHistory.fecha_glicemia
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Glicemia en ayunas  (mg/dl)</p>
                <input
                    type="text"
                    name="glicemia_ayunas_form"
                    value={ (examsHistory)
                            ? examsHistory.glicemia_ayunas
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Glicemia en ayunas entre 100 y 125 mg/dl</p>
                <input
                    type="text"
                    name="glicemia_ayunas_cien_form"
                    value={ (examsHistory)
                            ? examsHistory.glicemia_ayunas_cien
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Resultado prueba de sobrecarga a la glucosa (PTGO)</p>
                <input
                    type="text"
                    name="sobrecarga_glucosa_form"
                    value={ (examsHistory)
                            ? examsHistory.sobrecarga_glucosa
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Microalbuminuria (mg/gr de creatininuria)</p>
                <input
                    type="text"
                    name="microalbuminuria_form"
                    value={ (examsHistory)
                            ? examsHistory.microalbuminuria
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Albuminuria</p>
                <input
                    type="text"
                    name="albuminuria_form"
                    value={ (examsHistory)
                            ? examsHistory.albuminuria
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>RAC Relación Albumina/Creatinina</p>
                <input
                    type="text"
                    name="rac_form"
                    value={ (examsHistory)
                            ? examsHistory.rac
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Clasificación Albuminuria</p>
                <input
                    type="text"
                    name="clasificacion_albuminuria_form"
                    value={ (examsHistory)
                            ? examsHistory.clasificacion_albuminuria
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>VFG MDRD-4</p>
                <input
                    type="text"
                    name="vfg_form"
                    value={ (examsHistory)
                            ? examsHistory.vfg
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>VFG MDRD-4 variables IDMS con calibración</p>
                <input
                    type="text"
                    name="vfg_variables_form"
                    value={ (examsHistory)
                            ? examsHistory.vfg_variables
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Creatinina</p>
                <input
                    type="text"
                    name="creatinina_form"
                    value={ (examsHistory)
                            ? examsHistory.creatinina
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Urea</p>
                <input
                    type="text"
                    name="urea_form"
                    value={ (examsHistory)
                            ? examsHistory.urea
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Acido Urico  (mg/dl)</p>
                <input
                    type="text"
                    name="acido_urico_form"
                    value={ (examsHistory)
                            ? examsHistory.acido_urico
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Orina Completa</p>
                <input
                    type="text"
                    name="orina_completa_form"
                    value={ (examsHistory)
                            ? examsHistory.orina_completa
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Obs. Orina Completa Alterada</p>
                <input
                    type="text"
                    name="obs_orina_completa_alterada_form"
                    value={ (examsHistory)
                            ? examsHistory.obs_orina_completa_alterada
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Colesterol Total (mg/dL)</p>
                <input
                    type="text"
                    name="colesterol_total_form"
                    value={ (examsHistory)
                            ? examsHistory.colesterol_total
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Colesterol HDL (mg/dl)</p>
                <input
                    type="text"
                    name="colesterol_hdl_form"
                    value={ (examsHistory)
                            ? examsHistory.colesterol_hdl
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Triglicéridos (mg/dL)</p>
                <input
                    type="text"
                    name="trigliceridos_form"
                    value={ (examsHistory)
                            ? examsHistory.trigliceridos
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Colesterol LDL (mg/dl)</p>
                <input
                    type="text"
                    name="colesterol_ldl_form"
                    value={ (examsHistory)
                            ? examsHistory.colesterol_ldl
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Sodio</p>
                <input
                    type="text"
                    name="sodio_form"
                    value={ (examsHistory)
                            ? examsHistory.sodio
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Potasio</p>
                <input
                    type="text"
                    name="potasio_form"
                    value={ (examsHistory)
                            ? examsHistory.potasio
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Cloro</p>
                <input
                    type="text"
                    name="cloro_form"
                    value={ (examsHistory)
                            ? examsHistory.cloro
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>Hormona Tiroestimulante TSH (uIU/ml)</p>
                <input
                    type="text"
                    name="tsh_form"
                    value={ (examsHistory)
                            ? examsHistory.tsh
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-item">
                <p>T4 (Pruebas tiroideas) LIBRE</p>
                <input
                    type="text"
                    name="pruebas_tiroideas_form"
                    value={ (examsHistory)
                            ? examsHistory.pruebas_tiroideas
                            : null }
                    readOnly
                />
            </div>
            <div className="exam-other-item">
                <p>Otros </p>
            </div>
            <div className="exam-other-item">
                <textarea
                    type="text"
                    name="otros_form"
                    value={ (examsHistory)
                            ? examsHistory.otros
                            : null }
                    readOnly
                />
            </div>
                
            {/* <div className="exam-submit-btn-container">
                <button className="exam-submit-btn" type="submit">
                    Guardar nuevo examen
                </button>
            </div> */}
        </div>
    )
}
