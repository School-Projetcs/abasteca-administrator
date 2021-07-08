import { AuthContextState, Employees } from '@context/types';

export const updateEmployees = (
    prevState: AuthContextState,
    { managers, watchers }: Employees,
) =>
    ({
        ...prevState,
        isLoading: false,
        employees: { managers, watchers },
    } as AuthContextState);
