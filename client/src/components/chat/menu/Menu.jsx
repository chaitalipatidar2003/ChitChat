import { useState } from 'react';

import { Box } from '@mui/material';

//components
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    const [text, setText] = useState('');
    
    return (
        <Box style={{background:'#C39DF2'}}>
            <Header />
            <Search setText={setText} />
            <Conversations text={text} />
        </Box>
    )
}

export default Menu;