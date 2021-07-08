export type SignInContextProps = {
    password: string;
    phone: string;
};

export type Employees = {
    watchers: string[][];
    managers: string[][];
};

export type GasStations = { stations: string[][] };

export type AuthContextState = {
    isAuthenticated: boolean;
    isLoading: boolean;
    userToken: string;
    data: UserData;
    employees: Employees;
    gasStations: GasStations;
};

export type AuthContextActionsProps = {
    signIn: (
        props: SignInContextProps,
        callback?: (str: string) => void,
    ) => void;
    signOut: (callback?: () => void) => void;
    startLoading: () => void;
    stopLoading: () => void;
    updateEmployees: (props: Employees) => void;
    updateGasStations: (props: GasStations) => void;
};

export type AuthContextProps = AuthContextState & AuthContextActionsProps;

export type UserData = {
    avatar: string;
    email: string;
    name: string;
    phone: string;
};

export type ReducerActionProps = {
    type: string;
    userToken?: string;
    data?: UserData;
    employees?: Employees;
    gasStations?: GasStations;
};
