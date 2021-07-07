import { AuthContextActionsProps, ReducerActionProps } from '@context/types';
import { Dispatch } from 'react';
import {
    signIn,
    signOut,
    startLoading,
    stopLoading,
    restoreSession,
} from './creators';

const authActions = (dispatch: Dispatch<ReducerActionProps>) =>
    ({
        signIn: signIn(dispatch),
        signOut: signOut(dispatch),
        startLoading: startLoading(dispatch),
        stopLoading: stopLoading(dispatch),
        restoreSession: restoreSession(dispatch),
    } as AuthContextActionsProps);

export default authActions;
