import React, { ChangeEvent, useState } from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { useSnackbar } from 'react-simple-snackbar';
import { GenericInput, Password, Phone } from '@components/inputs';
import { Button } from '@components/button';
import { useAuthContext } from '@context';
import { database, auth } from '@services';
import { emailBuilder } from '@components/utils';
import { RegisterForm } from './styles';

export const AddManagers: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [openSnackbar] = useSnackbar();
    const { isLoading, startLoading, stopLoading } = useAuthContext();

    const onError = (err: string) => {
        stopLoading();
        openSnackbar(err);
    };

    const addManagersSubmit = () => {
        try {
            const email = emailBuilder(phone);
            const data: {
                password: string;
                avatar: string;
                name: string;
                email: string;
                phone: string;
            } = {
                name,
                avatar: '',
                email,
                phone,
                password,
            };

            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user) {
                        database()
                            .ref(`users/managers/${user.uid}`)
                            .set(data)
                            .then(() => {
                                openSnackbar('Gestor cadastrado com sucesso');
                                stopLoading();
                            });
                    }
                })
                .catch(() => {
                    onError('Aconteceu alguma coisa tente denovo');
                });
        } catch (err) {
            stopLoading();
        }
    };

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        startLoading();
        addManagersSubmit();
    };

    return (
        <TabPanel label={meaning('pages.register.add-managers')}>
            <RegisterForm onSubmit={onSubmit}>
                <h3>{meaning('pages.register.add-managers')}</h3>
                <div id="anything">
                    Pereencha os dados do novo gestor de bombas.
                </div>
                <GenericInput value={name} changeValue={setName} label="Nome" />
                <Phone value={phone} changeValue={setPhone} />
                <Password value={password} changeValue={setPassword} />
                <Button variant="success" isLoading={isLoading}>
                    {meaning('pages.register.add-managers', {
                        capitalized: true,
                    })}
                </Button>
            </RegisterForm>
        </TabPanel>
    );
};
