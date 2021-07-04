import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { theme } from './theme';

export const ThemeContext = React.createContext<DefaultTheme>(
    {} as DefaultTheme,
);

export const useTheme = () => {
    const theme = React.useContext(ThemeContext);

    return {
        ...theme,
    };
};

export const StyledThemeProvider: React.FC = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
