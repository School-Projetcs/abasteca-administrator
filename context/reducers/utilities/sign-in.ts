import { AuthContextState, ReducerActionProps } from '@context/types';

export const signIn = (
    prevState: AuthContextState,
    { userToken, data }: ReducerActionProps,
) =>
    ({
        ...prevState,
        isAuthenticated: true,
        isLoading: false,
        userToken,
        data,
    } as AuthContextState);
