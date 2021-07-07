import { AuthContextState } from '@context/types';

export const signOut = (prevState: AuthContextState) =>
    ({
        ...prevState,
        isSignOut: true,
        isLoading: false,
        userToken: null,
        data: null,
    } as AuthContextState);
