import React from 'react';
import styled from 'styled-components';

const HeadlineHeaderContainer = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.white};

    #big-letter {
        font-size: 5em;
        line-height: 0.4;
        margin-right: 4px;
    }

    div span {
        display: block;

        &:first-child {
            font-size: 1.6em;
        }
    }
`;

export const HeadlineHeader: React.FC = () => {
    return (
        <HeadlineHeaderContainer>
            <span id="big-letter">a</span>
            <div>
                <span>basteça</span>
                <span>dministrador</span>
            </div>
        </HeadlineHeaderContainer>
    );
};
