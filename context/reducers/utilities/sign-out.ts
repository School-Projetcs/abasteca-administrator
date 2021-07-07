import { AuthContextState } from '@context/types';

export const signOut = (prevState: AuthContextState) =>
    ({
        ...prevState,
        isAuthenticated: false,
        isLoading: false,
        userToken: null,
        data: null,
    } as AuthContextState);
