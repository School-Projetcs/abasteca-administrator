import React from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const AddWatchers: React.FC = () => {
    return (
        <TabPanel label={meaning('pages.register.add-watchers')}>
            Adicionar Watcher
        </TabPanel>
    );
};
