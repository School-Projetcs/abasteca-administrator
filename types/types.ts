import { ComponentType, FC } from 'react';

interface AdminLayoutProps {
    layout: ComponentType;
}

export interface AdminPageProps extends AdminLayoutProps, FC {}
