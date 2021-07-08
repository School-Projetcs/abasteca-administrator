import { AuthContextState, GasStations } from '@context/types';

export const updateGasStations = (
    prevState: AuthContextState,
    { stations }: GasStations,
) =>
    ({
        ...prevState,
        isLoading: false,
        gasStations: { stations },
    } as AuthContextState);
