import React, { useEffect } from 'react';
import { Container } from '@components';
import { Tabs } from '@components/tabs';
import { meaning } from '@word-book';
import { AllEmployees, Managers, Watchers } from '@components/employees';
import { useAuthContext } from '@context';
import { getDbRef } from '@services';
import Loader from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { UserData } from '@context/types';
import { useState } from 'react';

export const EmployeesContainer: React.FC = () => {
    const { colors } = useTheme();
    const { updateEmployees, employees } = useAuthContext();
    const [watchers, setWatchers] = useState<[][] | undefined>(undefined);
    const [managers, setManagers] = useState<[][] | undefined>(undefined);

    useEffect(() => {
        const getEmployees = async () => {
            try {
                const tempWatchers = [];
                const tempManagers = [];

                getDbRef('users/watchers').on('value', (snapshot) => {
                    const stations = snapshot.val();
                    if (Object.values(stations).length > 0) {
                        Object.values(stations).map(
                            (
                                station: UserData & { station_name: string },
                                index,
                            ) => {
                                tempWatchers.push([
                                    station.name, //name:
                                    station.phone, //contacts:
                                    'Vigia', // function:
                                    station.station_name, // pump:
                                ]);
                                if (
                                    index + 1 ===
                                    Object.values(stations).length
                                ) {
                                    setWatchers([...tempWatchers]);
                                }
                            },
                        );
                    } else {
                        setWatchers([]);
                    }
                });

                getDbRef('users/managers').on('value', (snapshot) => {
                    const stations = snapshot.val();
                    if (Object.values(stations).length > 0) {
                        Object.values(stations).map(
                            (station: UserData, index) => {
                                tempManagers.push([
                                    station.name, //name:
                                    station.phone, //contacts:
                                    'Gestor', //function:
                                    'n/a', //pump:
                                ]);

                                if (
                                    index + 1 ===
                                    Object.values(stations).length
                                ) {
                                    setManagers([...tempManagers]);
                                }
                            },
                        );
                    } else {
                        setManagers([]);
                    }
                });
            } catch (error) {
                //
            }
        };
        getEmployees();
    }, []);

    useEffect(() => {
        if (managers !== undefined && watchers !== undefined) {
            updateEmployees({
                managers,
                watchers,
            });
        }
    }, [managers, watchers]);

    return (
        <Container
            flexGrow={1}
            marginLeft={[undefined, '32px']}
            overflow="auto"
        >
            {(employees.managers && employees.watchers && (
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
