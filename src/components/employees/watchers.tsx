import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';

export const Watchers: React.FC = () => {
    const header = [
        meaning('pages.employees.table.name'),
        meaning('pages.employees.table.contacts'),
        meaning('pages.employees.table.function'),
        meaning('pages.employees.table.pump'),
    ];

    const fakeData = [
        ['Dálcio Garcia', '+244 931 396 454', 'Vigia', 'Patriota'],
        ['Ezedélio Garcia', '+244 931 396 454', 'Vigia', 'Talatona'],
        ['Manuel Muetunda', '+244 931 396 454', 'Manager', 'n/a'],
    ];

    return (
        <TabPanel label={meaning('pages.employees.managers')}>
            <Table header={header} data={fakeData} />
        </TabPanel>
    );
};