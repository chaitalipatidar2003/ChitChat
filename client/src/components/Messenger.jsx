import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background-color:#240A34; /* Light blue-gray background */
`;

// const Header = styled(AppBar)`
//     background: #666465;
//     height: 64px;
//     box-shadow: none;
// `;
    
const LoginHeader = styled(AppBar)`
        background: linear-gradient(45deg, #251848, #3A1E60, #6D618F, #160C2A);
    height: 320px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <Box>
                    {/* <Header>
                        <Toolbar></Toolbar>
                    </Header> */}
                    <ChatDialog />
                </Box>
                :
                <>
                
                    <LoginHeader>
                    <h1 style={{color:'#fff', textAlign:'center',marginTop:'40px', fontSize:'2.rem'}}>ChitChat App</h1>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;

// import { useContext } from 'react';
// import { AppBar, Toolbar, styled, Box } from '@mui/material';

// import { AccountContext } from '../context/AccountProvider';

// //components
// import ChatDialog from './chat/ChatDialog';
// import LoginDialog from './account/LoginDialog';

// const Component = styled(Box)`
//     height: 100vh;
//     background: #DCDCDC;
// `;

// const Header = styled(AppBar)`
//     background-color: #00A884;
//     height: 125px;
//     box-shadow: none;
// `;
    
// const LoginHeader = styled(AppBar)`
//     background: #00bfa5;
//     height: 200px;
//     box-shadow: none;
// `;

// const Messenger = () => {
//     const { account } = useContext(AccountContext);
    
//     return (
//         <Component>
//             {
//                 account ? 
//                 <>
//                     <Header>
//                         <Toolbar></Toolbar>
//                     </Header>
//                     <ChatDialog />
//                 </>
//                 :
//                 <>
//                     <LoginHeader>
//                         <Toolbar></Toolbar>
//                     </LoginHeader>
//                     <LoginDialog />
//                 </>
//             }
//         </Component>
//     )
// }

// export default Messenger;