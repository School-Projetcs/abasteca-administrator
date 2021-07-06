import { useState } from 'react';
import { FC } from 'react';
import { TabsContainer } from './styles';
import { Tab } from './tab';

interface TabsProps {
    tabs: string[];
}

export const Tabs: FC<TabsProps> = ({ tabs, children }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const onClickTabItem = (tab: number) => {
        setActiveTab(tab);
    };

    return (
        <TabsContainer className="tabs">
            <ol className="tab-list">
                {tabs.map((label, index) => (
                    <Tab
                        activeTab={activeTab}
                        key={label}
                        tabIndex={index}
                        label={label}
                        onTabClick={onClickTabItem}
                    />
                ))}
            </ol>
            <div className="tab-content">{children[activeTab]}</div>
        </TabsContainer>
    );
};
