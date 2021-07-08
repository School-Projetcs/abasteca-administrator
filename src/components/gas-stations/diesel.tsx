import React, { useEffect, useState } from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { useAuthContext } from '@context';
import { header } from './all-gas-stations';

export const Diesel: React.FC = () => {
    const { allGasStations } = useAuthContext();
    const [diesels, setDiesels] = useState<string[][]>([]);

    useEffect(() => {
        if (allGasStations) {
            const filter = allGasStations.filter(
                (row) => row[1].toLowerCase() === 'Gasóleo'.toLowerCase(),
            );
            setDiesels([...filter]);
        }
    }, []);

    return (
        <TabPanel label={meaning('pages.gas-stations.diesel')}>
            <Table header={header} data={diesels} />
        </TabPanel>
    );
};
