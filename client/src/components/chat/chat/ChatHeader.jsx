import { useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';
import { defaultProfilePicture } from '../../../constants/data';

const Header = styled(Box)`
    height: 48px;
    background: #251848;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    color:#D6D6D8;

`;
    
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%',
    marginTop: '6px'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
    color:#D6D6D8;
    margin-top:6px;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color:#D6D6D8;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatHeader = ({ person }) => {  

    const url = person.picture || defaultProfilePicture;
    
    const { activeUsers } = useContext(AccountContext);

    return (
        <Header>
            <Image src={url} alt="display picture" />     
            <Box style={{color:'#D6D6D8'}}>
                <Name>{person.name}</Name>
                <Status style={{color:'#D6D6D8'}}>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>    
            </Box>   
            <RightContainer>
                <Search />
                <MoreVert />    
            </RightContainer> 
        </Header>
    )
}

export default ChatHeader;


// import { useContext } from 'react';

// import { Box, Typography, styled } from '@mui/material';
// import { Search, MoreVert } from '@mui/icons-material';

// import { AccountContext } from '../../../context/AccountProvider';
// import { defaultProfilePicture } from '../../../constants/data';

// const Header = styled(Box)`
//     height: 44px;
//     background: #ededed;
//     display: flex;
//     padding: 8px 16px;
//     align-items: center;
// `;
    
// const Image = styled('img')({
//     width: 40,
//     height: 40,
//     objectFit: 'cover',
//     borderRadius: '50%'
// })

// const Name = styled(Typography)`
//     margin-left: 12px !important;
// `;

// const RightContainer = styled(Box)`
//     margin-left: auto;
//     & > svg {
//         padding: 8px;
//         font-size: 22px;
//         color: #000;
//     }
// `;

// const Status = styled(Typography)`
//     font-size: 12px !important;
//     color: rgb(0, 0, 0, 0.6);
//     margin-left: 12px !important;
// `;

// const ChatHeader = ({ person }) => {  

//     const url = person.picture || defaultProfilePicture;
    
//     const { activeUsers } = useContext(AccountContext);

//     return (
//         <Header>
//             <Image src={url} alt="display picture" />     
//             <Box>
//                 <Name>{person.name}</Name>
//                 <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>    
//             </Box>   
//             <RightContainer>
//                 <Search />
//                 <MoreVert />    
//             </RightContainer> 
//         </Header>
//     )
// }

// export default ChatHeader;