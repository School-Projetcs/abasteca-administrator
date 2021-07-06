import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const AllGasStations: React.FC = () => {
    return (
        <TabPanel label={meaning('pages.gas-stations.all')}>
            All Gas Stations
        </TabPanel>
    );
};
