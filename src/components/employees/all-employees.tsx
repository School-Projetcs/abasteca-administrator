import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';

export const AllEmployees: React.FC = () => {
    const header = [
        meaning('pages.employees.table.name'),
        meaning('pages.employees.table.contacts'),
        meaning('pages.employees.table.function'),
        meaning('pages.employees.table.pump'),
        meaning('pages.employees.table.created-alt'),
    ];

    const fakeData = [
        [
            'Dálcio Garcia',
            '+244 931 396 454',
            'Vigia',
            'Patriota',
            '24-05-10998',
        ],
        [
            'Ezedélio Garcia',
            '+244 931 396 454',
            'Vigia',
            'Talatona',
            '24-05-10998',
        ],
        [
            'Manuel Muetunda',
            '+244 931 396 454',
            'Manager',
            'n/a',
            '24-05-10998',
        ],
    ];

    return (
        <TabPanel label={meaning('pages.employees.all')}>
            <Table header={header} data={fakeData} />
        </TabPanel>
    );
};
