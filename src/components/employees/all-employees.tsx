import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { useAuthContext } from '@context';

export const header = [
    meaning('pages.employees.table.name'),
    meaning('pages.employees.table.contacts'),
    meaning('pages.employees.table.function'),
    meaning('pages.employees.table.pump'),
];

export const AllEmployees: React.FC = () => {
    const { managers, watchers } = useAuthContext();

    return (
        <TabPanel label={meaning('pages.employees.all')}>
            <Table header={header} data={[...managers, ...watchers]} />
        </TabPanel>
    );
};
