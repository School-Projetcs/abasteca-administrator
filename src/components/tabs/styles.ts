import styled from 'styled-components';

export const TabsContainer = styled.div`
    .tab-list,
    .tab-content {
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        padding: 8px 16px;
        width: 100%;
    }

    .tab-list-item {
        display: inline-block;
        list-style: none;
        padding: 0.5rem 0.75rem;
        border-radius: 18px;
        margin: 0 6px;
        cursor: pointer;
    }

    .tab-list-inactive {
        &:hover {
            background-color: ${({ theme }) => `${theme.colors.primary}1b`};
            opacity: 0.8;
        }
    }

    .tab-list-active {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        opacity: 1 !important;
    }

    .tab-content {
        min-height: 332px;
    }
`;
