import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";
import { AppLayout } from "../../layout/AppLayout"
import { ModalConfirmDeleteNutritionist } from "../../ui/ModalConfirmDeleteNutritionist";
import { Footer } from "../../ui";

export const SettingsPage = () => {

    const dispatch = useDispatch();

    const { uid, displayName } = useSelector( state => state.auth )

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    return (
        <AppLayout>
        
            <div className="main">
                <div className="logout-section">
                    <button className="btn-logout" type="button" onClick={ onLogout }>
                        Cerrar sesión
                    </button>
                </div>
                <div className="welcome-section">
                    <h1 className="text-4xl custom-font-bold leading-tight my-4">Nut. { displayName }</h1>
                </div>
                <div className="settings-container">
                    <div className="settings-wrapper">
                        <div className="settings-item-container">
                            <p className="settings-item-title">Cuenta</p>
                            <div className="settings-options-container">
                                <div className="settings-option-info">
                                    <p className="settings-option-title">Eliminar cuenta</p>
                                    <p className="settings-option-description">Esta acción eliminará su cuenta, por favor asegúrese de su decisión.</p>
                                </div>
                                <div className="settings-option-action">
                                    <ModalConfirmDeleteNutritionist/>
                                </div>
                                {/* <div className="hr"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </AppLayout>
    )
}
