

export const PhysicalExam = ({ defaultPatient, onInputChange, isNutritionistStatus, onPhysical_examSubmit }) => {
    return (
        <form onSubmit={onPhysical_examSubmit}>
            <div className="accordion">
                <input
                className="accordion-input"
                type="checkbox"
                // defaultChecked
                name="patient_accordion"
                id="examen_fisico"
                />
                <label className="accordion-label" htmlFor="examen_fisico">
                Examen físico
                </label>
                <div className="accordion-content">
                <textarea
                    className="input-text-patient-page"
                    name="formPhysical_exam"
                    spellCheck={false}
                    defaultValue={defaultPatient.physical_exam}
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
