import React from 'react';
import { Container, Menu } from '@components';

export const AdminLayout: React.FC = ({ children }) => {
    return (
        <Container
            bg="background"
            display="flex"
            minHeight="100vh"
            flexDirection={['column', 'row']}
            alignItems={[undefined, 'center']}
            padding={['88px 16px 16px 16px', '32px']}
            justifyContent={[undefined, 'space-between']}
        >
            <Menu />
            {children}
        </Container>
    );
};
