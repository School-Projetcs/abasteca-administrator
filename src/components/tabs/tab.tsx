import { FC } from 'react';

interface TabProps {
    label: string;
    activeTab: number;
    tabIndex: number;
    onTabClick: (label) => void;
}

export const Tab: FC<TabProps> = ({
    onTabClick,
    label,
    tabIndex,
    activeTab,
}) => (
    <li
        className={`tab-list-item ${
            (activeTab === tabIndex && 'tab-list-active') || 'tab-list-inactive'
        }`}
        onClick={() => onTabClick(tabIndex)}
    >
        {label}
    </li>
);
