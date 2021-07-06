import React from 'react';
import { Container } from '@components';
import { Tabs, TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const RegisterContainer: React.FC = () => {
    return (
        <Container flexGrow={1} marginLeft={[undefined, '32px']}>
            <Tabs
                tabs={[
                    meaning('pages.register.add-watchers'),
                    meaning('pages.register.add-managers'),
                ]}
            >
                <TabPanel label={meaning('pages.register.add-watchers')}>
                    Add here new Vigia
                </TabPanel>
                <TabPanel label={meaning('pages.register.add-managers')}>
                    Add here new Manager
                </TabPanel>
            </Tabs>
        </Container>
    );
};
