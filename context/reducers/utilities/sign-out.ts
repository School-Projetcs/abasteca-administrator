import { AuthContextProps } from '@context/types';

const signOut = (prevState: AuthContextProps) => ({
    ...prevState,
    isSignOut: true,
    userToken: null,
    data: null,
});

export default signOut;
