import styled from 'styled-components';
import {
    border,
    color,
    layout,
    space,
    typography,
    flexbox,
} from 'styled-system';
import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
    ${border};
    ${color};
    ${layout};
    ${space};
    ${typography};
    ${flexbox};
`;
