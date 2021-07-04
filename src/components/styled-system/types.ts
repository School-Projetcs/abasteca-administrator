import {
    BorderProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
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

export interface CardSignInProps extends ContainerProps, PositionProps {}
