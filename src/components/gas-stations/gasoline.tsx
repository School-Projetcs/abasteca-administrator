import React, { useState } from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { header } from './all-gas-stations';
import { useAuthContext } from '@context';
import { useEffect } from 'react';

export const Gasoline: React.FC = () => {
    const {
        gasStations: { stations },
    } = useAuthContext();
    const [gasolines, setGasolines] = useState<string[][]>([]);

    useEffect(() => {
        if (stations) {
            const filter = stations.filter(
                (row) =>
                    row[1].toLowerCase() === 'Gasólina'.toLowerCase() ||
                    row[1].toLowerCase() === 'Todas'.toLowerCase(),
            );
            setGasolines([...filter]);
        }
    }, []);

    return (
        <TabPanel label={meaning('pages.gas-stations.gasoline')}>
            <Table header={header} data={gasolines} />
        </TabPanel>
    );
};
