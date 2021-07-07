import { emailBuilder } from '@components/utils';
import { auth, database } from '@services';
import { Dispatch } from 'react';

import { SIGN_IN } from '../../action-types';
import { ReducerActionProps, SignInContextProps, UserData } from '../../types';

export const signIn =
    (dispatch: Dispatch<ReducerActionProps>) =>
    async ({ phone, password }: SignInContextProps, callback) => {
        const email = emailBuilder(phone);

        auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (!user) return null;
                console.log(user);

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
                if (callback) {
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

                    callback('Aconteceu um erro. Tente novamente mais tarde');
                }
            });
    };
