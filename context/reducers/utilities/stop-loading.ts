import { AuthContextState } from '@context/types';

export const stopLoading = (prevState: AuthContextState) =>
    ({
        ...prevState,
        isLoading: false,
    } as AuthContextState);
