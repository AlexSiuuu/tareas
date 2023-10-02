import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';
import '../index.css'
import DefaultLayout from '../layout/DefaultLayout';

export default function Registro() {

    const {name, steName} = useState("");
    const {username, steUsername} = useState("");
    const {email, steEmail} = useState("");
    const {password, stePassword} = useState("");

    const auth = useAuth();

    if (auth.isAtentificacion) {
        return <Navigate to='/dashboard'/>
    }

    return (

        <DefaultLayout>

            <div className="img">

                <div className="contenedor">

                    <div className="formulario-registro">

                        <form>
                        
                            <h1 className='titulo-login'>Registrate</h1><br />

                            <label className='nombre-usuario'>Ingrese su Nombre:</label>
                            <input 
                                className='campo-usuario' 
                                value={name} 
                                type="text"
                                onChange = {(e) => steName(e.target.value)}  
                            /><br />
                                            
                            <label className='nombre-usuario'>Nombre de Usuario:</label>
                            <input
                                className='campo-usuario' 
                                value={username} 
                                type="text" 
                                onChange = {(e) => steUsername(e.target.value)} 
                                /><br />

                            <label className='nombre-usuario'>Ingrese su Correo:</label>
                            <input 
                                className='campo-usuario' 
                                value={email} 
                                type="text" 
                                onChange = {(e) => steEmail(e.target.value)} 
                                /><br />
                                            
                            <label className='nombre-usuario'>Ingrese Contraseña:</label>
                            <input 
                                className='campo-usuario' 
                                value={password} 
                                type="password" 
                                onChange = {(e) => stePassword(e.target.value)} 
                                /><br />

                            <center><button className='boton-login'>Registrarme</button></center>

                        </form>
                    </div>

                </div>

                

            </div>

        </DefaultLayout>
        
        
    );
     
}