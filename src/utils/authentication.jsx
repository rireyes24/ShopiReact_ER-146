import React, { createContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';


// Creamos un contexto de autenticación
export const AuthContext = createContext();


const users = [
    {
        username: 'eduardo',
        password: 'mandalorian',
    },
    {
        username: 'claribel',
        password: 'quimica',
    },
];


// Creamos la función proveedora
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);
    const navigate = useNavigate();


    const login = ({username, password}) => {

        // Devuelve True si el username y el passoword son correctos
        const correctUser = users.some(item => item.username === username && item.password === password);
        
        if(correctUser){
            setIsAuthenticated({username});
            navigate('/account');
        } else{
            console.log('User Not Found');
        }
    }
 
    const logout = () => {
        setIsAuthenticated(null);
    };

    const auth = { isAuthenticated, login, logout }

    return (
        <AuthContext.Provider value={auth}>
        {children}
        </AuthContext.Provider>
    );
};


// Creamos un componente de autenticación
const useAuth = () => {
    const auth = React.useContext(AuthContext);
    return auth;
};


// Creamos nuestro Router
const AuthRouter = ({children}) => {
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to={"/login"} />
    }

    return children
};

export {AuthProvider, useAuth, AuthRouter};