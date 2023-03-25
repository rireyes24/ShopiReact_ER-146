import React from 'react';
import { useNavigate } from 'react-router-dom';
import {DivLoginPage, DivLogin, FormLogin, InputText, InputLabel, ButtonLogin, Forgot, ButtonSingUp } from './styled';
import { useAuth } from '../../utils/authentication';



function LoginPage(){    
    const navigate = useNavigate();
    const auth = useAuth();  
    const form = React.useRef(null);


    const login = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('user'),
            password: formData.get('password'),
        }
        auth.login(data);
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

                    <FormLogin action="" className="login__form" ref={form}>                    
                        <InputLabel htmlFor="user">Email address</InputLabel>            
                        <InputText 
                            name="user" 
                            type="text" 
                            placeholder="john"                             
                        />
                        
                        <InputLabel htmlFor="password">Password</InputLabel>           
                        <InputText 
                            name="password" 
                            type="password" 
                            placeholder="**********"
                        />                                

                        <ButtonLogin type={'button'} onClick={login}>Log In</ButtonLogin>
                        <Forgot href="/" >Forgot my password</Forgot>
                    </FormLogin> 

                    <ButtonSingUp type="button" onClick={() => clickCreate()}>Create Account</ButtonSingUp>
                </DivLogin>            
            </DivLoginPage>
        </>
    );
}

export { LoginPage };