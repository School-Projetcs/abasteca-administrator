import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const AllEmployees: React.FC = () => {
    return (
        <TabPanel label={meaning('pages.employees.all')}>
            See Here todos os Funcionário
        </TabPanel>
    );
};
