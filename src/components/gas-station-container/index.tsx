import React from 'react';
import { Container } from '@components';
import { Tabs } from '@components/tabs';
import { meaning } from '@word-book';
import {
    AllGasStations,
    Diesel,
    EmptyGasStations,
    Gasoline,
} from '@components/gas-stations';

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
                <AllGasStations />
                <Gasoline />
                <Diesel />
                <EmptyGasStations />
            </Tabs>
        </Container>
    );
};
