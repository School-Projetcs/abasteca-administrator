import styled from 'styled-components';

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 16px;

    #for-forms,
    button {
        width: 100% !important;
        min-width: 100% !important;
        max-width: 100% !important;
    }
    button {
        margin-top: 36px !important;
    }
    #select-label {
        margin-top: 22px !important;
        width: 100%;
        text-align: left;
        &:after {
            content: '*';
            color: ${({ theme }) => theme.colors.error};
        }
    }
`;

export const Select = styled.select`
    width: 100%;
    font-size: 16px;
    padding: 14px 6px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin-top: 6px;
    outline: none;

    option {
        cursor: pointer;
        background-color: ${({ theme }) => `${theme.colors.primary}1b`};
    }

    #selected {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
`;
