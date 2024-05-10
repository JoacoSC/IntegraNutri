import { AutoResizeTextarea, DeleteButton, SmallIconicButton } from "../../common"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startUpdatingFrequencyOfConsumption } from "../../store/frequencyOfConsumption";
import { TableHistory } from "./TableHistory";
import AddIcon from '../../../assets/imgs/journal/btn-add.svg';
import SaveIcon from '../../../assets/imgs/patient/save.svg';
import { FrequencyTableHistory } from "./FrequencyTableHistory";

export const FrequencyTable = ({ uid, patientID }) => {

    const dispatch = useDispatch();

    const initialState = {
        rows: [
          { name: 'Cereales', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Cereales Integrales', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Papas', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Legumbres frescas', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Legumbres secas', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'V.C General', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'V.C Libre', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Frutas', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Huevos', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Pescados', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Carnes A.G', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Carnes B. G', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Lácteos A.G', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Lácteos M.G', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Lácteos B.G', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Aceite', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'A.R Lípidos', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Azúcar', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Chatarra', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Bollería', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          { name: 'Agua', portion: '', neverOrAlmostNever: true, onceAMonth: false, twiceAMonth: false, threeTimesAMonth: false, onceAWeek: false, twiceAWeek: false, threeTimesAWeek: false, fourTimesAWeek: false, fiveTimesAWeek: false, sixTimesAWeek: false, onceADay: false, twiceADay: false, threeTimesADay: false, fourTimesADay: false, fiveOrMoreTimesADay: false },
          
        ],
        observations: '',
      };

    const [observations, setObservations] = useState(initialState.observations);
    const [rows, setRows] = useState(initialState.rows);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [viewing, setViewing] = useState({
        isViewing: false,
        viewingIndex: null,
    });
    const [adding, setAdding] = useState(true);
    const [editing, setEditing] = useState(false);

    const { frequencyTables } = useSelector((state) => state.frequencyOfConsumption);

    const handleChange = (e, index, type) => {
        if (!editing && !adding) {
          return;
        }
        // Si el tipo es 'observations', actualizar las observations directamente
        if (type === 'observations') {
            setObservations(e.target.value);
            return;
        }
        // Crear una copia del estado actual de las filas
        const newRows = [...rows];
      
        // Si el tipo de input es un número, actualizar el valor directamente
        if (type === 'portion' || type === 'name') {
          newRows[index][type] = e.target.value;
        } else {
          // Si el tipo de input es un botón de radio, establecer todos los valores de radio en la fila a false
            for (let key in newRows[index]) {
                if (key !== 'portion' && key !== 'frequencyType' && key !== 'name') {
                    newRows[index][key] = false;
                }
            }
        
            // Luego, establecer el valor del botón de radio seleccionado a true
            newRows[index][type] = true;
            // Actualizar el frequencyType
            newRows[index]['frequencyType'] = type;
        }
      
        // Actualizar el estado de las filas
        setRows(newRows);
      };
      
      const handleBlur = (e, index) => {
        const newRows = [...rows];
        const value = e.target.value.replace(',', '.');
        if (!isNaN(value)) {
          newRows[index]['portion'] = parseFloat(value).toFixed(1);
        }
        setRows(newRows);
      }
            
    const handleRemove = (index) => {
        if (!editing && !adding) {
            return;
        }
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };
    const handleNewTable = () => {
        setViewing({
            isViewing: false,
            viewingIndex: null,
        })
        setEditing(false);
        setAdding(true)
        // Establece una nueva fila vacía
        setRows(initialState.rows);
        setObservations(initialState.observations);
    };

    const handleUpdateFrequencyOfConsumption = ( rows ) => {
        // Transforma las filas para guardar solo el tipo de frecuencia y la porción
        const transformedRows = rows.map(row => {
          // Encuentra la clave que tiene el valor true
          const frequencyType = Object.keys(row).find(key => row[key] === true);
      
          // Retorna un nuevo objeto con la porción, el nombre y el tipo de frecuencia
          return { name: row.name, portion: row.portion, frequencyType };
        });
      
        // Agrega la tabla transformada y las observaciones al historial
        const newHistory = [{ rows: transformedRows, observations, timestamp: new Date().toISOString(), }, ...history];
      
        setHistory(newHistory);
        setHistoryIndex(0);
        // console.log('newHistory: ',newHistory)
        // Guarda los cambios en la base de datos y en el store de Redux
        dispatch( startUpdatingFrequencyOfConsumption( uid, patientID, newHistory ) )
      
        // Restablece el estado de las observaciones
        setObservations(initialState.observations);
      };
         

    useEffect(() => {
        
        if(frequencyTables){
            setHistory(frequencyTables);
            setHistoryIndex(0);
        }else{
            setRows(initialState.rows)
        }
    }, [frequencyTables])
    
    return (
        <div className="table-wrapper">
            <p className="table-title">Frecuencia de consumo</p>
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th rowSpan="2">Grupo de alimentos</th>
                        <th rowSpan="2">Porción</th>
                        <th rowSpan="2">Nunca o casi nunca</th>
                        <th colSpan="3">Al mes</th>
                        <th colSpan="6">A la semana</th>
                        <th colSpan="5">Al dia</th>
                        <th rowSpan="2"></th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5+</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td><input type="text" value={row.name} onChange={(e) => handleChange(e, index, 'name')} disabled={!editing && !adding} /></td>
                                <td><input type="text" value={row.portion} onChange={(e) => handleChange(e, index, 'portion')} onBlur={(e) => handleBlur(e, index)} disabled={!editing && !adding} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.neverOrAlmostNever} onChange={(e) => handleChange(e, index, 'neverOrAlmostNever')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.onceAMonth} onChange={(e) => handleChange(e, index, 'onceAMonth')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.twiceAMonth} onChange={(e) => handleChange(e, index, 'twiceAMonth')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.threeTimesAMonth} onChange={(e) => handleChange(e, index, 'threeTimesAMonth')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.onceAWeek} onChange={(e) => handleChange(e, index, 'onceAWeek')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.twiceAWeek} onChange={(e) => handleChange(e, index, 'twiceAWeek')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.threeTimesAWeek} onChange={(e) => handleChange(e, index, 'threeTimesAWeek')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.fourTimesAWeek} onChange={(e) => handleChange(e, index, 'fourTimesAWeek')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.fiveTimesAWeek} onChange={(e) => handleChange(e, index, 'fiveTimesAWeek')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.sixTimesAWeek} onChange={(e) => handleChange(e, index, 'sixTimesAWeek')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.onceADay} onChange={(e) => handleChange(e, index, 'onceADay')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.twiceADay} onChange={(e) => handleChange(e, index, 'twiceADay')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.threeTimesADay} onChange={(e) => handleChange(e, index, 'threeTimesADay')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.fourTimesADay} onChange={(e) => handleChange(e, index, 'fourTimesADay')} /></td>
                                <td><input type="radio" name={`frequencyRadio${index}`} checked={row.fiveOrMoreTimesADay} onChange={(e) => handleChange(e, index, 'fiveOrMoreTimesADay')} /></td>
                                <td>
                                    <div className="table-delete-row-btn">
                                        <DeleteButton text="Eliminar" onClick={() => handleRemove(index)} disabled={!editing && !adding} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="18">
                                <AutoResizeTextarea 
                                    value={observations} 
                                    onChange={(e) => handleChange(e, null, 'observations')} 
                                    disabled={!editing && !adding} 
                                    placeholder='Observaciones:' 
                                />
                            </td>
                        </tr>


                    
                    </tbody>
                </table>
                <div className="table-bottom-btn">
                    {!viewing.isViewing && <SmallIconicButton
                        text="Agregar fila"
                        onClick={() => setRows([...rows, { portion: '', neverOrAlmostNever: '', onceAMonth: '', twiceAMonth: '', threeTimesAMonth: '', onceAWeek: '', twiceAWeek: '', threeTimesAWeek: '', fourTimesAWeek: '', fiveTimesAWeek: '', sixTimesAWeek: '', onceADay: '', twiceADay: '', threeTimesADay: '', fourTimesADay: '', fiveOrMoreTimesADay: '' }])}
                        icon={ AddIcon }
                    />}
                    <SmallIconicButton
                        text="Nueva tabla"
                        onClick={ handleNewTable }
                        icon={ AddIcon }
                    />
                    {!viewing.isViewing && <SmallIconicButton
                        text="Guardar tabla"
                        onClick={ () => handleUpdateFrequencyOfConsumption( rows ) }
                        icon={ SaveIcon }
                        imgStyle={{
                            padding: '0.3rem 0 0.3rem 0.2rem'
                        }}
                    />}
                    <FrequencyTableHistory
                        uid={ uid }
                        patientID={ patientID }
                        history={history}
                        setHistory={setHistory}
                        setAdding={setAdding}
                        editing={editing}
                        setEditing={setEditing}
                        rows={rows}
                        setRows={setRows}
                        viewing={viewing}
                        setViewing={setViewing}
                        initialState={initialState}
                        observations={observations}
                        setObservations={setObservations}
                    />
                    
                </div>
            </div>
        </div>
  )
}
