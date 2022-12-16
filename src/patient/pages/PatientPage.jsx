import { useDispatch, useSelector } from "react-redux";

import queryString from "query-string";

import { AppLayout } from "../../layout/AppLayout";
import { startLogout } from "../../store/auth";
import { useLocation } from "react-router-dom";
import { startLoadingCurrentPatient, startLoadingPatientInfo } from "../../store/currentPatient";

export const PatientPage = () => {

    const { uid, displayName, photoURL } = useSelector( state => state.auth )

    const { patientName } = useSelector( state => state.currentPatient )

    const dispatch = useDispatch();

    const location = useLocation();

    const { patientID = '' } = queryString.parse( location.search );

    if( patientID === '' ){

        dispatch( startLoadingPatientInfo( displayName, photoURL ) )

    }else{

        dispatch( startLoadingCurrentPatient( uid, patientID ) )
    }
    
    const onLogout = () => {
            
        dispatch( startLogout() );
    
    }

    return (
        <>
            <AppLayout>

                <div className="main-content">
                    <div className="logout">
                        <button className="btn-logout" type="button" onClick={ onLogout }>
                            Cerrar sesión
                        </button>
                    </div>
                    <div className="patient-card">
                        <div className="patient-data">
                            <div className="patient-avatar">{ patientName.substring(0,2) }</div>
                            <div className="patient-name">{ patientName }</div>
                            <div className="patient-consultation-time">8:00 - 9:00</div>
                        </div>
                        <div className="patient-weight">
                            <div className="weight-icon"><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="none" viewBox="0 0 43 43">
                                <circle cx="21.5" cy="21.5" r="21.5" fill="#F5EEFF"/>
                                <path stroke="#452372" strokeLinecap="round" strokeWidth="2" d="M33.591 26.106a12 12 0 1 0-23.182 0M22 11v2.667m-8.485.847L15.4 16.4m15.085-1.886L28.6 16.4m4.991 9.705-2.576-.69m-20.606.69 2.576-.69"/>
                                <path stroke="#927CB0" strokeWidth="2" d="M24.717 22.618c.485 1.04-.204 2.388-1.54 3.01-1.334.622-2.81.284-3.294-.756-.553-1.186-2.143-7.956-2.964-11.532-.12-.522.547-.833.87-.405 2.212 2.927 6.375 8.497 6.928 9.683Z"/>
                            </svg></div>
                            <div className="weight-title">Peso</div>
                            <div className="weight">
                                <div className="weight-value">8.3</div>
                                <div className="weight-kg">Kg</div>
                            </div>
                        </div>
                        <div className="patient-stature">
                            <div className="stature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="none" viewBox="0 0 43 43">
                                <circle cx="21.5" cy="21.5" r="21.5" fill="#FFF3F1"/>
                                <path fill="#FF8976" d="m18 12-.707-.707.707-.707.707.707L18 12Zm1 15a1 1 0 1 1-2 0h2Zm-6.707-10.707 5-5 1.414 1.414-5 5-1.414-1.414Zm6.414-5 5 5-1.414 1.414-5-5 1.414-1.414ZM19 12v15h-2V12h2Zm7 20-.707.707.707.707.707-.707L26 32Zm1-15a1 1 0 1 0-2 0h2Zm-6.707 10.707 5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM27 32V17h-2v15h2Z"/>
                            </svg></div>
                            <div className="stature-title">Talla</div>
                            <div className="stature">
                                <div className="stature-value">65</div>
                                <div className="stature-cm">Cm</div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-container">
                        <div className="left-container">
                            <div className="accordion">
                                <input className="accordion-input" type="checkbox" name="patient_accordion" id="anamnesis"/>
                                <label className="accordion-label" htmlFor="anamnesis">Anamnesis</label>
                                <div className="accordion-content">
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore quis repellendus veniam unde sit, laboriosam, perspiciatis ullam voluptate, dolor tempore. Quisquam, numquam? Vero nesciunt dignissimos possimus laborum accusantium veniam maxime, delectus assumenda aspernatur, illo unde modi optio quia non magni consequatur reprehenderit eveniet ad! Eveniet consectetur minima aperiam corporis maxime perspiciatis, velit similique fugit quasi, est quaerat consequatur qui laborum deleniti eos necessitatibus quas reiciendis quibusdam nam aut excepturi repellat aliquam obcaecati voluptatum? Veniam, provident consequuntur itaque recusandae ad dicta facere quam culpa molestiae vel corporis nesciunt, exercitationem corrupti repellendus cum rerum perferendis eaque distinctio tenetur quibusdam! Eius, voluptates.
                                    </p>
                                </div>
                            </div>
                            <div className="accordion">
                                <input className="accordion-input" type="checkbox" name="patient_accordion" id="examen_fisico"/>
                                <label className="accordion-label" htmlFor="examen_fisico">Examen físico</label>
                                <div className="accordion-content">
                                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione at praesentium sed rerum voluptatibus quo aut aspernatur temporibus corrupti eos consequuntur quidem nam quisquam esse dolor, illo tenetur libero repudiandae nulla, recusandae autem. Molestias quam saepe officia dolor nulla eos, eaque aliquam quaerat adipisci recusandae inventore sit maxime possimus asperiores quas omnis debitis non accusamus. Laborum, aspernatur numquam obcaecati tempora quo, assumenda minima, nostrum dolorum eveniet quasi optio quae blanditiis ducimus. Voluptatibus aut aperiam quis quasi ipsum perferendis sapiente nulla itaque ex architecto cum labore, reiciendis libero quibusdam illo reprehenderit impedit placeat provident. Pariatur in blanditiis ipsam quidem, qui ipsa! Rem earum asperiores quae magnam delectus, pariatur inventore voluptate tenetur similique a porro placeat quo, praesentium sapiente voluptatem rerum. Recusandae modi debitis repellendus expedita labore excepturi laborum temporibus natus! Odio magnam reprehenderit harum! Consectetur suscipit nihil non repellendus ipsam assumenda, voluptate, optio sed iure qui enim molestias sunt incidunt dolorum?
                                    </p>
                                </div>
                            </div>
                            <div className="accordion">
                                <input className="accordion-input" type="checkbox" name="patient_accordion" id="diagnostico"/>
                                <label className="accordion-label" htmlFor="diagnostico">Diagnóstico</label>
                                <div className="accordion-content">
                                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quod fuga porro iusto, quis sunt fugit rerum reprehenderit? Porro, odit!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right-container">
                            <div className="accordion">
                                <input className="accordion-input" type="checkbox" name="patient_accordion" id="indicaciones"/>
                                <label className="accordion-label" htmlFor="indicaciones">Indicaciones</label>
                                <div className="accordion-content">
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi temporibus doloremque enim ipsam 
                                        consectetur tempore voluptates! Eius numquam voluptates reprehenderit harum ea a esse animi explicabo sapiente,
                                        recusandae quis fugiat error dolores sequi quisquam in, dolore provident veritatis voluptatem ullam repellat,
                                        beatae unde? Molestiae quibusdam a aliquid voluptates quo exercitationem.
                                    </p>
                                </div>
                            </div>
                            <div className="accordion">
                                <input className="accordion-input" type="checkbox" name="patient_accordion" id="graficos"/>
                                <label className="accordion-label" htmlFor="graficos">Gráficos</label>
                                <div className="accordion-content">
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi temporibus doloremque enim ipsam 
                                        consectetur tempore voluptates! Eius numquam voluptates reprehenderit harum ea a esse animi explicabo sapiente,
                                        recusandae quis fugiat error dolores sequi quisquam in, dolore provident veritatis voluptatem ullam repellat,
                                        beatae unde? Molestiae quibusdam a aliquid voluptates quo exercitationem.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </AppLayout>
            
        </>
        

    )
}
