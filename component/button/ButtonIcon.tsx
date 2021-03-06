import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as classnames from 'classnames';
import './style/ButtonIcon.less';
import '../../assets/font/iconfont.css';

export default class ButtonIcon extends React.PureComponent<IButtonIconProps, any>{

    constructor() { super(); }

    render() {
        let { icon, loading } = this.props;
        let c = classnames(
            `iconfont`,
            icon ? icon : '',
            loading ? 'loading' : ''
        )

        return (
            icon ? <span className={ c }></span> : <span></span>
        )
    }
}

interface IButtonIconProps {
    icon? : any,
    loading? : boolean
}
