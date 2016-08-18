import * as React from 'react';
import * as ReactDom from 'react-dom';
import ButtonIcon from './ButtonIcon';
import * as classnames from 'classnames';
import './style/Button.less';
import { _fitlerProps } from '../../util/domUtil';

// theme 等级由大至小 --> 判断顺序由大至小
let _theme  = ['dark', 'red', 'pink' , 'green', 'blue', 'light'];
let _dispaly = ['block', 'inline'];
let _size = ['large', 'small', 'normalsize'];
let _type = ['clear', 'outline', 'normaltype'];
let _shape = ['round', 'normalshape'];
let _loading = [ true ];

export default class Button extends React.PureComponent<IProps, any> {
    // static properties
    //static Icon: any;
    static defaultProps = {
        light: true, // default theme
        inline: true, // default dispaly
        normalsize: true, // default size
        normaltype: true, // default type
        normalshape: true, // default shape
        loading: false // default load
    }
    // inistance properties
    theme_classname: string ;
    constructor() { super() }



    // 初始化
    componentWillMount() {
        let { theme, display, size, type, shape, loading, icon } = this.props;
        let _p = this.props ;
        this.theme_classname = classnames(
            `hzp-btn`,
            theme ?  `btn-${theme}` : `btn-${_fitlerProps(_p, _theme)}`,
            display ? `btn-${display}` : `btn-${_fitlerProps(_p, _dispaly)}`,
            size ? `size-${size}` : `size-${_fitlerProps(_p, _size)}`,
            type ? `type-${type}` : `type-${_fitlerProps(_p, _type)}`,
            shape ? `shape-${shape}` : `shape-${_fitlerProps(_p, _shape)}`,
            _p.children ? `` : `just-icon`
        )
    }

    componentWillReceiveProps(_np: IProps) {
        let { loading } = _np ;
        this.theme_classname = classnames(this.theme_classname, loading ? `loading` : ``);
    }

    render() {
        let { icon, loading, iconRight, onClick } = this.props;
        return (<button className={ this.theme_classname } onClick={ onClick }>
            {
                icon ?
                    loading ?
                        <ButtonIcon icon={ icon } loading={ loading } />
                    :
                        <ButtonIcon icon={ icon} loading={ false } />
                :
                    loading ?
                        iconRight ?
                            <ButtonIcon icon={ false } loading={ loading } />
                        :
                            <ButtonIcon icon={ `icon-loading` } loading={ loading } />
                    :
                        <ButtonIcon icon={ false } loading={ false } />
            }
            {this.props.children}
            {
                iconRight ?
                    loading ?
                        <ButtonIcon icon={ iconRight } loading={ loading } />
                    :
                        <ButtonIcon icon={ iconRight} loading={ false } />
                :
                    loading ?
                        <ButtonIcon icon={ false } loading={ false } />
                    :
                        <ButtonIcon icon={ false } loading={ false } />

            }
        </button>)
    }
}

interface IProps{
    // React stuff
    style?: React.CSSProperties;
    onClick? : React.FormEventHandler;
    // 自定义
    loading?: boolean; // 加载动画
    icon?: string ; // 默认为左边
    iconRight? : string;
    theme? : string;
        light? : boolean; // 灰白
        blue? : boolean; // 蓝色
        green? : boolean; // 绿色
        pink? : boolean; // 粉色
        red? : boolean; // 红色
        dark? : boolean; // 黑色
    display?: string;
        inline? :boolean; // 行内
        block? :boolean; // 块级
    size?: string;
        normalsize?: boolean; // 默认
        small?: boolean; // 小
        large?: boolean; // 大
    type?: string;
        outline?: boolean; // outline
        clear?: boolean; // 只有文字
        normaltype?: boolean; // 正常
    shape?: string;
        round?: boolean; // 圆形
        normalshape?: boolean // 正常
}
