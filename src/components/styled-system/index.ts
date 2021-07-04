import styled from 'styled-components';
import {
    border,
    color,
    layout,
    space,
    typography,
    flexbox,
    position,
    boxShadow,
} from 'styled-system';
import { ContainerProps, CardSignInProps } from './types';

export const Container = styled.div<ContainerProps>`
    ${border};
    ${color};
    ${layout};
    ${space};
    ${typography};
    ${flexbox};
`;

export const CardSignIn = styled.div<CardSignInProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: 600;
    }

    p {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.textColor};
    }

    ${border};
    ${color};
    ${layout};
    ${space};
    ${position};
    ${boxShadow};
    ${typography};
`;
