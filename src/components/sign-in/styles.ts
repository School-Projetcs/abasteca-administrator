import { ContainerProps } from '@components/styled-system/types';
import styled from 'styled-components';
import {
    border,
    color,
    layout,
    space,
    typography,
    position,
    boxShadow,
    PositionProps,
} from 'styled-system';

interface CardSignInProps extends ContainerProps, PositionProps {}

export const CardSignIn = styled.form<CardSignInProps>`
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
