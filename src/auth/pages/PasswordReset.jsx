import { useDispatch } from 'react-redux';
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks';
import { resetPassword } from '../../store/auth';

export const PasswordReset = () => {

    const dispatch = useDispatch();

    const { email, onInputChange } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log('first: ', email );
        dispatch( resetPassword( email ) );
    }

    return (
        <>
            <AuthLayout title="Restaurar contraseña" btnTitle="Iniciar Sesión" url="/auth/login">

                <form onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="password-reset-text">
                            A continuación, ingrese el correo electrónico con el que se registró en IntegraNutri,
                            y recibirá un e-mail con información para restaurar su contraseña.
                        </div>
                        
                        <div className="form-item">
                            <label className="input-label">Email</label>
                            <input className="input-text-style" type="email" name="email" onChange={ onInputChange }/>
                        </div>
                        
                        <div className="form-btn">
                            <button className="btn-submit" type="submit">
                                Enviar correo
                            </button>
                        </div>
                    </div>
                </form>
            </AuthLayout>
            
        </>
    )
}
