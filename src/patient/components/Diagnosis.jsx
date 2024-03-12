

export const Diagnosis = ({ defaultPatient, onInputChange, isNutritionistStatus, onDiagnosisSubmit }) => {
    return (
        <form onSubmit={onDiagnosisSubmit}>
            <div className="accordion">
                <input
                className="accordion-input"
                type="checkbox"
                // defaultChecked
                name="patient_accordion"
                id="diagnostico"
                />
                <label className="accordion-label" htmlFor="diagnostico">
                Diagnóstico
                </label>
                <div className="accordion-content">
                <textarea
                    className="input-text-patient-page h-50"
                    name="formDiagnosis"
                    spellCheck={false}
                    defaultValue={defaultPatient.diagnosis}
                    onChange={onInputChange}
                    readOnly={ !isNutritionistStatus }
                    placeholder="Escriba aquí :)"
                ></textarea>
                {   ( isNutritionistStatus )
                    ?   <button
                        className="btn-save-changes"
                        type="submit"
                        ></button>
                    : null
                }
                </div>
            </div>
        </form>
    )
}
