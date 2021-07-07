import { emailBuilder } from '@components/utils';
import { Routes, Tokens } from '@constants';
import { auth, database } from '@services';
import Router from 'next/router';
import { setCookie } from 'nookies';
import { Dispatch } from 'react';

import { SIGN_IN, SIGN_OUT } from '../../action-types';
import { ReducerActionProps, SignInContextProps, UserData } from '../../types';

export const signIn =
    (dispatch: Dispatch<ReducerActionProps>) =>
    async ({ phone, password }: SignInContextProps, callback) => {
        const email = emailBuilder(phone);

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                if (!user) return null;

                const { uid } = user;

                const dbRef = database().ref();

                const getUser = dbRef
                    .child('users')
                    .child('administrators')
                    .child(uid)
                    .once('value');

                getUser
                    .then(async (snap) => {
                        if (snap.exists()) {
                            const data = snap.val() as UserData;

                            setCookie(undefined, Tokens.sig_in, uid, {
                                maxAge: 60 * 60 * 4,
                            });

                            dispatch({
                                type: SIGN_IN,
                                userToken: uid,
                                data,
                            });

                            Router.push(Routes.employees);
                        }
                    })
                    .catch(() => {
                        auth()
                            .signOut()
                            .then(() => {
                                dispatch({ type: SIGN_OUT });
                            });
                        if (callback)
                            callback(
                                'Aconteceu um erro. Tente novamente mais tarde',
                            );
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                if (callback && errorCode) {
                    if (errorCode === 'auth/user-not-found') {
                        return callback(
                            `O ${phone} não é um administrador do abasteça`,
                        );
                    }

                    if (errorCode === 'auth/wrong-password') {
                        return callback(
                            'O número de telefone ou a senha não está correto',
                        );
                    }

                    return callback(
                        'Aconteceu um erro. Tente novamente mais tarde',
                    );
                }
            });
    };
