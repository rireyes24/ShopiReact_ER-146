import React from 'react'
import {DivLoginPage, H3Subtitle, H4Data, ButtonEdit} from './styled';
import { useAuth } from '../../utils/authentication';
import { CreateContext } from '../../context/AppContext';

function AccountPage(){

    const {setUserName, userName} = React.useContext(CreateContext);
    const auth = useAuth();

    setUserName(auth.user.username);

    return(
        <>
            <DivLoginPage>
                <h1 className="title-account">My Account</h1>

                <H3Subtitle>Name</H3Subtitle>
                <H4Data>{userName}</H4Data>

                <H3Subtitle>Email address</H3Subtitle>
                <H4Data>example@gmail.com</H4Data>

                <H3Subtitle>Password</H3Subtitle>
                <H4Data>{auth.user.password}</H4Data>
                <ButtonEdit>Edit</ButtonEdit>
            </DivLoginPage>
        </>        
    );
}

export { AccountPage };

