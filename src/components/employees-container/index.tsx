import React from 'react';
import { Container } from '@components';
import { Tabs } from '@components/tabs';
import { meaning } from '@word-book';
import { AllEmployees, Managers, Watchers } from '@components/employees';

export const EmployeesContainer: React.FC = () => {
    return (
        <Container
            flexGrow={1}
            marginLeft={[undefined, '32px']}
            overflow="auto"
        >
            <Tabs
                tabs={[
                    meaning('pages.employees.all'),
                    meaning('pages.employees.managers'),
                    meaning('pages.employees.watchers'),
                ]}
            >
                <AllEmployees />
                <Managers />
                <Watchers />
            </Tabs>
        </Container>
    );
};
