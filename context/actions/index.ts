import { AuthContextActionsProps, ReducerActionProps } from '@context/types';
import { Dispatch } from 'react';
import {
    signIn,
    signOut,
    startLoading,
    stopLoading,
    updateEmployees,
    updateGasStations,
} from './creators';

const authActions = (dispatch: Dispatch<ReducerActionProps>) =>
    ({
        signIn: signIn(dispatch),
        signOut: signOut(dispatch),
        startLoading: startLoading(dispatch),
        stopLoading: stopLoading(dispatch),
        updateGasStations: updateGasStations(dispatch),
        updateEmployees: updateEmployees(dispatch),
    } as AuthContextActionsProps);

export default authActions;
