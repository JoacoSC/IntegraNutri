import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";
import { useForm } from "../hooks";
import { startUpdatingExamsHistory } from "../store/currentPatient";
import { SmallButton } from "../common";

// Third-party library imports
import { Chart as ChartJS } from "chart.js/auto";
import { Scatter } from "react-chartjs-2";

export const ModalAnthropometryResults = ({ commonProps }) => {
    
    const [openModal, setOpenModal] = useState(false);

    const [options, setOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false, // Oculta la leyenda
            },
            title: {
                display: true,
                text: 'Somatocarta',
            },
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: -9,
                max: 9,
                ticks: {
                  stepSize: 1,
                },
            },
            y: {
                type: 'linear',
                position: 'left',
                min: -10,
                max: 16,
                ticks: {
                  stepSize: 2,
                },
            },
        },
    });
    const [userData, setUserData] = useState({
        datasets: [{
            label: 'Somatocarta:    ',
            data: [],
            borderColor: '#FF0000',
            backgroundColor: '#FF0000',
        }]
    });

    const {
        biologicalSex,
        ageText,
    } = commonProps;

    const { anthropometry, weight, stature, imc } = useSelector( state => state.currentPatient )

    const {
        BrazoRelajadoCorregido,
        CCMINSALResult,
        CCMINSALRating,
        CircunferenciaCadera,
        CircunferenciaCintura,
        Ectomorfia,
        Endomorfia,
        ICCResult,
        ICCRating,
        ICAResult,
        ICARating,
        InputDiametroFemur,
        InputEtnia,
        InputPliegueTricipital,
        InputPliegueSubescapular,
        InputPliegueCrestailiaca,
        InputPliegueBicipital,
        InputPliegueSupraespinal,
        InputPliegueAbdominal,
        InputPliegueMuslo,
        InputPlieguePierna,
        InputPerimetroBrazoRelajado,
        InputPerimetroBrazoContraido,
        InputPerimetroPierna,
        InputPerimetroMuslo,
        InputDiametroMuneca,
        InputDiametroHumero,
        InputPerimetroCintura,
        InputPerimetroCadera,
        SomatocartaX,
        SomatocartaY,
        SomatocartaIP,
        Mesomorfia,
        MusloCorregido,
        PiernaCorregido,
        MGCarterKG,
        MGCarterPercent,
        MGFaulknerKG,
        MGFaulknerPercent,
        MMLeeKG,
        MMLeePercent,
        MRKG,
        MRPercent,
        MRV2KG,
        MRV2Percent,
        MOKG,
        MOPercent,
        Fecha,
        Edad,
    } = anthropometry;

    const statureLength = stature?.length;
    const Talla = statureLength > 0 ? stature[statureLength - 1].A : '';

    const weightLength = weight?.length;
    const Peso = weightLength > 0 ? weight[weightLength - 1].A : '';

    const IMCLength = imc?.length;
    const IMC = IMCLength > 0 ? imc[IMCLength - 1].A.toFixed(2) : '';

    const updateChart = () => {
        setUserData({
            datasets: [{
                label: 'Somatocarta: ',
                data: [{ x: SomatocartaX, y: SomatocartaY }],
                borderColor: '#FF0000',
                backgroundColor: '#FF0000',
            }]
        });
    }

    const onModalClose = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        updateChart();
    }, [SomatocartaX, SomatocartaY]);
    

    return (
        <>
            <SmallButton text="Más detalles" onClick={() => setOpenModal(true)} />

            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                    closeTimeoutMS={500}
                    isOpen={openModal}
                    ariaHideApp={false}
                    className="modal-perimetro-cefalico-container"
                >
                    <div className="modal-header">
                        <p>Evaluación Antropométrica</p>
                    </div>
                    <div className="btn-modal-close" onClick={onModalClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                        </svg>
                    </div>
                    {/* TODO: Actualizar aspecto de los modal. Disminuir tamaño del header, fijar header y footer, acortar scrollbar al contenido del modal sin header ni footer */}

                    <div className="modal-perimetro-cefalico-container-form">
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h2>Fecha de los datos:</h2>
                            </div>
                            <div className='modal-content-row-title'>
                                <h3>{Fecha}</h3>
                            </div>
                        </div>

                        {/* <div className='modal-chart-info-container'>
                            <div className='modal-chart-info'>
                                <b>Sexo Biológico: </b>{biologicalSex}
                            </div>
                            <div className='modal-chart-info'>
                                <b>Estatura: </b>
                                {Talla + 'cm'}
                            </div>
                        </div> */}
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h3>Datos del paciente</h3>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Género
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputGenero"  value={biologicalSex} readOnly/>
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Etnia
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputEtnia"  value={InputEtnia} readOnly/>
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Edad
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputEdad"  value={Edad} readOnly />
                                </div>

                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Peso
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPeso"  value={Peso + ' kg'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Talla
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputTalla" value={Talla + ' cm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        IMC
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputIMC" value={IMC} readOnly />
                                </div>
                            </div>

                        </div>
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h3>Medidas antropométricas ingresadas</h3>
                            </div>
                            <div className='modal-content-row-title'>
                                <h4>Pliegues</h4>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Tricipital
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueTricipital" placeholder='80' value={InputPliegueTricipital + ' mm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Subescapular
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueSubescapular" placeholder='80' value={InputPliegueSubescapular + ' mm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Crestailiaca
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueCrestailiaca" placeholder='80' value={InputPliegueCrestailiaca + ' mm'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Bicipital
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueBicipital" placeholder='90' value={InputPliegueBicipital + ' mm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Supraespinal
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueSupraespinal" placeholder='90' value={InputPliegueSupraespinal + ' mm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Abdominal
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueAbdominal" placeholder='90' value={InputPliegueAbdominal + ' mm'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input w-50">
                                    <label className="input-label">
                                        Muslo
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueMuslo" placeholder='90' value={InputPliegueMuslo + ' mm'} readOnly />
                                </div>
                                <div className="modal-content-row-input w-50">
                                    <label className="input-label">
                                        Pierna
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPlieguePierna" placeholder='90' value={InputPlieguePierna + ' mm'} readOnly />
                                </div>
                            </div>

                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h4>Perimetros</h4>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Brazo relajado
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroBrazoRelajado" placeholder='90' value={InputPerimetroBrazoRelajado + ' cm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Brazo contraído
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroBrazoContraido" placeholder='90' value={InputPerimetroBrazoContraido + ' cm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Pierna
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroPierna" placeholder='90' value={InputPerimetroPierna + ' cm'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Muslo
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroMuslo" placeholder='90' value={InputPerimetroMuslo + ' cm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Cintura
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroCintura" placeholder='90' value={InputPerimetroCintura + ' cm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Cadera
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroCadera" placeholder='90' value={InputPerimetroCadera + ' cm'} readOnly />
                                </div>
                            </div>
                            
                        </div>
                        
                        {/* <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Circunferencia de Cintura</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Medición (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CCOMSMedicion" placeholder='80'  readOnly/>
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Clasificación
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="CCOMSRating"  readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: OMS 2008
                            </label>
                        </div> */}
                        
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h4>Diámetros</h4>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Biestiloideo
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputDiametroMuneca" placeholder='90' value={InputDiametroMuneca + ' cm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Húmero
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputDiametroHumero" placeholder='90' value={InputDiametroHumero + ' cm'} readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Femur
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputDiametroFemur" placeholder='90' value={InputDiametroFemur + ' cm'} readOnly />
                                </div>
                            </div>
                        </div>
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h2>Resultados</h2>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Somatocarta</b>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        IP
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="SomatocartaIP" placeholder='80'  value={SomatocartaIP} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        X
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="SomatocartaX" placeholder='80'  value={SomatocartaX} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Y
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="SomatocartaY" placeholder='80'  value={SomatocartaY} readOnly />
                                </div>
                            </div>
                            <div className="canvas-anthropometry-container">
                                <div className="canvas-anthropometry">
                                    <Scatter data={userData} options={options} />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                    
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Endomorfia
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="Endomorfia"  value={Endomorfia} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Mesomorfia
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="Mesomorfia"  value={Mesomorfia} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Ectomorfia
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="Ectomorfia"  value={Ectomorfia} readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Perímetros corregidos</b>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Brazo relajado
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="BrazoRelajadoCorregido" placeholder='80'  value={BrazoRelajadoCorregido} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Muslo
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MusloCorregido" placeholder='80'  value={MusloCorregido} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Pierna
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="PiernaCorregido" placeholder='80'  value={PiernaCorregido} readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Composición corporal</b>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Grasa (Carter)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGCarterKG" placeholder='80'  value={MGCarterKG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGCarterPercent" placeholder='80' value={MGCarterPercent + ' %'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Muscular (Lee 2000)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeeKG" placeholder='80'  value={MMLeeKG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeePercent" placeholder='80' value={MMLeePercent + ' %'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Residual
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRKG" placeholder='80'  value={MRKG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRPercent" placeholder='80' value={MRPercent + ' %'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Ósea
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOKG" placeholder='80'  value={MOKG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOPercent" placeholder='80' value={MOPercent + ' %'} readOnly />
                                </div>
                            </div>
                            <hr></hr>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Grasa (Faulkner)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGFaulknerKG" placeholder='80'  value={MGFaulknerKG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGFaulknerPercent" placeholder='80' value={MGFaulknerPercent + ' %'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Muscular (Lee 2000)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeeKG" placeholder='80'  value={MMLeeKG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeePercent" placeholder='80' value={MMLeePercent + ' %'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Residual
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRV2KG" placeholder='80'  value={MRV2KG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRV2Percent" placeholder='80' value={MRV2Percent + ' %'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Ósea
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOKG" placeholder='80'  value={MOKG + ' kg'} readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOPercent" placeholder='80' value={MOPercent + ' %'} readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Circunferencia de Cintura</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Medición (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CCMINSALMedicion" placeholder='80'  value={CCMINSALResult + ' cm'} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Clasificación
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="CCMINSALRating"  value={CCMINSALRating} readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: MINSAL 2014
                            </label>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Índice Cintura-Cadera</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Circunferencia de cintura (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CinturaMedicion" placeholder='80'  value={InputPerimetroCintura + ' cm'} readOnly/>
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Circunferencia de cadera (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CaderaMedicion" placeholder='95'  value={InputPerimetroCadera + ' cm'} readOnly/>
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Resultado
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICCResult"  value={ICCResult} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Clasificación
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICCRating"  value={ICCRating} readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: GIROLAMI 2015
                            </label>
                        </div>
                        
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Índice Cintura-Altura</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Circunferencia de cintura (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CinturaMedicionKoch" placeholder='80'  value={InputPerimetroCintura + ' cm'} readOnly/>
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Estatura (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="Talla" placeholder='95'  value={Talla + ' cm'} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Resultado
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICAResult"  value={ICAResult} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Riesgo cardiovascular
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICARating"  value={ICARating} readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: Koch 2008
                            </label>
                        </div>
                        
                        <div className="form-btn">
                            
                        </div>
                    </div>
                </Modal>
            </CSSTransition>
        </>
    );
}
