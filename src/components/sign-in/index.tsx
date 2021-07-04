import React from 'react';

import { Button } from '@components';
import { CardSignIn } from './styles';

export const SignIn: React.FC = () => {
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
        >
            <h2>Qualquer coisa</h2>
            <div>Qualquer coisa</div>
            <Button
                variant="success"
                size="sm"
                href="https://pankod.github.io/superplate/"
                target="_blank"
            >
                login
            </Button>
        </CardSignIn>
    );
};
