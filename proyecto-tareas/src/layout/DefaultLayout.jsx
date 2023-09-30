import { Children } from "react";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function DefaultLayout ({children}) {
    return (
        <>
        
            <header>
                <nav className="navegador-principal">
                    <ul>
                        <li>
                            <Link className="link" to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className="link" to="/registro">Registro</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

        </>
    );
}