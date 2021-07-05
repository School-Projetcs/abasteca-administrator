import React from 'react';

import { Container, Headline, SignIn } from '@components';

const Home: React.FC = () => {
    return (
        <Container
            bg="primary"
            display="flex"
            flexDirection={['column', 'row']}
            justifyContent="space-between"
            alignItems="center"
            minHeight="100vh"
            padding={['16px 0 0 0', '26px']}
        >
            <Headline />
            <SignIn />
        </Container>
    );
};

export default Home;
