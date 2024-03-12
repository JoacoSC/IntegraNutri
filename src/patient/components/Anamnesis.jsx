
export const Anamnesis = ({ defaultPatient, onInputChange, isNutritionistStatus, onAnamnesisSubmit }) => {
    return (
        <form onSubmit={onAnamnesisSubmit}>
            <div className="accordion">
                <input
                className="accordion-input"
                type="checkbox"
                // defaultChecked
                name="patient_accordion"
                id="anamnesis"
                />
                <label className="accordion-label" htmlFor="anamnesis">
                Anamnesis
                </label>
                <div className="accordion-content">
                <textarea
                    className="input-text-patient-page"
                    name="formAnamnesis"
                    spellCheck={false}
                    defaultValue={defaultPatient.anamnesis}
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
