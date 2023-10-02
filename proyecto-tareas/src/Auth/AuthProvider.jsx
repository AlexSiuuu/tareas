import { useContext, createContext, useState, useEffect } from "react";


const AuthContext = createContext({
    isAtentificacion: false,
});


// eslint-disable-next-line react/prop-types
export function AuthProvider ({children}) {

    const [isAtentificacion, setIsAuthentificacion] = useState(false);

    return (
        <AuthContext.Provider value={{isAtentificacion}}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = ( ) => useContext(AuthContext);