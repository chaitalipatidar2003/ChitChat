


import { useContext } from 'react';

import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { addUser } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';
import { qrCodeImage } from '../../constants/data';

const Component = styled(Box)`
    display: flex; 
    height:100%,
    color:#D6D6D8
    
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
    height:100%
`;

const QRCOde = styled('img')({
    margin: '100px 10px 0 50px',
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #0E2954;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '22%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden',
    color: '#182952'
}

const LoginDialog = () => {

    const { setAccount, showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(decoded);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };

    return (
        <Dialog
            open={true}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
            <Component style={{ background: '#FFC96F', height:'100%' }}>
                <Container>
                    <Title>To use <b>ChitChat</b> on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open ChitChat on your device.</ListItem>
                        <ListItem>2. Click on the "Login with Google" button below.</ListItem>
                        <ListItem>3. You will be redirected to Google's login page.</ListItem>
                        <ListItem>4. Sign in with your Google account credentials.</ListItem>
                        <ListItem>5. Grant permission to access your account information.</ListItem>
                        <ListItem>6. Once logged in, you'll be redirected back to ChitChat <br/> and can start using the app.</ListItem>
                    </StyledList>

                </Container>
                <Box style={{ position: 'relative' }}>
                    <QRCOde src={qrCodeImage} alt="QR Code" />
                    <Box style={{ position: 'absolute', background: '#FFC94A', top: '35%' ,left:'5%', transform: 'translateX(25%) translateY(-25%)' }}>
                        {showloginButton ?
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            /> : null}
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;