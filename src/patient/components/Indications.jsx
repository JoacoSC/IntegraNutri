import React from 'react'

export const Indications = ({ defaultPatient, onInputChange, isNutritionistStatus, onIndicationsSubmit }) => {
    return (
        <form onSubmit={onIndicationsSubmit}>
            <div className="accordion">
                <input
                className="accordion-input"
                type="checkbox"
                // defaultChecked
                name="patient_accordion"
                id="indicaciones"
                />
                <label className="accordion-label" htmlFor="indicaciones">
                Indicaciones
                </label>
                <div className="accordion-content">
                <textarea
                    className="input-text-patient-page"
                    name="formIndications"
                    spellCheck={false}
                    defaultValue={defaultPatient.indications}
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
