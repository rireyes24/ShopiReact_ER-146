import {DivLoginPage, H3Subtitle, H4Data, ButtonEdit} from './styled'

function AccountPage(){
    return(
        <>
            <DivLoginPage>
                <h1 class="title-account">My Account</h1>

                <H3Subtitle>Name</H3Subtitle>
                <H4Data >Eduardo</H4Data>

                <H3Subtitle>Email address</H3Subtitle>
                <H4Data>example@gmail.com</H4Data>

                <H3Subtitle>Password</H3Subtitle>
                <H4Data>*********</H4Data>
                <ButtonEdit>Edit</ButtonEdit>
            </DivLoginPage>
        </>        
    );
}

export { AccountPage };