import React, {useState} from 'react';
import classNames from "classnames";

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}


interface BaseAlertProps {
    altType ?: AlertType;
    title ?: String,
    duration ?: number,
    className ?: string,
    children: React.ReactNode;
}

export const Alert:React.FC<BaseAlertProps> = (props) => {
    const {altType, title, duration = 3000, className, children} = props;
    const [showAlert, setShowAlert] = useState(true);


    let classes = classNames('an-alert', className, {
        [ `an-alert-${altType}` ]: altType
    });

    console.log(duration);

    // let time = setTimeout(() => {
    //     // console.log('定时器执行');
    //     setShowAlert(false);
    //     clearTimeout(time);
    // }, duration);

    return (
        showAlert ?
        <div className={classes} onClick={() => {setShowAlert(false)}}>
            <div className="an-alert-header">
                {
                    title ? <div className="an-alert-header-left an-alert-left-title">{title}</div> : <div className="an-alert-header-left an-alert-left-content">{children}</div>
                }
                <div className="an-alert-header-right an-alert-left-content" onClick={() => {
                    setShowAlert(false)
                    // console.log(alertContent);
                    // alertContent.hidden = true;
                }}>关闭</div>
            </div>
            {
                children && title ? <div className="an-alert-content">{children}</div> : null
            }
        </div>
            :
            null
    );
};

Alert.defaultProps = {
  altType: AlertType.Default
};

export default Alert;
