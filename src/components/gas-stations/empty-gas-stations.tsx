import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';

export const EmptyGasStations: React.FC = () => {
    const header = [
        meaning('pages.gas-stations.table.name'),
        meaning('pages.gas-stations.table.street'),
        meaning('pages.gas-stations.table.fuel'),
    ];

    const fakeData = [
        ['Bomba da Pumangol', 'Ponte Molhada', 'gasolina'],
        ['Bomba Sonagas', 'Talatona', 'gasoleo'],
        ['Bomba da Pumangol Benfica', 'Benfica', 'vazio'],
    ];

    return (
        <TabPanel label={meaning('pages.gas-stations.empty')}>
            <Table header={header} data={fakeData} />
        </TabPanel>
    );
};
