import Head from 'next/head';
import { AdminLayout } from '@layouts';
import { Container } from '@components';

import { AdminPageProps } from './types';
import { meaning } from '@word-book';

const Employees: AdminPageProps = () => {
    return (
        <>
            <Head>
                <title>{meaning('pages.employees')}</title>
            </Head>
            <Container>
                <h2>Welcome to employees</h2>
            </Container>
        </>
    );
};

Employees.layout = AdminLayout;

export default Employees;
