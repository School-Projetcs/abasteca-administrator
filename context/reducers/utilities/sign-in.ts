import { AuthContextState, ReducerActionProps } from '@context/types';

export const signIn = (
    prevState: AuthContextState,
    action: ReducerActionProps,
) =>
    ({
        ...prevState,
        isSignOut: false,
        isLoading: false,
        userToken: action?.userToken,
        data: action?.data,
    } as AuthContextState);
