import React from 'react';

import { Container, Headline, SignIn } from '@components';
import { Routes, Tokens } from '@constants';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { [Tokens.sig_in]: cookie } = parseCookies(context);

    if (cookie) {
        return {
            redirect: {
                destination: Routes.employees,
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export default Home;
