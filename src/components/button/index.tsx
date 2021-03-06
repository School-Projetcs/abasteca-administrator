import { FC } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { variant, VariantArgs, space, SpaceProps } from 'styled-system';

type ButtonVariants = 'primary' | 'success' | 'error';

interface ButtonContainerProps extends VariantArgs, SpaceProps {
    variant: ButtonVariants;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
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

type ButtonProps = ButtonContainerProps & {
    isLoading?: boolean;
};

export const Button: FC<ButtonProps> = ({ isLoading, children, ...props }) => (
    <ButtonContainer {...props}>
        {(isLoading && (
            <Loader type="ThreeDots" color="#fff" height={30} width={30} />
        )) ||
            children}
    </ButtonContainer>
);
