import { FC } from 'react';

interface TabPanelProps {
    label: string;
}

export const TabPanel: FC<TabPanelProps> = ({ label, children }) => (
    <div id={label}>{children}</div>
);
