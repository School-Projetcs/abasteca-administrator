import styled from 'styled-components';
import { border, color, layout, space, typography } from 'styled-system';

export const Container = styled.div`
    ${border};
    ${color};
    ${layout};
    ${space};
    ${typography};
`;

export const CardSignIn = styled.div`
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
    ${typography};
`;
