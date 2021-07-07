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
    signIn: (props: SignInContextProps) => void;
    signOut: () => void;
    startLoading: () => void;
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
