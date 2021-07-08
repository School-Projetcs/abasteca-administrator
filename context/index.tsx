import { Tokens } from '@constants';
import { database } from '@services';
import { parseCookies } from 'nookies';
import React, {
    createContext,
    FC,
    useContext,
    useMemo,
    useReducer,
} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import actions from './actions';
import reducers from './reducers';
import {
    AuthContextProps,
    AuthContextState,
    ReducerActionProps,
} from './types';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const initialState: AuthContextState = {
    isAuthenticated: false,
    isLoading: false,
    userToken: undefined,
    data: undefined,
    allEmployees: undefined,
    allGasStations: undefined,
    managers: undefined,
    watchers: undefined,
};

const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<
        React.Reducer<AuthContextState, ReducerActionProps>
    >(reducers, initialState);
    const [allGasStations, setAllGasStations] = useState<string[][]>([]);
    const [allEmployees, setAllEmployees] = useState<string[][]>([]);
    const [managers, setManagers] = useState<string[][]>([]);
    const [watchers, setWatchers] = useState<string[][]>([]);

    const value = useMemo(
        () => ({
            ...actions(dispatch),
            ...state,
            allEmployees,
            allGasStations,
            managers,
            watchers,
        }),
        [state, allEmployees, allGasStations, managers, watchers],
    );

    useEffect(() => {
        const { [Tokens.sig_in]: cookie } = parseCookies();

        if (cookie) {
            const getGasStations = async () => {
                try {
                    database()
                        .ref('gas-stations/stations')
                        .on('value', (snapshot) => {
                            const stations = snapshot.val();
                            const tempPumps = [];

                            Object.keys(stations).map((pump) => {
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
                            });
                            setAllGasStations([...tempPumps]);
                        });
                } catch (error) {
                    //
                }
            };
            getGasStations();
        }
    }, []);
    useEffect(() => {
        const { [Tokens.sig_in]: cookie } = parseCookies();

        if (cookie) {
            const getWatchers = () => {
                try {
                    const tempWatchers = [];

                    database()
                        .ref('users/watchers')
                        .on('value', (snapshot) => {
                            const stations = snapshot.val();
                            console.log('here too');

                            Object.keys(stations).map((pump) => {
                                tempWatchers.push([
                                    stations[pump]?.name, // name:
                                    stations[pump]?.phone, // contacts:
                                    'Vigia', // function:
                                    stations[pump]?.station_name, // pump:
                                ]);
                            });
                        });
                    setWatchers([...tempWatchers]);
                } catch (error) {
                    //
                }
            };
            getWatchers();
        }
    }, []);

    useEffect(() => {
        const { [Tokens.sig_in]: cookie } = parseCookies();

        if (cookie) {
            const getManagers = () => {
                try {
                    const tempManagers = [];

                    database()
                        .ref('users/managers')
                        .on('value', (snapshot) => {
                            const stations = snapshot.val();
                            console.log('here');

                            Object.keys(stations).map((pump) => {
                                tempManagers.push([
                                    stations[pump]?.name, //name:
                                    stations[pump].phone, //contacts:
                                    'Gestor', //function:
                                    'n/a', //pump:
                                ]);
                            });
                        });
                    setManagers([...tempManagers]);
                } catch (error) {
                    //
                }
            };
            getManagers();
        }
    }, []);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
