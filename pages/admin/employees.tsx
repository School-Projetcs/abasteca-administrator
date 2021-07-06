import { MenuLayout } from '@layouts/menu-layout';

import { AdminPageProps } from './types';

const Employees: AdminPageProps = () => {
    return <div>Welcome to employees</div>;
};

Employees.layout = MenuLayout;

export default Employees;
