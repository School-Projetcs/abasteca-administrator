import { AuthContextState } from '@context/types';

export const startLoading = (prevState: AuthContextState) =>
    ({
        ...prevState,
        isLoading: true,
    } as AuthContextState);
