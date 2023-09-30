import '../index.css'
import DefaultLayout from '../layout/DefaultLayout';

export default function Registro() {
    return (

        <DefaultLayout>

            <div className="img">

                <div className="contenedor">

                    <div className="formulario-registro">

                        <form>
                        
                            <h1 className='titulo-login'>Registrate</h1><br />

                            <label className='nombre-usuario'>Ingrese su Nombre:</label>
                            <input className='campo-usuario' type="text" /><br />
                                            
                            <label className='nombre-usuario'>Nombre de Usuario:</label>
                            <input className='campo-usuario' type="text" /><br />

                            <label className='nombre-usuario'>Ingrese su Correo:</label>
                            <input className='campo-usuario' type="text" /><br />
                                            
                            <label className='nombre-usuario'>Ingrese Contraseña:</label>
                            <input className='campo-usuario' type="password" /><br />

                            <center><button className='boton-login'>Registrarme</button></center>

                        </form>
                    </div>

                </div>

                

            </div>

        </DefaultLayout>
        
        
    );
     
}