import { Container } from '@components';
import { AdminLayout } from '@layouts';

import { AdminPageProps } from './types';

const AdminHomePage: AdminPageProps = () => {
    return (
        <Container bg="background">
            <h2>Hello from Admin Home Page</h2>
        </Container>
    );
};

AdminHomePage.layout = AdminLayout;

export default AdminHomePage;
