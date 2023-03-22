import React from 'react';
import {DivLoginPage, DivLogin, FormLogin, InputText, InputLabel, ButtonLogin, Forgot, ButtonSingUp } from './styled';


function LoginPage(){
    return(
        <>
            <DivLoginPage>                
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

                    <ButtonSingUp type="button">Sign up</ButtonSingUp>
                </DivLogin>            
            </DivLoginPage>
        </>
    );
}

export { LoginPage };