import { Dispatch } from 'react';

import { UPDATE_GAS_STATIONS } from '../../action-types';
import { GasStations, ReducerActionProps } from '../../types';

export const updateGasStations =
    (dispatch: Dispatch<ReducerActionProps>) =>
    async ({ stations }: GasStations) => {
        dispatch({ type: UPDATE_GAS_STATIONS, gasStations: { stations } });
    };
