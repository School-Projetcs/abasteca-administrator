import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { Table } from '@components/table';
import { header } from './all-employees';
import { useAuthContext } from '@context';

export const Watchers: React.FC = () => {
    const { watchers } = useAuthContext();

    return (
        <TabPanel label={meaning('pages.employees.watchers')}>
            <Table header={header} data={watchers} />
        </TabPanel>
    );
};
