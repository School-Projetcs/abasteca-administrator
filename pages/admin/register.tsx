import { Container, Menu } from '@components';
import { MenuLayout } from '@layouts/menu-layout';

import { AdminPageProps } from './types';

const Register: AdminPageProps = () => {
    return (
        <Container
            bg="background"
            // display="flex"
            // flexDirection={['column', 'row']}
            // justifyContent="space-between"
            // alignItems="center"
            minHeight="100vh"
            // padding={['16px 0 0 0', '26px']}
        >
            <Menu />
            <h2>Welcome to register</h2>
        </Container>
    );
};

Register.layout = MenuLayout;

export default Register;
