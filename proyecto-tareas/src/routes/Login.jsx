import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';
import '../index.css'
import DefaultLayout from '../layout/DefaultLayout';

export default function Login() {

    const {username, setUsername} = useState("");
    const {password, stePassword} = useState("");

    const auth = useAuth();

    if (auth.isAtentificacion) {
        return <Navigate to='/dashboard'/>
    }

    return (

        <DefaultLayout>

            <div className="img">

                <div className="contenedor">

                    <div className="formulario">

                        <form>
                        
                            <h1 className='titulo-login'>Entrar</h1><br /><br />
                                            
                            <label className='nombre-usuario'>Nombre de Usuario:</label><br />
                            <input 
                                className='campo-usuario' 
                                type="text" 
                                value={username}
                                onChange = {(e) => setUsername(e.target.value)}
                                /><br /><br />
                                            
                            <label className='nombre-usuario'>Ingrese Contraseña:</label><br />
                            <input 
                                className='campo-usuario' 
                                type="password" 
                                value={password}
                                onChange = {(e) => stePassword(e.target.value)}
                                /><br /><br />

                            <center><button className='boton-login'>Ingresar</button></center>

                        </form>
                    </div>

                </div>

                

            </div>

        </DefaultLayout>
        
        
    );
     
}