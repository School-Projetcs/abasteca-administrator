import 'styled-components';

type CommonColors = 'transparent' | 'white';

type ExtendedColors =
    | CommonColors
    | 'gradient'
    | 'background'
    | 'headerBg'
    | 'primary'
    | 'textColor'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    | 'success'
    | 'accent';

type InputHeight = {
    // sm: string;
    md: string;
    // lg: string;
};

type BorderRadius = {
    md: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Record<ExtendedColors, string>;
        inputHeight: InputHeight;
        borderRadius: BorderRadius;
    }
}
