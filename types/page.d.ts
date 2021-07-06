import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export interface Page<P = Record<string, unknown>> extends NextPage<P> {
    // You can disable whichever you don't need
    getLayout?: (page: ReactElement) => ReactNode;
    layout?: ComponentType;
}

export type MyAppProps = AppProps & {
    Component: Page;
};
