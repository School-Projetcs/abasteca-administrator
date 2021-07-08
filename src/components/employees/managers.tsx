import { meaning } from '@word-book';
import React from 'react';
import { TabPanel } from '@components/tabs';
import { Table } from '@components/table';
import { header } from './all-employees';
import { useAuthContext } from '@context';
import { useEffect } from 'react';
import { useState } from 'react';

export const Managers: React.FC = () => {
    const { allEmployees } = useAuthContext();
    const [managers, setManagers] = useState<string[][]>([]);

    useEffect(() => {
        if (allEmployees) {
            const filter = allEmployees.filter(
                (row) => row[2].toLowerCase() === 'Manager'.toLowerCase(),
            );
            setManagers([...filter]);
        }
    }, []);

    return (
        <TabPanel label={meaning('pages.employees.watchers')}>
            <Table header={header} data={managers} />
        </TabPanel>
    );
};
