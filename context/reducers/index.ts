import { AuthContextProps, ReducerActionProps } from '@context/types';

import { SIGN_IN, SIGN_OUT } from '../action-types';
import { signIn, signOut } from './utilities';

const reducer = (prevState: AuthContextProps, action: ReducerActionProps) => {
    switch (action.type) {
        case SIGN_IN:
            return signIn(prevState, action);
        case SIGN_OUT:
            return signOut(prevState);
        default:
            throw new Error();
    }
};

export default reducer;
