import React from 'react';
import { AppProps } from 'next/app';
import { StyledThemeProvider } from '@definitions/styled-components';
import GlobalStyles from '@styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <GlobalStyles />
            <Component {...pageProps} />
        </StyledThemeProvider>
    );
}

export default MyApp;
