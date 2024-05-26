
import { Box, styled, Typography, Divider } from '@mui/material';

import { emptyChatImage } from '../../../constants/data';

const Component = styled(Box)`
    background:#6C618E;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;

const Image = styled('img')({
    marginTop: 100,
    width: 400,
    borderRadius: '50%'
})

const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 500;
    color: #fff;
    margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
    font-size: 16px;
    color: #f0f0f0;
    font-weight: 450;
    font-family: inherit;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;

const EmptyChat = () => {

    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="empty" />
                <Title>ChitChat Web</Title>
                <SubTitle>Now send and receive messages seamlessly across all your devices.</SubTitle>
                <StyledDivider />

            </Container>
        </Component>
    )
}

export default EmptyChat;