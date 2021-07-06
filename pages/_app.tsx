import React from 'react';
import { StyledThemeProvider } from '@definitions/styled-components';
import GlobalStyles from '@styles/globalStyles';
import { EmptyLayout } from '@layouts/empty-layout';
import { MyAppProps } from '@types/page';

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
    const Layout = Component.layout || EmptyLayout;

    return (
        <StyledThemeProvider>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StyledThemeProvider>
    );
}

export default MyApp;
