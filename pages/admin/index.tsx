import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { meaning } from '@word-book';
import { AdminLayout } from '@layouts';
import { EmployeesContainer } from '@components';

import { AdminPageProps } from '@types';
import { parseCookies } from 'nookies';
import { Routes, Tokens } from '@constants';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { [Tokens.sig_in]: cookie } = parseCookies(context);

    if (!cookie) {
        return {
            redirect: {
                destination: Routes.home,
                permanent: false,
            },
        };
    }

    try {
        return {
            props: {},
        };
    } catch (err) {
        context.res.writeHead(302, { Location: Routes.home });
        context.res.end();
        return { props: {} };
    }
};

export default Employees;
