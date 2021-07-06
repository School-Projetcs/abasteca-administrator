import { meaning } from '@word-book';
import React from 'react';
import { TabPanel } from '@components/tabs';

export const Managers: React.FC = () => {
    return (
        <TabPanel label={meaning('pages.employees.watchers')}>
            See Here Todos os vigias
        </TabPanel>
    );
};
