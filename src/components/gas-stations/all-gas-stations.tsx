import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { useAuthContext } from '@context';

export const header = [
    meaning('pages.gas-stations.table.name'),
    meaning('pages.gas-stations.table.fuel'),
    meaning('pages.gas-stations.table.street'),
];

export const AllGasStations: React.FC = () => {
    const {
        gasStations: { stations },
    } = useAuthContext();

    return (
        <TabPanel label={meaning('pages.gas-stations.all')}>
            <Table header={header} data={stations} />
        </TabPanel>
    );
};
