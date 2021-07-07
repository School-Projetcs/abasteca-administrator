import { SIGN_OUT } from './../../action-types';
import { Dispatch } from 'react';

import { ReducerActionProps } from '../../types';

export const restoreSession =
    (dispatch: Dispatch<ReducerActionProps>) => async (token: string) => {
        console.log(token);
        dispatch({ type: SIGN_OUT });
    };
