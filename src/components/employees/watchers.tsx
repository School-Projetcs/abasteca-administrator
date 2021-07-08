import React, { useEffect, useState } from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { header } from './all-employees';
import { useAuthContext } from '@context';

export const Watchers: React.FC = () => {
    const { allEmployees } = useAuthContext();
    const [watchers, setWatchers] = useState<string[][]>([]);

    useEffect(() => {
        if (allEmployees) {
            const filter = allEmployees.filter(
                (row) => row[2].toLowerCase() === 'Manager'.toLowerCase(),
            );
            setWatchers([...filter]);
        }
    }, []);

    return (
        <TabPanel label={meaning('pages.employees.watchers')}>
            <Table header={header} data={watchers} />
        </TabPanel>
    );
};
