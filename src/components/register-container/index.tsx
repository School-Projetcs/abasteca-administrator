import React from 'react';
import { Container } from '@components';
import { Tabs } from '@components/tabs';
import { meaning } from '@word-book';
import { AddWatchers } from '@components/registers/add-watchers';
import { AddManagers } from '@components/registers/add-managers';

export const RegisterContainer: React.FC = () => {
    return (
        <Container flexGrow={1} marginLeft={[undefined, '32px']}>
            <Tabs
                tabs={[
                    meaning('pages.register.add-watchers'),
                    meaning('pages.register.add-managers'),
                ]}
            >
                <AddWatchers />
                <AddManagers />
            </Tabs>
        </Container>
    );
};
