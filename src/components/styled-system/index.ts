import styled from 'styled-components';
import {
    border,
    color,
    layout,
    space,
    typography,
    flexbox,
    compose,
} from 'styled-system';
import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
    ${compose(border, color, layout, space, typography, flexbox)};
`;
