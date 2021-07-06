import Head from 'next/head';
import { AdminLayout } from '@layouts';
import { EmployeesContainer } from '@components';

import { AdminPageProps } from './types';
import { meaning } from '@word-book';

const Employees: AdminPageProps = () => {
    return (
        <>
            <Head>
                <title>{meaning('pages.employees')}</title>
            </Head>
            <EmployeesContainer />
        </>
    );
};

Employees.layout = AdminLayout;

export default Employees;
