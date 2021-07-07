import { auth, database } from '@services';
import { Dispatch } from 'react';

import { SIGN_IN } from '../../action-types';
import { ReducerActionProps, SignInContextProps, UserData } from '../../types';

const signIn =
    (dispatch: Dispatch<ReducerActionProps>) =>
    async ({ password, phoneNumber }: SignInContextProps) => {
        try {
            auth()
                .signInWithEmailAndPassword(phoneNumber, password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    if (!user) return null;

                    const { uid } = user;
                    const dbRef = database().ref();

                    const getUser = dbRef
                        .child('users')
                        .child('clients')
                        .child(uid)
                        .once('value');

                    getUser
                        .then((snap) => {
                            if (snap.exists()) {
                                const data = snap.val() as UserData;
                                dispatch({
                                    type: SIGN_IN,
                                    userToken: uid,
                                    data,
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                });
        } catch (err) {
            console.log(err);
        }
    };

export default signIn;
