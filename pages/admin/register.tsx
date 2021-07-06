import { Container } from '@components';
import { AdminLayout } from '@layouts';

import { AdminPageProps } from './types';

const Register: AdminPageProps = () => {
    return (
        <Container bg="background">
            <h2>Welcome to register</h2>
        </Container>
    );
};

Register.layout = AdminLayout;

export default Register;
