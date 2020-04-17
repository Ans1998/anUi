import React, {FC, useContext} from 'react'
import classNames from 'classnames'

import {MenuContext} from "./index"

export interface MenuItemProps {
    /** menuItem 索引*/
    index ?: string,
    /** menuItem 是否可点 */
    disabled ?: boolean,
    /** menuItem className*/
    className ?: string,
    /** menuItem 样式*/
    style ?: React.CSSProperties
}

export const MenuItem: FC<MenuItemProps> = (props) => {
    const {index, disabled, className, style, children} = props;

    const context = useContext(MenuContext);

    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });

    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    };

    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    );
};
MenuItem.displayName = 'MenuItem';

export default MenuItem;
