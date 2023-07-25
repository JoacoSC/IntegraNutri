

export const ComunasSelect = ({ comunaSeleccionada, comunas, handleComunaSeleccionada }) => {

    return (

        <select className="select-style" name="city" value={comunaSeleccionada} onChange={handleComunaSeleccionada} required>
          {comunas.map((comuna) => (
            <option key={comuna} value={comuna}>
              {comuna}
            </option>
          ))}
        </select>

    )
}
