import { AuthContextProps, ReducerActionProps } from '@context/types';

import {
    SIGN_IN,
    SIGN_OUT,
    START_LOADING,
    STOP_LOADING,
    UPDATE_EMPLOYEES,
    UPDATE_GAS_STATIONS,
} from '../action-types';
import {
    signIn,
    signOut,
    startLoading,
    stopLoading,
    updateEmployees,
    updateGasStations,
} from './utilities';

const reducer = (prevState: AuthContextProps, action: ReducerActionProps) => {
    switch (action.type) {
        case SIGN_IN:
            return signIn(prevState, action);
        case UPDATE_EMPLOYEES:
            return updateEmployees(prevState, action?.employees);
        case UPDATE_GAS_STATIONS:
            return updateGasStations(prevState, action?.gasStations);
        case SIGN_OUT:
            return signOut(prevState);
        case START_LOADING:
            return startLoading(prevState);
        case STOP_LOADING:
            return stopLoading(prevState);
        default:
            throw new Error();
    }
};

export default reducer;
