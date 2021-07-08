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
};

const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<
        React.Reducer<AuthContextState, ReducerActionProps>
    >(reducers, initialState);
    const [allGasStations, setAllGasStations] = useState<string[][]>([]);
    const [allEmployees, setAllEmployees] = useState<string[][]>([]);

    const value = useMemo(
        () => ({
            ...actions(dispatch),
            ...state,
            allEmployees,
            allGasStations,
        }),
        [state, allEmployees, allGasStations],
    );

    useEffect(() => {
        const { [Tokens.sig_in]: cookie } = parseCookies();

        if (cookie) {
            const getGasStations = async () => {
                try {
                    database()
                        .ref('gas-stations')
                        .child('stations')
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
            const getAllEmployees = () => {
                try {
                    const usersRes = database().ref('users');
                    const tempManagers = [];
                    const tempWatchers = [];

                    usersRes.child('managers').on('value', (snapshot) => {
                        const stations = snapshot.val();

                        Object.keys(stations).map((pump) => {
                            tempManagers.push([
                                stations[pump]?.name, //name:
                                stations[pump], //contacts:
                                'Gestor', //function:
                                'n/a', //pump:
                            ]);
                        });
                    });
                    usersRes.child('watchers').on('value', (snapshot) => {
                        const stations = snapshot.val();

                        Object.keys(stations).map((pump) => {
                            tempWatchers.push([
                                stations[pump]?.name, // name:
                                stations[pump]?.phone, // contacts:
                                'Vígia', // function:
                                stations[pump]?.station_name, // pump:
                            ]);
                        });
                    });

                    setAllEmployees([...tempManagers, ...tempWatchers]);
                } catch (error) {
                    //
                }
            };
            getAllEmployees();
        }
    }, []);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
