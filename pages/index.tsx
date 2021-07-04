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
            height="100vh"
        >
            <Headline />
            <SignIn />
        </Container>
    );
};

export default Home;
