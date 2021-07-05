import styled from 'styled-components';
import { variant, VariantArgs, space, SpaceProps } from 'styled-system';

type ButtonVariants = 'primary' | 'success' | 'error';

interface ButtonProps extends VariantArgs, SpaceProps {
    variant: ButtonVariants;
}

export const Button = styled.button<ButtonProps>`
    appearance: none;
    font-family: inherit;
    max-width: 320px;
    width: 100%;
    height: ${({ theme }) => theme.inputHeight.md};
    border: unset;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 50;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    ${space};
    ${variant({
        variants: {
            primary: {
                color: 'white',
                bg: 'primary',
            },
            success: {
                color: 'white',
                bg: 'success',
            },
            error: {
                color: 'white',
                bg: 'error',
            },
        },
    })};
`;
