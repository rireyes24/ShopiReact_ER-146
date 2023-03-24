import React from 'react';
import { useNavigate } from 'react-router-dom';
import {DivLoginPage, DivLogin, FormLogin, InputText, InputLabel, ButtonLogin, Forgot, ButtonSingUp } from './styled';
import { useAuth } from '../../utils/authentication';



function LoginPage(){

    const navigate = useNavigate();
    const auth = useAuth();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = (event) => {
        event.preventDefault();
        auth.login({username, password});
    }

    function clickCreate(){
        navigate('/create');        
        console.log('Oki');
    }

    return(
        <>
            <DivLoginPage>    
                <h2>Login</h2>            

                <DivLogin>
                    <span className="login__logo-long"></span>

                    <FormLogin action="" className="login__form" onSubmit={login}>                    
                        <InputLabel htmlFor="user">Email address</InputLabel>            
                        <InputText 
                            id="user" 
                            type="text" 
                            placeholder="john" 
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                        
                        <InputLabel htmlFor="password">Password</InputLabel>           
                        <InputText 
                            id="password" 
                            type="password" 
                            placeholder="**********"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                                

                        <ButtonLogin type="submit">Log In</ButtonLogin>
                        <Forgot href="/" >Forgot my password</Forgot>
                    </FormLogin> 

                    <ButtonSingUp type="button" onClick={() => clickCreate()}>Create Account</ButtonSingUp>
                </DivLogin>            
            </DivLoginPage>
        </>
    );
}

export { LoginPage };