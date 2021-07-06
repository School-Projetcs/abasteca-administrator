import Head from 'next/head';
import { Container } from '@components';
import { AdminLayout } from '@layouts';

import { AdminPageProps } from './types';
import { meaning } from '@word-book';

const Register: AdminPageProps = () => {
    return (
        <>
            <Head>
                <title>{meaning('pages.register')}</title>
            </Head>
            <Container>
                <h2>Welcome to register</h2>
            </Container>
        </>
    );
};

Register.layout = AdminLayout;

export default Register;
