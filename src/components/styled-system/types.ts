import {
    BorderProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BoxShadowProps,
} from 'styled-system';

export interface ContainerProps
    extends BorderProps,
        ColorProps,
        TypographyProps,
        SpaceProps,
        LayoutProps,
        FlexboxProps,
        BoxShadowProps {
    children: React.ReactNode;
}
