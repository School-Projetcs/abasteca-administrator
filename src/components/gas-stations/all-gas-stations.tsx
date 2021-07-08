import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { useAuthContext } from '@context';

export const header = [
    meaning('pages.gas-stations.table.name'),
    meaning('pages.gas-stations.table.street'),
    meaning('pages.gas-stations.table.fuel'),
];

export const AllGasStations: React.FC = () => {
    const { allGasStations } = useAuthContext();

    return (
        <TabPanel label={meaning('pages.gas-stations.all')}>
            <Table header={header} data={allGasStations} />
        </TabPanel>
    );
};
