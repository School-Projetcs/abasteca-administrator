import { emailBuilder } from '@components/utils';
import { auth, database, firebase } from '@services';
import { Dispatch } from 'react';

import { SIGN_IN } from '../../action-types';
import { ReducerActionProps, SignInContextProps, UserData } from '../../types';

export const signIn =
    (dispatch: Dispatch<ReducerActionProps>) =>
    async ({ phone, password }: SignInContextProps) => {
        const email = emailBuilder(phone);
        try {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // get token
                    console.log(user);

                    if (!user) return null;
                    console.log('here');

                    const { uid } = user;
                    const dbRef = database().ref();

                    const getUser = dbRef
                        .child('users')
                        .child('administrators')
                        .child(uid)
                        .once('value');

                    getUser
                        .then((snap) => {
                            if (snap.exists()) {
                                const data = snap.val(); //as UserData;
                                console.log(data);

                                // dispatch({
                                //     type: SIGN_IN,
                                //     userToken: uid,
                                //     data,
                                // });
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
            // console.log(err);
        }
    };
