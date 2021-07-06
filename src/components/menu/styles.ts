import { ContainerProps } from '@components/styled-system/types';
import styled from 'styled-components';
import {
    border,
    color,
    layout,
    space,
    typography,
    flexbox,
    compose,
    position,
} from 'styled-system';

export const Toggle = styled.span`
    display: flex;
    position: absolute;
    padding: 12px;
    font-size: 22px;
    top: 16px;
    right: 16px;
    z-index: 1;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &.hidden {
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 30%), 0 1px 2px 0 rgb(0 0 0 / 20%);
    }

    @media screen and (min-width: 40em) {
        display: none;
    }
`;

export const MenuContainer = styled.aside<ContainerProps>`
    @media screen and (min-width: 40em) {
        /* transform: translateY(25%) translateX(32px); */
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 10%);
    }

    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        list-style: none;
        width: 100%;
        align-items: center;
        margin: 0;
        padding: 0 32px;
    }

    li {
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
        padding: 12px 52px;
        margin: 6px 0;
        border-radius: ${({ theme }) => theme.borderRadius.md};

        &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => `${theme.colors.primary}1b`};
            opacity: 0.8;
        }
    }

    ${compose(border, color, layout, space, typography, flexbox, position)};
`;
