import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';
import { StyledThemeProvider } from '@definitions/styled-components';
import GlobalStyles from '@styles/globalStyles';
import { EmptyLayout } from '@layouts';
import { MyAppProps } from '@types';
import AuthProvider from '@context';
import { firebaseInit } from '@services';

firebaseInit();

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
    const Layout = Component.layout || EmptyLayout;

    return (
        <StyledThemeProvider>
            <GlobalStyles />

            <SnackbarProvider>
                <AuthProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AuthProvider>
            </SnackbarProvider>
        </StyledThemeProvider>
    );
}

export default MyApp;
