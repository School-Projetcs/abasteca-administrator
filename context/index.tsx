import React, {
    createContext,
    FC,
    useContext,
    useMemo,
    useReducer,
} from 'react';

import actions from './actions';
import reducers from './reducers';
import {
    AuthContextProps,
    AuthContextState,
    ReducerActionProps,
} from './types';

const AuthContext = createContext<AuthContextProps>({
    isSignIn: false,
    userToken: undefined,
    data: undefined,
    signIn: () => undefined,
    signOut: () => undefined,
} as AuthContextProps);

const initialState: AuthContextState = {
    isSignIn: false,
    userToken: undefined,
    data: undefined,
};

const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<
        React.Reducer<AuthContextState, ReducerActionProps>
    >(reducers, initialState);

    const value = useMemo(() => ({ ...actions(dispatch), ...state }), [state]);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
