import React, {FC, createContext, useState} from "react";

import {TabItemProps} from './item'

interface TableProps {
    /** tabs index*/
    defaultIndex: number,
    /** tabs 点击事件*/
    onSelect:  (selectIndex: number) => void
}
interface ITabsContext {
    index: number,
    onSelect ?: (selectIndex: number) => void,
}
// 跨组件传上下文
export const TabsContext = createContext<ITabsContext>({ index: 0 });

export const Tabs:FC<TableProps> = (props) => {
    const {defaultIndex, onSelect, children} = props;

    const [currentActive, setActive] = useState(defaultIndex);

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabItemProps>; // 获取到dom跟组件属性
            const { displayName } = childElement.type;
            if (displayName === 'TabItem') {
                return React.cloneElement(childElement)
            } else {
                console.error('Tab has a child which is not TabItem')
            }
        });
    };
    // 点击事件更新页面
    const handleClick = (index: number) => {
        setActive(index);
        if (onSelect) {
            onSelect(index)
        }
    };

    // 跨组件传值对象
    const passedContext: ITabsContext = {
        index: currentActive ?? 0,
        onSelect: handleClick
    };

    return (
        <div className="an-table-content">
            <div className="table-li">
                <TabsContext.Provider value={passedContext}>
                {renderChildren()}
                </TabsContext.Provider>
            </div>
        </div>
    )
};

Tabs.defaultProps = {
    defaultIndex: 0
};

export default Tabs;
