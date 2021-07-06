import { FC } from 'react';
import styled from 'styled-components';

const TableContainer = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;

    td,
    th {
        text-align: left;
        padding: 8px;
    }

    tr {
        border-radius: 8px;
    }

    tr:nth-child(even) {
        background-color: ${({ theme }) => `${theme.colors.primary}1b`};
        &:hover {
            opacity: 0.8;
        }
    }

    tr:hover {
        background-color: ${({ theme }) => `${theme.colors.primary}1b`};
    }

    tr:first-child:hover {
        opacity: 1;
    }
`;

interface TableProps {
    header: string[];
    data: string[][];
}

export const Table: FC<TableProps> = ({ header, data }) => {
    return (
        <TableContainer>
            {header && (
                <tr>
                    {header.map((cell, index) => (
                        <th key={`${cell}-@-${index}`}>{cell}</th>
                    ))}
                </tr>
            )}
            {data &&
                data.map((row, index) => (
                    <tr key={`${row}-@-${index}`}>
                        {row.map((cell, ind) => (
                            <td key={`${index}-.-${cell}-@-${ind}`}>{cell}</td>
                        ))}
                    </tr>
                ))}
        </TableContainer>
    );
};
