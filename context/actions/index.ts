import React from 'react';
import { signIn, signOut } from './creators';

const authActions = (dispatch: React.Dispatch<unknown>) => ({
    signIn: signIn(dispatch),
    signOut: signOut(dispatch),
});

export default authActions;
