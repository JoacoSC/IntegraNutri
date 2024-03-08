import { AutoResizeTextarea, DeleteButton, SmallIconicButton } from "../../common"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startUpdatingReminder24Hours } from "../../store/reminder24Hours";
import { TableHistory } from "./TableHistory";
import AddIcon from '../../../assets/imgs/journal/btn-add.svg';
import SaveIcon from '../../../assets/imgs/patient/save.svg';

export const ReminderTable = ({ uid, patientID }) => {

    const dispatch = useDispatch();

    const [rows, setRows] = useState([{ meal: '', time: '', place: '', food: '', ingredients: '' }]);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [viewing, setViewing] = useState({
        isViewing: false,
        viewingIndex: null,
    });
    const [adding, setAdding] = useState(true);
    const [editing, setEditing] = useState(false);

    const { reminderTables } = useSelector((state) => state.reminder24Hours);

    const handleChange = (event, index, field) => {
        const newRows = [...rows];
        newRows[index] = { ...newRows[index], [field]: event.target.value };
        setRows(newRows);
    };      

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
        setRows([{ meal: '', time: '', place: '', food: '', ingredients: '' }]);
    };

    const handleUpdateReminder24Hours = ( rows ) => {
        // Agrega la tabla al historial
        const newHistory = [{ rows, timestamp: new Date().toISOString() }, ...history];
        setHistory(newHistory);
        setHistoryIndex(0);
    
        // Guarda los cambios en la base de datos y en el store de Redux
        dispatch( startUpdatingReminder24Hours( uid, patientID, newHistory ) )
    };

    useEffect(() => {
        
        if(reminderTables){
            setHistory(reminderTables);
            setHistoryIndex(0);
        }else{
            setRows([{ meal: '', time: '', place: '', food: '', ingredients: '' }])
        }
    }, [reminderTables])

    return (
        <div className="table-wrapper">
            <p className="table-title">Recordatorio de 24 horas</p>
            <div className="table-container">
                <table className="table">
                    <tbody>

                        <tr>
                            <th>Tiempo de comida</th>
                            <th>Hora</th>
                            <th>Lugar</th>
                            <th>Preparación o alimentos</th>
                            <th>Ingredientes (medidas caseras o gramajes)</th>
                            <th></th>
                        </tr>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td><input value={row.meal} onChange={(e) => handleChange(e, index, 'meal')} disabled={!editing && !adding} /></td>
                                <td><input value={row.time} onChange={(e) => handleChange(e, index, 'time')} disabled={!editing && !adding} /></td>
                                <td><input value={row.place} onChange={(e) => handleChange(e, index, 'place')} disabled={!editing && !adding} /></td>
                                <td><AutoResizeTextarea value={row.food} onChange={(e) => handleChange(e, index, 'food')} disabled={!editing && !adding} /></td>
                                <td><AutoResizeTextarea value={row.ingredients} onChange={(e) => handleChange(e, index, 'ingredients')} disabled={!editing && !adding} /></td>
                                <td>
                                <div className="table-delete-row-btn">
                                    <DeleteButton text="Eliminar" onClick={() => handleRemove(index)} disabled={!editing && !adding} />
                                </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="table-bottom-btn">
                    {!viewing.isViewing && <SmallIconicButton
                        text="Agregar fila"
                        onClick={() => setRows([...rows, { meal: '', time: '', place: '', food: '', ingredients: '' }])}
                        icon={ AddIcon }
                    />}
                    <SmallIconicButton
                        text="Nueva tabla"
                        onClick={ handleNewTable }
                        icon={ AddIcon }
                    />
                    {!viewing.isViewing && <SmallIconicButton
                        text="Guardar tabla"
                        onClick={ () => handleUpdateReminder24Hours( rows ) }
                        icon={ SaveIcon }
                        imgStyle={{
                            padding: '0.3rem 0 0.3rem 0.2rem'
                        }}
                    />}
                    <TableHistory
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
                    />
                    
                </div>
            </div>
        </div>
  )
}
