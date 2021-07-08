import Head from 'next/head';
import { GasStationsContainer } from '@components';
import { AdminLayout } from '@layouts';

import { AdminPageProps } from '@types';
import { meaning } from '@word-book';

const GasStations: AdminPageProps = () => {
    return (
        <>
            <Head>
                <title>{meaning('pages.gas-stations')}</title>
            </Head>
            <GasStationsContainer />
        </>
    );
};

GasStations.layout = AdminLayout;

export default GasStations;
