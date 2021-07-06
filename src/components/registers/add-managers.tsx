import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const AddManagers: React.FC = () => {
    return (
        <TabPanel label={meaning('pages.register.managers')}>
            Add Manager
        </TabPanel>
    );
};
