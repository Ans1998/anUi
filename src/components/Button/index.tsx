import React from 'react'
import classNames from 'classnames'

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }
//
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
    className ?: string;
    disabled ?: boolean;
    size ?: ButtonSize;
    btnType ?: ButtonType;
    href ?: string;
    children: React.ReactNode;
}
// 联合类型只会返回A或者B的数据
// type NativeButtonProps = BaseButtonProps | React.ButtonHTMLAttributes<HTMLElement>;

// 现在我们两种都要使用Intersection Types（交查类型）
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

// 在button有些属性是必须的在(link)a连接属性上我们无法填写button属性
// Partial<T> 可把所有属性设置成 可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: React.FC<ButtonProps> = (props) => {
    const {disabled, btnType, className, size, children, href, ...restProps} = props;
    // btn，btn-lg，btn-primary
    const classes = classNames('an-btn', className, {
        [ `an-btn-${btnType}` ]: btnType,
        [ `an-btn-${size}` ]: size,
        'disabled': (btnType === 'link') && disabled
    });
    if (btnType === 'link' && href) {
        return (
            <a href={href} className={classes} {...restProps}>{children}</a>
        );
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps}> {children} </button>
        );
    }
};

// 设置默认Props
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
};

export default Button;
