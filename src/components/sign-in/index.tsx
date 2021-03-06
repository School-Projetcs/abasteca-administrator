import React, { ChangeEvent } from 'react';
import { useSnackbar } from 'react-simple-snackbar';

import { Button, Phone, Password } from '@components';
import { CardSignIn } from './styles';
import { meaning } from '@word-book';
import { useState } from 'react';
import { useAuthContext } from '@context';

export const SignIn: React.FC = () => {
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [openSnackbar] = useSnackbar();
    const { signIn, isLoading, startLoading, stopLoading } = useAuthContext();

    const onError = (err: string) => {
        stopLoading();
        openSnackbar(err);
    };

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        startLoading();
        signIn({ phone, password }, onError);
    };

    return (
        <CardSignIn
            bg="white"
            width={[1, '360px']}
            p={3}
            borderRadius={['8px 8px 0px 0px', '8px']}
            boxShadow={[
                '0 1px 10px rgba(0, 0, 0, 0.8)',
                '0 12px 40px rgb(0, 0, 0, 0.12)',
            ]}
            onSubmit={onSubmit}
        >
            <h2>{meaning('home.login.name')}</h2>
            <div id="anything">Digite o telefone e a senha</div>
            <Phone value={phone} changeValue={setPhone} />
            <Password value={password} changeValue={setPassword} />
            <Button variant="primary" mt={'16px'} isLoading={isLoading}>
                {meaning('shared.forms.continue', { capitalized: true })}
            </Button>
        </CardSignIn>
    );
};
