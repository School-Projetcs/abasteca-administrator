import Head from 'next/head';
import { RegisterContainer } from '@components';
import { AdminLayout } from '@layouts';

import { AdminPageProps } from '@types';
import { meaning } from '@word-book';

const Register: AdminPageProps = () => {
    return (
        <>
            <Head>
                <title>{meaning('pages.register.name')}</title>
            </Head>
            <RegisterContainer />
        </>
    );
};

Register.layout = AdminLayout;

export default Register;
