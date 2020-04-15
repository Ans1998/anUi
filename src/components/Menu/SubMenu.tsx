import React, {useContext, useState,FunctionComponentElement} from 'react'
import classNames from 'classnames'
import {MenuContext} from './index'
import {MenuItemProps} from './item'

export interface SubMenuProps {
    index ?: string,
    title : string,
    className ?: string
}

const SubMenu:React.FC<SubMenuProps> = ( {index, title, children,className}) => {
    const context = useContext(MenuContext);

    const openSubMenus = context.defaultOpenSubMenus as Array<string>;
    const isOpen = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false;

    const [menuOpen, setMenuOpen] = useState(isOpen);

    const classes = classNames('menu-item an-submenu-item', classNames, {
        'is-active': context.index === index
    });

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(!menuOpen)
    };
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(() => {
            setMenuOpen(toggle)
        }, 300)
    };

    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
    } : {};

    const renderChildren = () => {
        const subMenuClass = classNames('an-submenu', {
            'menu-opened': menuOpen
        });
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: `${index}-${i}`})
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component")
            }
        });
        return (
            <ul className={subMenuClass}>
                {childrenComponent}
            </ul>
        )
    };

    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="an-submenu-title" {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
};
SubMenu.displayName = 'SubMenu';

export default SubMenu
