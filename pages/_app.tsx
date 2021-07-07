import React from 'react';
import { StyledThemeProvider } from '@definitions/styled-components';
import GlobalStyles from '@styles/globalStyles';
import { EmptyLayout } from '@layouts';
import { MyAppProps } from '@types';
import AuthProvider from '@context';

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
    const Layout = Component.layout || EmptyLayout;

    return (
        <StyledThemeProvider>
            <GlobalStyles />
            <AuthProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </StyledThemeProvider>
    );
}

export default MyApp;
