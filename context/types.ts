export type SignInContextProps = {
    password: string;
    phone: string;
};

export type AuthContextState = {
    isSignIn: boolean;
    userToken: string;
    data: UserData;
};

export type AuthContextProps = AuthContextState & {
    signIn: (props: SignInContextProps) => void;
    signOut: () => void;
};

export type UserData = {
    avatar: string;
    email: string;
    name: string;
    phone: string;
};

export type ReducerActionProps =
    | {
          type: string;
      }
    | {
          type: string;
          userToken: string;
          data: UserData;
      };
