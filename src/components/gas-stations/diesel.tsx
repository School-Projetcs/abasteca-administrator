import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const Diesel: React.FC = () => {
    return (
        <TabPanel label={meaning('pages.gas-stations.diesel')}>Diesel</TabPanel>
    );
};
