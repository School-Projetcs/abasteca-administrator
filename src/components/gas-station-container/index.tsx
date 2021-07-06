import React from 'react';
import { Container } from '@components';
import { Tabs, TabPanel } from '@components/tabs';
import { meaning } from '@word-book';

export const GasStationsContainer: React.FC = () => {
    return (
        <Container flexGrow={1} marginLeft={[undefined, '32px']}>
            <Tabs
                tabs={[
                    meaning('pages.gas-stations.all'),
                    meaning('pages.gas-stations.gasoline'),
                    meaning('pages.gas-stations.diesel'),
                    meaning('pages.gas-stations.empty'),
                ]}
            >
                <TabPanel label={meaning('pages.gas-stations.all')}>
                    See Here todas as bombas
                </TabPanel>
                <TabPanel label={meaning('pages.gas-stations.gasoline')}>
                    See Here Todas as bombas a gasólina
                </TabPanel>
                <TabPanel label={meaning('pages.gas-stations.diesel')}>
                    See Here Todas as bombas a Gasóleo
                </TabPanel>
                <TabPanel label={meaning('pages.gas-stations.empty')}>
                    See Here todas as bombas vazias
                </TabPanel>
            </Tabs>
        </Container>
    );
};
