import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

export default function ProtegerRutas() {
    const auth = useAuth()

    return auth.isAtentificacion ? <Outlet /> : <Navigate to="/" />;

}