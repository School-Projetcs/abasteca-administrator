export type SignInContextProps = {
    password: string;
    phone: string;
};

export type AuthContextState = {
    isSignIn: boolean;
    isLoading: boolean;
    userToken: string;
    data: UserData;
};

export type AuthContextActionsProps = {
    signIn: (
        props: SignInContextProps,
        callback?: (str: string) => void,
    ) => void;
    signOut: (callback?: () => void) => void;
    startLoading: () => void;
    stopLoading: () => void;
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
};
