import React, { useEffect, useState } from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { useAuthContext } from '@context';
import { header } from './all-gas-stations';

export const Diesel: React.FC = () => {
    const {
        gasStations: { stations },
    } = useAuthContext();
    const [diesels, setDiesels] = useState<string[][]>([]);

    useEffect(() => {
        if (stations) {
            const filter = stations.filter(
                (row) =>
                    row[1].toLowerCase() === 'Gasóleo'.toLowerCase() ||
                    row[1].toLowerCase() === 'Todas'.toLowerCase(),
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
