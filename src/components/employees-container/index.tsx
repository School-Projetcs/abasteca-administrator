import React from 'react';
import { Container } from '@components';
import { Tabs, TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const EmployeesContainer: React.FC = () => {
    return (
        <Container flexGrow={1} marginLeft={[undefined, '32px']}>
            <Tabs
                tabs={[
                    meaning('pages.employees.all'),
                    meaning('pages.employees.watchers'),
                    meaning('pages.employees.managers'),
                ]}
            >
                <TabPanel label={meaning('pages.employees.all')}>
                    See Here todos os Funcionário
                </TabPanel>
                <TabPanel label={meaning('pages.employees.watchers')}>
                    See Here Todos os vigias
                </TabPanel>
                <TabPanel label={meaning('pages.employees.managers')}>
                    See Here Todos os Gestores
                </TabPanel>
            </Tabs>
        </Container>
    );
};
