import { Navbar } from '../../ui';
import '../components/JournalPageStyles.css';

Navbar

export const JournalPage = () => {
  return (
    <div className="content-wrapper">

        { <Navbar /> }
        
        <div className="main">
            <div className="main-welcome">
                <h1>Dr. Galleguillos</h1>
                <p>Hola doctor, echemos un vistazo a sus pacientes de hoy</p>

            </div>
            <div className="next-consultation">
                <h3>Próximas consultas</h3>
                <button className="btn-spontaneous" type="button">Agregar espontáneo</button>
            </div>
            <div className="journal">
                <div className="month-days">
                    <div className="day">
                        <div className="day-ellipse">26</div>
                        <div className="day-label">Lun</div>
                    </div>
                    <div className="day">
                        <div className="day-ellipse">27</div>
                        <div className="day-label">Mar</div>
                    </div>
                    <div className="day">
                        <div className="day-ellipse">28</div>
                        <div className="day-label">Mie</div>
                    </div>
                    <div className="day">
                        <div className="day-ellipse">29</div>
                        <div className="day-label">Jue</div>
                    </div>
                    <div className="day">
                        <div className="day-ellipse">30</div>
                        <div className="day-label">Vie</div>
                    </div>
                </div>
                <div className="month-line"></div>
                <div className="today">
                    <div className="today-label">Martes 27</div>
                    <div className="patient-number">8 Pacientes</div>
                </div>
                <div className="today-consultations">
                    <div className="consultation">
                        <div className="time">
                            <div className="hour-wrapper">
                                <div className="hour">08:00</div>
                                <div className="ampm">AM</div>
                            </div>
                            <div className="hr"></div>
                        </div>
                        <div className="consultation-wrapper">
                            <div className="blank-space"></div>
                            <div className="consultation-info">
                                <div className="avatar">LA</div>
                                <div className="patient-info">
                                    <div className="patient-name">Logan Anderson</div>
                                    <div className="consultation-hour">8:00 - 9:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="consultation">
                        <div className="time">
                            <div className="hour-wrapper">
                                <div className="hour">09:00</div>
                                <div className="ampm">AM</div>
                            </div>
                            <div className="hr"></div>
                        </div>
                        <div className="consultation-wrapper">
                            <div className="blank-space"></div>
                            <div className="consultation-info">
                                <div className="avatar">LC</div>
                                <div className="patient-info">
                                    <div className="patient-name">Leonard Campbell</div>
                                    <div className="consultation-hour">9:00 - 9:30</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="consultation">
                        <div className="time">
                            <div className="hour-wrapper">
                                <div className="hour">10:00</div>
                                <div className="ampm">AM</div>
                            </div>
                            <div className="hr"></div>
                        </div>
                        <div className="consultation-wrapper">
                            <div className="blank-space"></div>
                            <div className="empty-consultation">
                                <div className="empty-consultation-text">
                                    Hora disponible
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="consultation">
                        <div className="time">
                            <div className="hour-wrapper">
                                <div className="hour">11:00</div>
                                <div className="ampm">AM</div>
                            </div>
                            <div className="hr"></div>
                        </div>
                        <div className="consultation-wrapper">
                            <div className="blank-space"></div>
                            <div className="consultation-info">
                                <div className="avatar">LA</div>
                                <div className="patient-info">
                                    <div className="patient-name">Logan Anderson</div>
                                    <div className="consultation-hour">11:00 - 12:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn-edit" type="button"></button>
            </div>
        </div>
    </div>
  )
}
