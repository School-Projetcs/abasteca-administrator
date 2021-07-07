import { AuthContextProps, ReducerActionProps } from '@context/types';

import { SIGN_IN, SIGN_OUT, START_LOADING } from '../action-types';
import { signIn, signOut, startLoading } from './utilities';

const reducer = (prevState: AuthContextProps, action: ReducerActionProps) => {
    switch (action.type) {
        case SIGN_IN:
            return signIn(prevState, action);
        case SIGN_OUT:
            return signOut(prevState);
        case START_LOADING:
            return startLoading(prevState);
        default:
            throw new Error();
    }
};

export default reducer;
