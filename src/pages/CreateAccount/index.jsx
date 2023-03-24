import React from 'react';
import {DivLoginPage, DivLogin, FormLogin, InputText, InputLabel, ButtonLogin } from './styled';

function CreateAccount(){
    return(
        <>
            <DivLoginPage>
                

                <DivLogin>
                    <h2>CREATE ACCOUNT</h2>

                    <FormLogin action="" class="login__form">                    
                        <InputLabel for="name">Name</InputLabel>            
                        <InputText id="name" type="text" placeholder="John" />
                        
                        <InputLabel for="email">Email</InputLabel>           
                        <InputText id="email" type="email" placeholder="example2023@gmail.com" />

                        <InputLabel for="password">Password</InputLabel>           
                        <InputText id="password" type="password" placeholder="**********" />

                        <InputLabel for="confirmPassword">Confirm your password</InputLabel>           
                        <InputText id="confirmPassword" type="password" placeholder="**********" />                       
                
                    </FormLogin> 

                    <ButtonLogin type="button">Create</ButtonLogin>
                </DivLogin>            
            </DivLoginPage>
        </>
    );
}

export { CreateAccount }