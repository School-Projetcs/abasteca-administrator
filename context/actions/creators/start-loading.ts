import { Dispatch } from 'react';
import { ReducerActionProps } from '@context/types';

import { START_LOADING } from '../../action-types';

export const startLoading = (dispatch: Dispatch<ReducerActionProps>) => () =>
    dispatch({ type: START_LOADING });
