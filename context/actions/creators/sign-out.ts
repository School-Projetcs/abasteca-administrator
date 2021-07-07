import { auth } from '@services';
import { ReducerActionProps } from '@context/types';
import { Dispatch } from 'react';

import { SIGN_OUT } from '../../action-types';

export const signOut = (dispatch: Dispatch<ReducerActionProps>) => () => {
    try {
        auth()
            .signOut()
            .then(() => {
                dispatch({ type: SIGN_OUT });
            });
    } catch (error) {
        console.log('saindo');
    }
};
