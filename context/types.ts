export type SignInContextProps = {
    password: string;
    phoneNumber: string;
};

export type AuthContextProps = {
    isSignIn: boolean;
    userToken: string;
    data: UserData;
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
