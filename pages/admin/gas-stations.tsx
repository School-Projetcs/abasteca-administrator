import Head from 'next/head';
import { Container } from '@components';
import { AdminLayout } from '@layouts';

import { AdminPageProps } from './types';
import { meaning } from '@word-book';

const GasStations: AdminPageProps = () => {
    return (
        <>
            <Head>
                <title>{meaning('pages.gas-stations')}</title>
            </Head>
            <Container>
                <h2>Welcome to Gás station</h2>
            </Container>
        </>
    );
};

GasStations.layout = AdminLayout;

export default GasStations;
