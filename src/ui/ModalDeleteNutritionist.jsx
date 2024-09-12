import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startDeleteAccount } from '../store/auth';
import { ModalWrapper } from './components';

export const ModalDeleteNutritionist = () => {

    const [openModal, setOpenModal] = useState(false);

    const form = useRef();

    const dispatch = useDispatch();

    const { password, onInputChange } = useForm();

    const { disableConfirmBtn, error, errorCode } = useSelector( state => state.loginHelper )

    const { userdataID } = useSelector( state => state.userInfo )

    const { journalID } = useSelector( state => state.journal )

    const deleteAccountSubmit = ( event ) => {
        event.preventDefault();

        dispatch( startDeleteAccount( password, userdataID, journalID ) )

    }

    const cancelSubmit = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
    }

    return (
        <>
            
            <button className="btn-modal-alt" type="button" onClick={() => setOpenModal(true)}>
                Eliminar
            </button>
            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Eliminar cuenta"
                footerButtons={[
                    { text: "Eliminar", onClick: deleteAccountSubmit, className: "btn-modal-action-alt" }
                ]}
            >

                <form ref={form}>
                    <div className="modal-delete-nutritionist-container-form">

                        <p>Por favor, ingrese su contraseña a continuación: </p>

                        <div className="form-item">
                            <label className="input-label">Contraseña</label>
                            <input className="input-text-style" type="password" name="password" onChange={ onInputChange }/>
                        </div>

                        {
                            ( error )
                            ? <div className="login-error-message">
                            {
                                (errorCode === 'auth/wrong-password')
                                ?   'Contraseña incorrecta'
                                :   (errorCode === 'auth/too-many-requests')
                                    ?   'Demasiados intentos fallidos, intente nuevamente más tarde'
                                    :   null
                            }
                            </div>
                            : null
                        }

                        <div className="form-btn-group">
                            {/* <button className="btn-modal-alt" type="submit" onClick={ deleteAccountSubmit } disabled= { disableConfirmBtn }>
                                Eliminar
                            </button>
                            <button className="btn-modal-primary" onClick={ cancelSubmit }>
                                Cancelar
                            </button> */}
                        </div>
                    </div>
                </form>
            </ModalWrapper>
        </>
    )
}