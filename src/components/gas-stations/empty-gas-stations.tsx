import React, { useEffect, useState } from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { useAuthContext } from '@context';
import { header } from './all-gas-stations';

export const EmptyGasStations: React.FC = () => {
    const { allGasStations } = useAuthContext();
    const [empty, setEmpty] = useState<string[][]>([]);

    useEffect(() => {
        if (allGasStations) {
            const filter = allGasStations.filter(
                (row) => row[1].toLowerCase() === 'Vazio'.toLowerCase(),
            );
            setEmpty([...filter]);
        }
    }, []);

    return (
        <TabPanel label={meaning('pages.gas-stations.empty')}>
            <Table header={header} data={empty} />
        </TabPanel>
    );
};
