import React, {FC, createContext, useState} from 'react'
import classNames from 'classnames'
import {MenuItemProps} from './item'

type MenuMode = "horizontal" | "vertical"
type SelectCallback = (selectIndex: string) => void
export interface MenuProps {
    /** menu index */
    defaultIndex ?: string,
    /**menu className*/
    className ?: string,
    /**menu 类型*/
    mode ?: MenuMode,
    /**menu 样式*/
    style ?: React.CSSProperties,
    /**menu 点击事件*/
    onSelect ?: SelectCallback,
    /**menu 展开子菜单*/
    defaultOpenSubMenus ?: string[]
}
interface IMenuContext {
    index: string,
    onSelect ?: SelectCallback,
    mode ?: MenuMode,
    defaultOpenSubMenus ?: string[]
}
// 跨组件传上下文
export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus} = props;

    const [currentActive, setActive] = useState(defaultIndex);

    const classes = classNames('an-menu', className, {
        'an-menu-vertical': mode === 'vertical',
        'an-menu-horizontal': mode !== 'vertical',
    });

    const handleClick = (index: string) => {
        setActive(index);
        if (onSelect) {
            onSelect(index)
        }
    };

    const passedContext: IMenuContext = {
        index: currentActive || '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    };

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, { index: index.toString() })
            } else {
                console.error('Menu has a child which is not MenuItem')
            }
        })
    };

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    );
};

Menu.defaultProps = {
    defaultIndex: '0',
    mode: "horizontal",
    defaultOpenSubMenus: []
};

export default Menu;
