import { ReducerActionProps } from '@context/types';
import { Dispatch } from 'react';
import { signIn, signOut } from './creators';

const authActions = (dispatch: Dispatch<ReducerActionProps>) => ({
    signIn: signIn(dispatch),
    signOut: signOut(dispatch),
});

export default authActions;
