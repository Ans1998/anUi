import React, {FC, useState} from 'react';
import classNames from "classnames";
import Icon from "../Icon";
import Transition from "../Transition";

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

// export enum AlertType {
//     Success = 'success',
//     Default = 'default',
//     Danger = 'danger',
//     Warning = 'warning'
// }


interface BaseAlertProps {
    /** alert 类型 */
    altType ?: AlertType;
    /** alert 标题 */
    title ?: String,
    /** alert 显示时间 */
    duration ?: number,
    className ?: string,
    /** alert 内容 */
    children: React.ReactNode;
}

export const Alert:FC<BaseAlertProps> = (props) => {
    const {altType, title, duration = 3000, className, children} = props;
    const [showAlert, setShowAlert] = useState(true);


    let classes = classNames('an-alert', className, {
        [ `an-alert-${altType}` ]: altType
    });

    console.log(duration);

    let time = setTimeout(() => {
        // console.log('定时器执行');
        setShowAlert(false);
        clearTimeout(time);
    }, duration);

    return (
        <Transition in={showAlert} timeout={300} animation="zoom-in-top" wrapper>
            <div className={classes} onClick={() => {
                setShowAlert(false)
            }}>
                <div className="an-alert-header">
                    {
                        title ? <div className="an-alert-header-left an-alert-left-title">{title}</div> :
                            <div className="an-alert-header-left an-alert-left-content">{children}</div>
                    }
                    <div className="an-alert-header-right an-alert-left-content" onClick={() => {
                        setShowAlert(false)
                        // console.log(alertContent);
                        // alertContent.hidden = true;
                    }}>
                        <Icon icon="times" size='lg'/>
                    </div>
                </div>
                {
                    children && title ? <div className="an-alert-content">{children}</div> : null
                }
            </div>
        </Transition>
    );
};

Alert.defaultProps = {
  altType: 'default'
};

export default Alert;
