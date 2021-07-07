import { Dispatch } from 'react';
import { ReducerActionProps } from '@context/types';

import { STOP_LOADING } from '../../action-types';

export const stopLoading = (dispatch: Dispatch<ReducerActionProps>) => () =>
    dispatch({ type: STOP_LOADING });
