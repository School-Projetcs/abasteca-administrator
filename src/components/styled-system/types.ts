import {
    BorderProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BoxShadowProps,
    PositionProps,
} from 'styled-system';

export interface ContainerProps
    extends BorderProps,
        ColorProps,
        TypographyProps,
        SpaceProps,
        LayoutProps,
        FlexboxProps,
        PositionProps,
        BoxShadowProps {
    children: React.ReactNode;
}
