import React from 'react';
import { useNavigate } from 'react-router-dom';
import {DivLoginPage, DivLogin, FormLogin, InputText, InputLabel, ButtonLogin, Forgot, ButtonSingUp } from './styled';


function LoginPage(){

    const navigate = useNavigate();

    function clickCreate(){
        navigate('/create');        
        console.log('Oki');
    }

    return(
        <>
            <DivLoginPage>    
                <h2>Login</h2>            

                <DivLogin>
                    <span class="login__logo-long"></span>

                    <FormLogin action="" class="login__form">                    
                        <InputLabel for="mail">Email address</InputLabel>            
                        <InputText id="mail" type="email" placeholder="example2023@gmail.com" />
                        
                        <InputLabel for="password">Password</InputLabel>           
                        <InputText id="password" type="password" placeholder="**********" />
                                

                        <ButtonLogin type="button">Log In</ButtonLogin>
                        <Forgot href="/" >Forgot my password</Forgot>
                    </FormLogin> 

                    <ButtonSingUp type="button" onClick={() => clickCreate()}>Create Account</ButtonSingUp>
                </DivLogin>            
            </DivLoginPage>
        </>
    );
}

export { LoginPage };