import React, { useEffect } from 'react';
import { Container } from '@components';
import { Tabs } from '@components/tabs';
import { useTheme } from 'styled-components';
import { meaning } from '@word-book';
import {
    AllGasStations,
    Diesel,
    EmptyGasStations,
    Gasoline,
} from '@components/gas-stations';
import { useAuthContext } from '@context';
import { getDbRef } from '@services';
import Loader from 'react-loader-spinner';

export const GasStationsContainer: React.FC = () => {
    const { colors } = useTheme();
    const { updateGasStations, gasStations } = useAuthContext();

    useEffect(() => {
        const getGasStations = async () => {
            try {
                getDbRef('gas-stations/stations').on('value', (snapshot) => {
                    const stations = snapshot.val();
                    const tempPumps = [];
                    if (Object.keys(stations).length > 0) {
                        Object.keys(stations).map((pump, index) => {
                            tempPumps.push([
                                stations[pump]['street-name'], //address:
                                (stations[pump]?.color === 'accent' &&
                                    'Gasóleo') ||
                                    (stations[pump]?.color === 'error' &&
                                        'Gasólina') ||
                                    (stations[pump]?.color === 'success' &&
                                        'Todas') ||
                                    'Vazio', //color:
                                stations[pump]?.name, //name:
                            ]);
                            if (index + 1 === Object.keys(stations).length) {
                                updateGasStations({ stations: [...tempPumps] });
                            }
                        });
                    } else {
                        updateGasStations({ stations: [] });
                    }
                });
            } catch (error) {
                //
            }
        };
        getGasStations();
    }, []);

    return (
        <Container flexGrow={1} marginLeft={[undefined, '32px']}>
            {(gasStations.stations && (
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
            )) || (
                <Container
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Loader
                        type="ThreeDots"
                        color={colors.primary}
                        width={'60px'}
                        height={'60px'}
                    />
                </Container>
            )}
        </Container>
    );
};
