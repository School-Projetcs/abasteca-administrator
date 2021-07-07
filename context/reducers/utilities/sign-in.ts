import { AuthContextProps, ReducerActionProps } from '@context/types';

const signIn = (prevState: AuthContextProps, action: ReducerActionProps) => ({
    ...prevState,
    isSignOut: false,
    isLoading: false,
    userToken: action.userToken,
    data: action.data,
});

export default signIn;
