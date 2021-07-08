import { capitalizeWord } from '@word-book';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

type ContainerProps = {
    focused: boolean;
};

type InputContainerProps = {
    label: string;
    errorMsg?: string;
};

const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 320px;
    height: ${({ theme }) => theme.inputHeight.md};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 0 8px;
    position: relative;
    margin-top: 38px;

    span:first-child {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textPrimary};
        border-radius: 8px;
        font-weight: bold;
        padding: 6px 8px;
    }

    input {
        border: unset;
        outline: none;
        flex-grow: 1;
        margin: 0 8px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.textSecondary};
        &:focus {
            font-weight: bold;
        }
    }

    #label {
        display: ${({ focused }) => (focused ? 'block' : 'none')};
        position: absolute;
        left: -0.5px;
        top: -28px;
    }

    #label:after {
        font-weight: bold;
        content: '*';
        margin-left: 3px;
        color: ${({ theme }) => theme.colors.error};
    }

    #eyes {
        font-size: 22px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }

    ${space};
`;

const ErrorText = styled.caption`
    text-align: left;
    margin-top: 3px;
    font-size: 14px;
    padding-left: 10px;
    width: 100%;
    color: ${({ theme }) => theme.colors.error};
`;

export const InputContainer: React.FC<InputContainerProps> = ({
    label = '',
    errorMsg,
    children,
}) => {
    const inputRef = useRef(null);
    const [focused, setFocused] = useState<boolean>(false);

    const handleFocus = () => {
        if (!focused) {
            setFocused(true);
        }
    };

    const handleBlur = () => {
        if (inputRef && inputRef.current) {
            const value = inputRef.current.querySelector('input').value;
            setFocused(value ? true : false);
        }
    };

    useEffect(() => {
        if (inputRef && inputRef.current) {
            const inputField = inputRef.current.querySelector('input');

            inputField.addEventListener('focus', handleFocus);
            inputField.addEventListener('blur', handleBlur);

            return () => {
                inputField.removeEventListener('focus', handleFocus);
                inputField.removeEventListener('blur', handleBlur);
            };
        }
    }, []);

    useEffect(() => {
        if (!label) throw new Error('Missing Label Property');
    }, []);

    return (
        <>
            <Container id="for-forms" focused={focused} ref={inputRef}>
                {children}
                {label && <span id="label">{capitalizeWord(label)}</span>}
            </Container>
            {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        </>
    );
};
