import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import editIcon from '../../../assets/imgs/journal/edit.svg';
import closeIcon from '../../../assets/imgs/journal/btn-close.svg';
import SaveIcon from '../../../assets/imgs/patient/save.svg';
import { TooltipButton } from "../../common";
import { ModalConfirm } from "../../ui/components";
import { startUpdatingFrequencyOfConsumption } from "../../store/frequencyOfConsumption";

export const FrequencyTableHistory = ({uid, patientID, history, setHistory, setAdding, editing, setEditing, rows, setRows, viewing, setViewing, initialState, observations, setObservations}) => {

    const dispatch = useDispatch();

    const [historyIndex, setHistoryIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    const tooltipMessageEdit = 'Editar';
    const tooltipMessageDelete = 'Eliminar tabla';
    const tooltipMessageSave = 'Guardar cambios';
    const modalHeaderText = 'Eliminar tabla';
    const modalBodyText = '¿Está seguro de eliminar esta tabla? Esta acción no se puede deshacer.';
    const modalButton1Text = 'Eliminar';
    const modalButton1Class = 'alt';
    const modalButton2Text = 'Cancelar';
    const modalButton2Class = 'primary';

    const handleOpenModal = (index) => {
        setDeleteIndex(index);
        setOpenModal(true);
        };

    const handleEdit = (index) => {
        setEditing(true);
        setAdding(false);
        setEditingIndex(index);
    };
          
      const handleDelete = () => {
        const newHistory = [...history];
        newHistory.splice(deleteIndex, 1);
        setHistory(newHistory);
        dispatch(startUpdatingFrequencyOfConsumption(uid, patientID, newHistory));
        setOpenModal(false);
        // setRows([{ portion: 0, neverOrAlmostNever: '', onceAMonth: '', twiceAMonth: '', threeTimesAMonth: '', onceAWeek: '', twiceAWeek: '', threeTimesAWeek: '', fourTimesAWeek: '', fiveTimesAWeek: '', sixTimesAWeek: '', onceADay: '', twiceADay: '', threeTimesADay: '', fourTimesADay: '', fiveOrMoreTimesADay: '' }]); // Limpia el estado de la tabla
    };
      
    const handleSaveEdit = () => {
        // Transforma las filas para guardar solo el tipo de frecuencia y la porción
        const transformedRows = rows.map(row => {
            // Encuentra la clave que tiene el valor true
            const frequencyType = Object.keys(row).find(key => row[key] === true);
            
            // Retorna un nuevo objeto con solo la porción y el tipo de frecuencia
            return { name: row.name, portion: row.portion, frequencyType };

        });
        const newHistory = [...history];
        newHistory[editingIndex] = { ...newHistory[editingIndex], rows: transformedRows, observations  };
        setHistory(newHistory);
        
        dispatch(startUpdatingFrequencyOfConsumption(uid, patientID, newHistory));
        setEditing(false);
        setEditingIndex(null);
    };

    const handleHistoryClick = (index) => {
        setViewing({
          isViewing: true,
          viewingIndex: index,
        });
        setAdding(false);
        setEditing(false);
      
        // Establece las observaciones en el estado
        setObservations(history[index].observations);
      };
      
    const handleNext = () => {
        setHistoryIndex(historyIndex + 3);
    };
    
    const handlePrev = () => {
        setHistoryIndex(historyIndex - 3);
    };

    // Función para formatear la fecha y la hora
    const formatTimestamp = (timestamp) => {
        let fecha = new Date(timestamp);
        let opcionesFecha = { day: '2-digit', month: '2-digit', year: 'numeric' };
        let opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
        let fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
        let horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);
    
        return { fecha: fechaFormateada, hora: horaFormateada };
    };

    useEffect(() => {
        if (viewing.isViewing) {
          // Verifica si el elemento del historial existe
          if (history[viewing.viewingIndex]) {
            const historyRows = history[viewing.viewingIndex].rows;
      
            // Transforma las filas del historial a la estructura original de la tabla
            const transformedRows = historyRows.map(row => {
              // Crea un objeto con todos los tipos de frecuencia en false
              const frequencyTypes = {
                neverOrAlmostNever: false,
                onceAMonth: false,
                twiceAMonth: false,
                threeTimesAMonth: false,
                onceAWeek: false,
                twiceAWeek: false,
                threeTimesAWeek: false,
                fourTimesAWeek: false,
                fiveTimesAWeek: false,
                sixTimesAMonth: false,
                onceADay: false,
                twiceADay: false,
                threeTimesADay: false,
                fourTimesADay: false,
                fiveOrMoreTimesADay: false,
              };
      
              // Establece el tipo de frecuencia correspondiente a true
              frequencyTypes[row.frequencyType] = true;
      
              // Retorna un nuevo objeto con la porción y los tipos de frecuencia
              return { name: row.name, portion: row.portion || '', ...frequencyTypes };
            });
      
            setRows(transformedRows);
          } else {
            // Aquí puedes manejar el caso cuando el elemento del historial no existe
            // Por ejemplo, puedes resetear el estado de 'viewing'
            setViewing({ isViewing: false, viewingIndex: null });
            setEditing(false);
            setAdding(true)
            // Establece una nueva fila vacía
            setRows(initialState.rows);
          }
        }
      }, [viewing.isViewing, viewing.viewingIndex, history]);
      

    useEffect(() => {
        // Comprueba si el historial está vacío
        if (history.length === 0) {
            // Si el historial está vacío, limpia el estado de la tabla
            setRows(initialState.rows);
            setObservations(initialState.observations)
        }
    }, [history]);
    
      

    return (
        <div className="table-history-container">
            {historyIndex > 0 && <button className="btn-sm" onClick={handlePrev}>Anterior</button>}
            {history.slice(historyIndex, historyIndex + 3).map((item, index) => {
            let { fecha, hora } = formatTimestamp(item.timestamp);
            let isViewing = viewing.isViewing;
            let viewingIndex = viewing.viewingIndex;
            return (
                <div key={historyIndex + index} className="table-history-buttons-container">
                    <button className="btn-sm" onClick={() => handleHistoryClick(historyIndex + index)}>
                        <p>{fecha}</p>
                        <p>{hora}</p>
                    </button>
                    <div className="table-history-buttons">
                        {   (isViewing && viewingIndex === historyIndex + index)
                            ?   <TooltipButton tooltipMessage={ tooltipMessageEdit }>
                                    <button className="table-history-edit-btn" onClick={() => handleEdit(historyIndex + index)}>
                                        <img src={ editIcon } className="table-history-btn-icon">
                                        </img>
                                    </button>
                                </TooltipButton>
                            : null
                        }
                        {   (isViewing && viewingIndex === historyIndex + index)
                            ?   <TooltipButton tooltipMessage={ tooltipMessageDelete }>
                                    <button className="table-history-delete-btn" onClick={() => handleOpenModal(historyIndex + index)}>
                                        <img src={ closeIcon } className="table-history-btn-icon">
                                        </img>
                                    </button>
                                </TooltipButton>
                            : null
                        }
                        {   (editing && viewingIndex === historyIndex + index)
                            ?   <TooltipButton tooltipMessage={ tooltipMessageSave }>
                                    <button className="table-history-save-btn" onClick={handleSaveEdit}>
                                        <img src={ SaveIcon }></img>
                                    </button>
                                </TooltipButton>
                            :   null
                        }
                    </div>
                </div>
            );
            })}
            {historyIndex + 3 < history.length && <button className="btn-sm" onClick={handleNext}>Siguiente</button>}
            <ModalConfirm
                modalHeaderText={modalHeaderText}
                modalBodyText={modalBodyText}
                modalButton1Text={modalButton1Text}
                modalButton1Class={modalButton1Class}
                modalButton2Text={modalButton2Text}
                modalButton2Class={modalButton2Class}
                openModal={openModal}
                setOpenModal={setOpenModal}
                onConfirm={handleDelete}
            />
        </div>
    )
}
