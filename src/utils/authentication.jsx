import { useContext } from 'react';
import { ShopiContext } from '../context/AppContext';
import React, { createContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';


// Creamos un contexto de autenticación
export const AuthContext = createContext();


const users = [
    {
        username: 'eduardo',
        password: '123',
    },
    {
        username: 'marty',
        password: '123',
    },
];


// Creamos la función proveedora
const AuthProvider = ({ children }) => {

    
    const { setUserName } = useContext(ShopiContext);

    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();


    const login = ({username, password}) => {

        // Devuelve True si el username y el passoword son correctos
        const correctUser = users.some(item => item.username === username && item.password === password);
        
        if(correctUser){
            setUser({username, password});
            setUserName(username.toUpperCase());
            navigate('/');
            
        } else{
            console.log('User Not Found');
        }
    }
 
    const logout = () => {
        setUser(null);
    };

    const auth = { user, login, logout }

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


// Creamos un Componente Protegido
const AuthRouter = ({children}) => {
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to={"/login"} />
    }

    return children
};

export {AuthProvider, useAuth, AuthRouter};