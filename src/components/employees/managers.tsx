import { meaning } from '@word-book';
import React from 'react';
import { TabPanel } from '@components/tabs';
import { Table } from '@components/table';
import { header } from './all-employees';
import { useAuthContext } from '@context';

export const Managers: React.FC = () => {
    const {
        employees: { managers },
    } = useAuthContext();

    return (
        <TabPanel label={meaning('pages.employees.watchers')}>
            {managers && <Table header={header} data={managers} />}
        </TabPanel>
    );
};
