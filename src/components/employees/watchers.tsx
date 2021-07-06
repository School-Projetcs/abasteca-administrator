import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const Watchers: React.FC = () => {
    return (
        <TabPanel label={meaning('pages.employees.managers')}>
            See Here Todos os Gestores
        </TabPanel>
    );
};
