import 'styled-components';

type CommonColors = 'transparent' | 'white';

type ExtendedColors =
    | CommonColors
    | 'gradient'
    | 'headerBg'
    | 'primary'
    | 'textColor'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    | 'success'
    | 'accent';

declare module 'styled-components' {
    export interface BaseTheme {
        colors: Record<CommonColors, string>;
    }

    export interface DefaultTheme extends BaseTheme {
        colors: Record<ExtendedColors, string>;
    }
}
