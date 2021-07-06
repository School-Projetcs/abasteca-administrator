import React from 'react';
import { Container } from '@components';
import { Tabs, TabPanel } from '@components/tabs';

export const EmployeesContainer: React.FC = () => {
    return (
        <Container flexGrow={1} marginLeft={[undefined, '32px']}>
            <Tabs tabs={['Cator', 'Croc', 'Sarcosuchus']}>
                <TabPanel label="Gator">
                    See ya later, <em>Alligator</em>!
                </TabPanel>
                <TabPanel label="Croc">
                    After 'while, <em>Crocodile</em>!
                </TabPanel>
                <TabPanel label="Sarcosuchus">
                    Nothing to see here, this tab is <em>extinct</em>!
                </TabPanel>
            </Tabs>
        </Container>
    );
};
